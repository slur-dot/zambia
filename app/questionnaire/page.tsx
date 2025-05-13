"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { questions } from "@/lib/questions"
import { useUser } from "@/lib/context"

export default function Questionnaire() {
  const router = useRouter()
  const { userInfo, isAnonymous } = useUser()
  const [currentQuestion, setCurrentQuestion] = useState(0) // Start at 0 to show user info validation first
  const totalQuestions = questions.length
  const progress = Math.round((currentQuestion / (totalQuestions + 1)) * 100)

  const [responses, setResponses] = useState<Array<{
    questionId: number
    answer: "agree" | "disagree" | null
    opinion: string
  }>>(
    questions.map((q) => ({
      questionId: q.id,
      answer: null,
      opinion: "",
    }))
  )

  const validateUserInfo = () => {
    if (!userInfo) return false
    
    // For both anonymous and non-anonymous users, these fields are required
    const requiredFields = {
      gender: userInfo.gender,
      ageRange: userInfo.ageRange,
      isDifferentlyAbled: userInfo.isDifferentlyAbled
    }

    // Check if any required field is empty or undefined
    const hasEmptyRequiredFields = Object.values(requiredFields).some(
      value => value === undefined || value === null || value === ""
    )

    if (hasEmptyRequiredFields) {
      return false
    }

    // For non-anonymous users, these additional fields are required
    if (!isAnonymous) {
      const nonAnonymousFields = {
        nrcNumber: userInfo.nrcNumber,
        phoneNumber: userInfo.phoneNumber,
        fullName: userInfo.fullName
      }

      const hasEmptyNonAnonymousFields = Object.values(nonAnonymousFields).some(
        value => value === undefined || value === null || value === ""
      )

      if (hasEmptyNonAnonymousFields) {
        return false
      }
    }

    return true
  }

  // Prevent access to questionnaire if user info is not complete
  useEffect(() => {
    if (currentQuestion > 0 && !validateUserInfo()) {
      setCurrentQuestion(0)
    }
  }, [currentQuestion, userInfo, isAnonymous])

  const handleStart = () => {
    if (validateUserInfo()) {
      setCurrentQuestion(1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setCurrentQuestion(0) // Go back to user info
    }
  }

  const handleNext = async () => {
    // Ensure current question is answered before proceeding
    if (!currentResponse.answer) {
      return
    }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Submit all responses
      try {
        const response = await fetch("/api/questionnaire", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            responses,
            userInfo,
            isAnonymous,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to submit questionnaire")
        }

        // Redirect to thank you page
        router.push("/thank-you")
      } catch (error) {
        console.error("Error submitting questionnaire:", error)
        // TODO: Show error message to user
      }
    }
  }

  // If no current question is selected, show user info validation
  if (currentQuestion === 0) {
    return (
      <div className="bg-[#ffd7c2] min-h-screen">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#2f2f2f]">Questionnaire</h1>
          
          <div className="bg-[#f5b8a8] rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#c83434] mb-4">Please complete your information first:</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Gender: {userInfo?.gender || "Not provided"}</p>
                <p className="font-medium">Age Range: {userInfo?.ageRange || "Not provided"}</p>
                <p className="font-medium">Differently Abled: {userInfo?.isDifferentlyAbled === undefined ? "Not provided" : userInfo.isDifferentlyAbled ? "Yes" : "No"}</p>
                
                {!isAnonymous && (
                  <>
                    <p className="font-medium">NRC Number: {userInfo?.nrcNumber || "Not provided"}</p>
                    <p className="font-medium">Phone Number: {userInfo?.phoneNumber || "Not provided"}</p>
                    <p className="font-medium">Full Name: {userInfo?.fullName || "Not provided"}</p>
                  </>
                )}
              </div>

              {!validateUserInfo() && (
                <p className="text-red-600 font-medium">
                  Please complete all required fields before starting the questionnaire.
                  {!isAnonymous && " For non-anonymous submissions, NRC Number, Phone Number, and Full Name are required."}
                </p>
              )}

              <button
                onClick={handleStart}
                disabled={!validateUserInfo()}
                className={`${
                  validateUserInfo()
                    ? "bg-[#c83434] hover:bg-[#a52015]"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white font-medium py-2 px-6 rounded`}
              >
                Start Questionnaire
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentResponse = responses[currentQuestion - 1]
  const currentQuestionData = questions[currentQuestion - 1]

  return (
    <div className="bg-[#ffd7c2] min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#2f2f2f]">Questionnaire</h1>

        {/* Instructions Box */}
        <div className="bg-[#c83434] text-white rounded-lg p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Instructions:</h2>
          <ol className="list-decimal pl-5 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base">
            <li>For each constitutional issue, please select whether you Agree or Disagree</li>
            <li>You may provide additional comments in the opinion field (optional, maximum 1000 characters)</li>
            <li>You must answer each question before proceeding to the next one</li>
          </ol>
        </div>

        {/* Progress Indicator */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2 sm:mb-0">
            Question {currentQuestionData.id} of {totalQuestions}
          </h3>
          <span className="text-sm text-[#c83434]">{progress}% completed</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#f5b8a8] h-2 rounded-full mb-6">
          <div className="bg-[#c83434] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Question Card */}
        <div className="bg-[#f5b8a8] rounded-lg p-4 md:p-6 lg:p-8">
          {/* Problem */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2">Problem</h3>
            <p className="text-sm md:text-base">{currentQuestionData.problem}</p>
          </div>

          {/* Proposed Solution */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2">Proposed Solution:</h3>
            <p className="text-sm md:text-base">{currentQuestionData.proposedSolution}</p>
          </div>

          {/* If Not Resolved */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2">If Not Resolved:</h3>
            <p className="text-sm md:text-base">{currentQuestionData.ifNotResolved}</p>
          </div>

          {/* Your Vote */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2">Your Vote:</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="agree"
                  name="vote"
                  value="agree"
                  checked={currentResponse.answer === "agree"}
                  onChange={() => {
                    const newResponses = [...responses]
                    newResponses[currentQuestion - 1].answer = "agree"
                    setResponses(newResponses)
                  }}
                  className="w-5 h-5 border-gray-300"
                />
                <label htmlFor="agree" className="ml-2 text-[#49af45] font-medium text-sm md:text-base">
                  Agree
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="disagree"
                  name="vote"
                  value="disagree"
                  checked={currentResponse.answer === "disagree"}
                  onChange={() => {
                    const newResponses = [...responses]
                    newResponses[currentQuestion - 1].answer = "disagree"
                    setResponses(newResponses)
                  }}
                  className="w-5 h-5 border-gray-300"
                />
                <label htmlFor="disagree" className="ml-2 text-[#c83434] font-medium text-sm md:text-base">
                  Disagree
                </label>
              </div>
            </div>
          </div>

          {/* Your Opinion */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-[#c83434] mb-2">Your Opinion (Optional):</h3>
            <textarea
              value={currentResponse.opinion}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[currentQuestion - 1].opinion = e.target.value
                setResponses(newResponses)
              }}
              className="w-full p-3 md:p-4 border border-gray-300 rounded-md focus:outline-none text-sm md:text-base"
              rows={5}
              maxLength={1000}
              placeholder="Your Opinion (Optional):"
            ></textarea>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
            <button
              onClick={handlePrevious}
              className="bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-2 px-6 rounded order-2 sm:order-1"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!currentResponse.answer}
              className={`${
                currentResponse.answer
                  ? "bg-[#c83434] hover:bg-[#a52015]"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-medium py-2 px-6 rounded order-1 sm:order-2`}
            >
              {currentQuestion === totalQuestions ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
