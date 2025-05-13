

export default function KeyIssues() {
  return (
    <div className="bg-[#ffd7c2] min-h-screen p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Key Constitutional Issues</h1>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          Explore the 31 key issues and why they are being reviewed in the Constitution Amendment Bill.
        </p>

        {/* Issue 1 */}
        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl lg:ml-36 font-bold text-gray-800 mb-6 uppercase">
            REVISE THE NUMBER OF CONSTITUENCIES AND WARDS
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-5xl font-bold text-black">
                1
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Zambia's population has grown, but constituency boundaries have not changed to reflect these changes.
                  Some constituencies are now too big and the current distribution of resources does not meet their needs.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas. A constituency split in two
                  will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560] font-semibold mb-2 ">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Delimitation ensures an equitable distribution of resources relative to population.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced, leading to unfair CDF allocation and underrepresentation of growing populations.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Issue 2 */}
        <div className="mb-12 bg-[#ffd7c2] p-4 md:p-6 rounded-md">
          {/* Title */}
          <h2 className="text-center md:text-left text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase">
            REVISE THE PROVISIONS RELATED TO FILING OF<br /> NOMINATIONS ON RESIGNATION OF ELECTORAL <br /> CANDIDATE
          </h2>

          {/* Content layout with reversed flex */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6">
            {/* Circle with number */}
            <div className="flex justify-center md:justify-end md:mt-2">
              <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                2
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Current rules invalidate fresh nominations in the event of a candidate's resignation. This has led to
                  perpetual delays in elections, thus violating Article 54 of the Constitution.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Updating the nomination rules will ensure elections are not delayed. Citizens retain the right to vote
                  without unnecessary postponements.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560] font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Allowing elections to proceed despite candidate resignation supports the democratic process and prevents
                  prolonged vacancies.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Continued election delays will undermine democracy and leave constituents unrepresented for long periods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 3 */}
        <div className="mb-12 bg-[#ffd7c2] p-4 md:p-6 rounded-md">
          {/* Title */}
          <h2 className="text-center md:text-left lg:ml-40 text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase">
            INTRODUCE AN ELECTORAL SYSTEM TO ENHANCE <br /> REPRESENTATION OF WOMEN, YOUTHS AND PERSONS <br /> WITH DISABILITIES IN PARLIAMENT
          </h2>

          {/* Content layout */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                3
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The current system does not guarantee the representation of Women, Youths and Persons with Disabilities in the National Assembly.
                  <br /><br />
                  Article 45 and Article 259 which provide for gender equity do not detail mechanisms for ensuring equal representation.
                  Currently, there are only 21 female MPs, 1 youth and no members with disabilities.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Ensuring guaranteed representation means more inclusive policies and equitable governance that addresses the needs of marginalized groups.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Seats for Women, Youths and Persons with Disabilities in the National Assembly will be guaranteed and not left to the nominating authority.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced, leading to unfair representation and policies that overlook significant segments of the population.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-12 bg-[#ffd7c2] p-4 md:p-6 rounded-md">
          {/* Title */}
          <h2 className="text-center md:text-left text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase">
            PROVIDE FOR THE INCLUSION OF MEMBERS OF<br /> PARLIAMENT IN LOCAL COUNCILS
          </h2>

          {/* Content layout */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  In the current electoral system, Members of Parliament do not have a say in local Councils which are directly responsible for service delivery to the people.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  MPs will be able to actively take part in the developmental activities undertaken by the Council in line with Article 5 which places sovereign authority in the people of Zambia and is exercised through elected representatives.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leading to unfair CDF allocation and underrepresentation of growing populations.
                </p>
              </div>
            </div>

            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                4
              </div>
            </div>
          </div>
        </div>


        {/* Issue 5 */}
        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl lg:ml-36 font-bold text-gray-800 mb-6 uppercase">
            PROVIDE FOR THE HEARING AND DETERMINATION OF<br /> AN ELECTION PETITION
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className=" w-40  h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-5xl font-bold text-black">
                5
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The Constitution specifies the period for the hearing of an election petition but does not specify that petitions shall not only be heard but also determined within the specified timeframe.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560] font-semibold mb-2 ">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Petitions will be heard and concluded within the specified timeframe.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="mb-12 bg-[#ffd7c2] p-4 md:p-6 rounded-md">
          {/* Title */}
          <h2 className="text-center md:text-left text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase">
            REVISE THE PROVISIONS RELATING TO BY-ELECTIONS
          </h2>

          {/* Content layout with reversed flex */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6">
            {/* Circle with number */}
            <div className="flex justify-center md:justify-end md:mt-2">
              <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                6
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Holding By-Elections has proven to be a huge financial burden on the Treasury, derailing essential development projects.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Regulating expenditure on By-Elections helps preserve funding for vital projects pertaining to Education, Healthcare and Energy.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* 7 */}


        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl lg:ml-36 font-bold text-gray-800 mb-6 uppercase">
            REVISE THE NUMBER OF NOMINATED MEMBERS OF PARLIAMENT
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className=" w-40  h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-5xl font-bold text-black">
                7
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The number of nominated Members of Parliament in the Constitution needs to align with the ECZ Report on Delimitation.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560] font-semibold mb-2 ">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The Constitution will provide for the number of MPs to correspond with the proposed delimited Constituencies.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="mb-12 bg-[#ffd7c2] p-4 md:p-6 rounded-md">
          {/* Title */}
          <h2 className="text-center md:text-left text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase">
            HARMONISE THE TERM OF OFFICE FOR MEMBERS OF<br /> PARLIAMENT
          </h2>

          {/* Content layout with reversed flex */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6">
            {/* Circle with number */}
            <div className="flex justify-center md:justify-end md:mt-2">
              <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                8
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The dissolution of Parliament 90 days before the General Elections conflicts with the five (5) year term prescribed under Article 81(1).
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The proposed amendment will actualise the term of office for Members of Parliament to a period of five (5) years.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* 9 */}

        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl lg:ml-36 font-bold text-gray-800 mb-6 uppercase">
            PROVIDE FOR THE VACANCY OF THE OFFICE OF<br /> MINISTER 90 DAYS BEFORE ELECTION
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Circle with number */}
            <div className="flex-shrink-0">
              <div className=" w-40  h-40 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-5xl font-bold text-black">
                9
              </div>
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Ministers have an unfair advantage over electoral opponents as they continue to wield State power and have access to Government resources throughout the campaign.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560] font-semibold mb-2 ">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Requiring Ministers to vacate their offices 90 days before elections ensures a level playing field and prevents the use of public resources for political purposes.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>
          </div>




        </div>

        {/* 10 */}

        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl  font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
            REMOVE THE TERM LIMIT FOR THE OFFICE OF MAYOR
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Text Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Currently, Article 154(2)(b) prescribes that a Mayor shall hold office for only two (2) terms. This does not apply to Councillors or Members of Parliament.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The proposed amendment will remove the two-term limit for Mayors to ensure consistency in the tenure of Mayors, MPs, and Councillors.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leading to unfair CDF allocation and underrepresentation of growing populations.
                </p>
              </div>
            </div>

            {/* Circle Number */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                10
              </div>
            </div>
          </div>
        </div>


        {/* 11 */}
        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl ml-36 font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
            REVISE THE QUALIFICATIONS FOR THE OFFICE OF<br /> SECRETARY TO THE CABINET
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                11
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The current requirement of 10 years of service in the Civil Service to be appointed Secretary to the Cabinet is restrictive. Currently, only 2 or 3 people in the entire Civil Service qualify, limiting persons who can hold this position.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The proposed amendment will expand eligibility and attract potential candidates for the position.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leading to unfair CDF allocation and underrepresentation of growing populations.
                </p>
              </div>
            </div>


          </div>
        </div>


        {/* 12 */}
        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl  font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
            REVISE THE PROVISIONS RELATING TO A VACANCY IN THE OFFICE OF THE ATTORNEY-GENERAL AND SOLICITOR-GENERAL
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Text Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The vacating of office by the Attorney-General and the Solicitor-General after the inauguration of a new President creates a vacuum, hindering Government operations relating to legal Opinions, review of legal Agreements, Contracts and MoUs.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The proposed amendment will avoid a vacuum, providing continuity in Government operations whenever a new President assumes office.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leafing to unfair CDF allocation and underrepresentation of growing populations
                </p>
              </div>
            </div>

            {/* Circle Number */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                12
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-[#ffd7c2] p-6 rounded-md">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
            REVISE THE DEFINITIONS OF “CHILD” AND “ADULT”
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">What is the Problem?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Article 266 (definitions) as it stands defines a child as a person under the age of 18 years. This needs clarity across laws.
                </p>

                <h3 className="text-[#b58900] font-semibold mb-2">How Does this Benefit me?</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Increasing the number of constituencies means more CDF funding for rural areas; a constituency split in two will receive twice the funding.
                </p>
              </div>

              <div>
                <h3 className="text-[#1FA560]  font-semibold mb-2">And What is the Solution?</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  The proposed amendment will ensure harmonized interpretation and enforcement across various pieces of legislation.
                </p>

                <h3 className="text-gray-800 font-semibold mb-2">If Unresolved</h3>
                <p className="text-sm md:text-base text-gray-800">
                  Constituencies will remain imbalanced leading to unfair CDF allocation and underrepresentation of growing populations.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#B6825E] rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-black">
                13
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
