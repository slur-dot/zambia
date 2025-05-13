import { NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/db"

// Define the schema for questionnaire responses
const questionnaireResponseSchema = z.object({
  userId: z.string().optional(), // Optional for anonymous responses
  isAnonymous: z.boolean(),
  responses: z.array(
    z.object({
      questionId: z.number(),
      answer: z.enum(["agree", "disagree"]),
      opinion: z.string().optional(),
    })
  ),
  userInfo: z.object({
    gender: z.string(),
    ageRange: z.string(),
    isDifferentlyAbled: z.boolean(),
    // Optional fields for non-anonymous responses
    nrcNumber: z.string().optional(),
    phoneNumber: z.string().optional(),
    fullName: z.string().optional(),
  }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = questionnaireResponseSchema.parse(body)

    // Create user record
    const user = await prisma.user.create({
      data: {
        gender: validatedData.userInfo.gender,
        ageRange: validatedData.userInfo.ageRange,
        isDifferentlyAbled: validatedData.userInfo.isDifferentlyAbled,
        isAnonymous: validatedData.isAnonymous,
        nrcNumber: validatedData.userInfo.nrcNumber,
        phoneNumber: validatedData.userInfo.phoneNumber,
        fullName: validatedData.userInfo.fullName,
      },
    })

    // Create questionnaire responses
    await prisma.questionnaireResponse.createMany({
      data: validatedData.responses.map((response) => ({
        userId: user.id,
        questionId: response.questionId,
        answer: response.answer,
        opinion: response.opinion,
      })),
    })

    return NextResponse.json(
      { message: "Questionnaire response saved successfully", userId: user.id },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Error saving questionnaire response:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 