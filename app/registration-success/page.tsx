import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function RegistrationSuccess() {
  return (
    <div className="bg-[#fbe5e1] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <CheckCircle className="w-16 h-16 text-[#2a9d8f] mx-auto mb-4" />

          <h1 className="text-2xl font-bold mb-4 text-[#e63946]">Registration Successful!</h1>

          <p className="mb-6">
            Thank you for registering to participate in the Zambia Constitution Amendment process. Your involvement is
            crucial to shaping our nation's future.
          </p>

          <div className="bg-gray-100 p-4 rounded-md mb-6 text-left">
            <h2 className="font-bold mb-2">What happens next?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You will receive a confirmation email shortly</li>
              <li>We'll keep you updated on upcoming consultation events</li>
              <li>You'll have access to submit feedback on draft amendments</li>
              <li>You can participate in regional forums in your area</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="bg-[#e63946] hover:bg-[#c1272d] text-white font-bold py-2 px-6 rounded-md transition-all inline-block"
            >
              Return to Homepage
            </Link>

            <p className="text-sm text-gray-600">
              If you have any questions, please contact us at <br />
              <a href="mailto:info@zambiaconstitution.gov.zm" className="text-[#e63946] hover:underline">
                info@zambiaconstitution.gov.zm
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
