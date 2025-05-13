import Image from "next/image"
import Link from "next/link"
const issueCards = [
  {
    number: "01",
    title: "Revise The Number Of Constituencies And Wards",
    problem: "Problem: Constituencies Are Too Large, Resulting In Unequal Resource Distribution.",
    solution: "Solution: Redrawing Boundaries Increases Equity And CDF Access.",
  },
  {
    number: "02",
    title: "Revise Nomination Provisions For Resigned Candidates",
    problem: "Problem: Candidates Resign After Nomination And Rejoin Shortly After.",
    solution: "Solution: Clear Guidelines Will Improve Fairness And Reduce Manipulation.",
  },
  {
    number: "03",
    title: "Enhance Representation Of Women, Youths & Persons With Disabilities",
    problem: "Problem: Inadequate Representation In Decision Making.",
    solution: "Solution: Legal Quotas And Reserved Seats Improve Equity.",
  },
  {
    number: "04",
    title: "Include MPs In Local Councils",
    problem: "Problem: MPs Lack Formal Ties To Local Councils.",
    solution: "Solution: Including Them Improves Coordination And Service Delivery.",
  },
  {
    number: "05",
    title: "Specify Timelines For Election Petition Determinations",
    problem: "Problem: Delayed Petitions Undermine Electoral Justice.",
    solution: "Solution: Enforced Timelines Protect Electoral Integrity.",
  },
  {
    number: "06",
    title: "Revise By-Election Provisions",
    problem: "Problem: Frequent By-Elections Are Costly.",
    solution: "Solution: Limit Causes For By-Elections To Emergencies Only.",
  },
  {
    number: "07",
    title: "Revise Number Of Nominated MPs",
    problem: "Problem: Current Process Lacks Transparency.",
    solution: "Solution: Reduce Number And Define Clear Nomination Criteria.",
  },
  {
    number: "08",
    title: "Harmonize Term Of Office For MPs",
    problem: "Problem: Conflicting Timelines Between Constitution And Elections.",
    solution: "Solution: Set Consistent 5-Year Term For MPs.",
  },
  {
    number: "09",
    title: "Ministerial Vacancy 90 Days Before Elections",
    problem: "Problem: Ministers Resign Early, Creating Power Gaps.",
    solution: "Solution: Allow Continued Service Until Handover.",
  },
  {
    number: "10",
    title: "Remove Mayoral Term Limits",
    problem: "Problem: Term Limit Applies Only To Mayors, Not Councillors.",
    solution: "Solution: Equal Terms For All Political Offices.",
  }
];
export default function Home() {
  
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Exact match to Figma */}
      <section className="relative bg-[#ffc09e] overflow-hidden pt-8 pb-0">
        {/* Decorative circles */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#f97d39] opacity-30 top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#f97d39] opacity-30 bottom-[-50px] left-[-50px]"></div>
        <div className="absolute w-[150px] h-[150px] rounded-full bg-[#f97d39] opacity-30 bottom-[100px] left-[200px]"></div>

        {/* Background image - positioned absolutely to the right edge of the viewport */}
        <div className="absolute right-0 bottom-0 w-[50%] h-full hidden md:block">
          <Image
            src="/images/hero-background.png"
            alt="Background"
            fill
            className="object-cover object-right-bottom"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Text content */}
            <div className="z-10 pb-8">
              <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-bold leading-[1.1] text-[#2f2f2f]">
                Together, We Shape <br />
                <span className="text-[#c83434]">Zambia's</span> Future
              </h1>
              <p className="text-[#2f2f2f] text-[14px] sm:text-[16px] leading-[1.6] mt-6 mb-8 max-w-[500px]">
                Your voice matters. This platform is your gateway to understanding, contributing to, and shaping
                Zambia's constitutional amendment process. Built for every citizen, it offers accessible information,
                inclusive participation tools, and secure ways to share your input.
              </p>
              <Link
                href="/submit"
                className="bg-[#f97d39] hover:bg-[#f5a173] text-white font-semibold py-3 px-6 rounded inline-block"
              >
                Submit Now
              </Link>
            </div>

            {/* Right column - Hero image */}
            <div className="relative md:h-[400px] flex items-end justify-end">
              {/* Mobile background image */}
              <div className="absolute right-0 bottom-0 w-full h-full md:hidden">
                <div className="w-full h-[200px] bg-gradient-to-r from-[#8B2818] via-[#0D1F1C] to-[#704214]"></div>
              </div>
              <div className="relative w-full h-[250px] md:h-[350px] z-10 flex items-end">
                <Image
                  src="/images/hero-image.png"
                  alt="Diverse group of Zambians"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section - Exact match to Figma */}
      <section className="relative z-10 py-8 bg-[#ffd7c2] overflow-x-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 min-w-[1000px] lg:min-w-0">
            {issueCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#fbddcc] rounded-lg pt-4 px-4 pb-8 border-2 border-black flex flex-col h-[280px]"
              >
                <div className="text-[#c83434] text-xl font-bold mb-1">{card.number}</div>
                <h3 className="font-bold text-black text-sm leading-tight mb-2">{card.title}</h3>
                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-[#f97d39] text-xs mb-2">{card.problem}</p>
                  <p className="text-black text-xs mb-6">{card.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Exact match to Figma */}
      <section className="relative z-10 py-16 bg-[#ffd7c2]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#c83434] text-[40px] sm:text-[64px] md:text-[80px] font-bold leading-none">
                0
              </div>
              <div className="uppercase text-gray-600 text-xs sm:text-sm mt-2 pt-2 border-t border-gray-300 inline-block px-4">
                SUBMISSIONS
              </div>
            </div>
            <div className="text-center">
              <div className="text-[#c83434] text-[40px] sm:text-[64px] md:text-[80px] font-bold leading-none">
                0
              </div>
              <div className="uppercase text-gray-600 text-xs sm:text-sm mt-2 pt-2 border-t border-gray-300 inline-block px-4">
                VISITS
              </div>
            </div>      
          </div>
        </div>
      </section>
    </div>
  )
}
