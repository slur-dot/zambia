import Image from "next/image"
import Link from "next/link"

export default function Media() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow bg-[#ffd7c2]">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-8 md:mb-16">
            Media Resources for the Constitution of Zambia (Amendment) Bill, 2025
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Constitution Amendment Bill Card */}
            <div className="border-2 border-[#c83434] rounded-lg p-6 md:p-8 bg-[#fbe5e1]">
              <div className="flex justify-center mb-6">
                <Image src="/images/download-icon.png" alt="Download" width={70} height={85} priority />
              </div>
              <h2 className="text-xl font-bold text-[#c83434] mb-2">Constitution Amendment Bill 2025</h2>
              <p className="text-[#2f2f2f] mb-4">The official Zambia Constitution Amendment Bill for public review.</p>
              <Link href="#" className="inline-block text-[#c83434] hover:underline font-medium">
                Download PDF
              </Link>
            </div>

            {/* Public Consultation Report Card */}
            <div className="border-2 border-[#c83434] rounded-lg p-6 md:p-8 bg-[#fbe5e1]">
              <div className="flex justify-center mb-6">
                <Image src="/images/download-icon.png" alt="Download" width={70} height={85} priority />
              </div>
              <h2 className="text-xl font-bold text-[#c83434] mb-2">Public Consultation Report</h2>
              <p className="text-[#2f2f2f] mb-4">Summary of national consultations and findings.</p>
              <Link href="#" className="inline-block text-[#c83434] hover:underline font-medium">
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
