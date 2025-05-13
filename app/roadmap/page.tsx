export default function Roadmap() {
  return (
    <div className="bg-[#ffd7c2] min-h-screen pt-6 pb-6">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left">
          Roadmap for the <span className="text-[#c83434]">Constitution Amendment Bill</span>
        </h1>
        <p className="text-base md:text-lg mb-8 md:mb-12 text-center md:text-left">
          This visual roadmap outlines major milestones in Zambia's 2025 constitutional review process.
        </p>

        {/* Mobile Timeline (visible on small screens) */}
        <div className="md:hidden space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#4a6d8b] bg-white flex items-center justify-center mr-4">
                <span className="text-[#4a6d8b] font-bold text-lg">01</span>
              </div>
              <h3 className="text-[#4a6d8b] font-bold text-lg">26 March 2025</h3>
            </div>
            <p className="text-sm">
              Honorable Minister of Justice to update Parliament on Roadmap and content of proposed Constitution of
              Zambia (Amendment) Bill, 2025.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#56afaf] bg-white flex items-center justify-center mr-4">
                <span className="text-[#56afaf] font-bold text-lg">02</span>
              </div>
              <h3 className="text-[#56afaf] font-bold text-lg">22 April 2025</h3>
            </div>
            <p className="text-sm">
              Electoral Commission of Zambia to submit report to Ministry of Justice defining:
              <br />
              i. Constituencies to be delimited;
              <br />
              ii. By-elections, and
              <br />
              iii. Quota System
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#c49845] bg-white flex items-center justify-center mr-4">
                <span className="text-[#c49845] font-bold text-lg">03</span>
              </div>
              <h3 className="text-[#c49845] font-bold text-lg">25 April to 20 May 2025</h3>
            </div>
            <p className="text-sm">
              Ministry of Justice to commence drafting of constitution of Zambia (Amendment) Bill, 2025 (after obtaining
              Report from Electoral Commission of Zambia
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#c83434] bg-white flex items-center justify-center mr-4">
                <span className="text-[#c83434] font-bold text-lg">04</span>
              </div>
              <h3 className="text-[#c83434] font-bold text-lg">21 May to 21 June 2025</h3>
            </div>
            <p className="text-sm">
              Publication of Constitution of Zambia (Amendment ) Bill, 2025 in the Gazette for 30 days for public
              consultation in accordance with Article 79 of the Constitution, Cap. 1.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#49af45] bg-white flex items-center justify-center mr-4">
                <span className="text-[#49af45] font-bold text-lg">05</span>
              </div>
              <h3 className="text-[#49af45] font-bold text-lg">24 June 2025</h3>
            </div>
            <p className="text-sm">Introduction of Constitution of Zambia (Amendment) Bill, 2025 in Parliament.</p>
          </div>
        </div>

        {/* Desktop Timeline (hidden on small screens) */}
        <div className="hidden md:block relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
            {/* Step 1 Arrow - Blue */}

            <img src="blue1.png" alt="" className="w-[60px] h-[180px] mb-1" />


            {/* Step 2 Arrow - Teal */}
            <img src="blue2.png" alt="" className="w-[60px] h-[180px] mb-1" />

            {/* Step 3 Arrow - Yellow/Gold */}
            <img src="yellow.png" alt="" className="w-[60px] h-[180px] mb-1" />

            {/* Step 4 Arrow - Red */}
            <img src="red.png" alt="" className="w-[60px] h-[180px] mb-1" />

            {/* Step 5 Arrow - Green */}
            <img src="greeen1.png" alt="" className="w-[60px] h-[180px] mb-1" />
          </div>

          {/* Left and Right Vertical Lines with Circles */}
          <div className="absolute left-0 top-0 h-full border-l-2 border-dashed border-[#c83434] ml-8">
            <div className="absolute top-[90px] -left-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[270px] -left-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[450px] -left-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[630px] -left-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[810px] -left-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
          </div>

          <div className="absolute right-0 top-0 h-full border-r-2 border-dashed border-[#c83434] mr-8">
            <div className="absolute top-[90px] -right-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[270px] -right-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[450px] -right-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[630px] -right-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
            <div className="absolute top-[810px] -right-[14px] w-[28px] h-[28px] rounded-full border-2 border-[#c83434] bg-[#ffd7c2]"></div>
          </div>

          {/* Timeline Content */}
          <div className="grid grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="col-span-1 pr-16 text-right mb-0">
              <h3 className="text-[#4a6d8b] font-bold text-xl mb-1">26 March 2025</h3>
              <p className="text-sm">
                Honorable Minister of Justice to<br/> update Parliament on Roadmap <br/>and content of proposed <br/>Constitution of
                Zambia (Amendment)<br/>Bill, 2025.
              </p>
            </div>
            <div className="col-span-1 pl-16 mb-20 relative">
              <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full border-2 border-[#4a6d8b] bg-white flex items-center justify-center">
                <span className="text-[#4a6d8b] font-bold text-2xl">01</span>
              </div>
              <div className="absolute left-[60px] top-[30px] w-[120px] border-t-2 border-dotted border-[#4a6d8b]"></div>
            </div>

            {/* Step 2 */}
            <div className="col-span-1 pr-16 mb-0"></div>
            <div className="col-span-1 pl-16  mt-10 relative">
              <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full border-2 border-[#56afaf] bg-white flex items-center justify-center">
                <span className="text-[#56afaf] font-bold text-2xl">02</span>
              </div>
              <div className="absolute left-[60px] top-[30px] w-[120px] border-t-2 border-dotted border-[#56afaf]"></div>
              <h3 className="text-[#56afaf] font-bold text-xl mb-1">22 April 2025</h3>
              <p className="text-sm">
                Electoral Commission of<br/> Zambia to<br/> submit report to Ministry of Justice defining:
                <br />
                i. Constituencies to be delimited;
                <br />
                ii. By-elections, and
                <br />
                iii. Quota System
              </p>
            </div>

            {/* Step 3 */}
            <div className="col-span-1 pr-16 text-right mb-0">
              <h3 className="text-[#c49845] font-bold text-xl mb-1">25 April to 20 May 2025</h3>
              <p className="text-sm">
                Ministry of Justice to<br/> commence drafting of<br/> constitution of Zambia<br/> (Amendment) Bill, 2025 (after<br/>
                obtaining Report from Electoral<br/> Commission of Zambia
              </p>
            </div>
            <div className="col-span-1 pl-16 mb-20 relative">
              <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full border-2 border-[#c49845] bg-white flex items-center justify-center">
                <span className="text-[#c49845] font-bold text-2xl">03</span>
              </div>
              <div className="absolute left-[60px] top-[30px] w-[120px] border-t-2 border-dotted border-[#c49845]"></div>
            </div>

            {/* Step 4 */}
            <div className="col-span-1 pr-16 mb-0"></div>
            <div className="col-span-1 pl-16 mt-10 relative">
              <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full border-2 border-[#c83434] bg-white flex items-center justify-center">
                <span className="text-[#c83434] font-bold text-2xl">04</span>
              </div>
              <div className="absolute left-[60px] top-[30px] w-[120px] border-t-2 border-dotted border-[#c83434]"></div>
              <h3 className="text-[#c83434] font-bold text-xl mb-1">21 May to 21 June 2025</h3>
              <p className="text-sm">
                Publication of Constitution of<br/> Zambia (Amendment ) Bill<br/>, 2025 in the Gazette for 30 days<br/> for public
                consultation in<br/> accordance with Article 79 of<br/> the Constitution, Cap. 1.
              </p>
            </div>

            {/* Step 5 */}
            <div className="col-span-1 pr-16 text-right mb-20">
              <h3 className="text-[#49af45] font-bold text-xl mb-1">24 June 2025</h3>
              <p className="text-sm">Introduction of Constitution of<br/> Zambia (Amendment) Bill, 2025<br/> in Parliament.</p>
            </div>
            <div className="col-span-1 pl-16 mb-20 relative">
              <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full border-2 border-[#49af45] bg-white flex items-center justify-center">
                <span className="text-[#49af45] font-bold text-2xl">05</span>
              </div>
              <div className="absolute left-[60px] top-[30px] w-[120px] border-t-2 border-dotted border-[#49af45]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
