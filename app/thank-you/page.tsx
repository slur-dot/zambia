"use client"

import { useRouter } from "next/navigation"

export default function ThankYou() {
  const router = useRouter()

  return (
    <div className="bg-[#ffd7c2] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2f2f]">Thank You!</h1>
          <p className="text-lg md:text-xl mb-8 text-[#2f2f2f]">
            Your responses have been recorded successfully. Your input is valuable in shaping Zambia's constitutional future.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => router.push("/")}
              className="bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-3 px-8 rounded"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 