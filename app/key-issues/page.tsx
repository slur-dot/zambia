export default function KeyIssues() {
  return (
    <div className="bg-[#fbe5e1] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
          Key Constitutional Issues
        </h1>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-10 mb-12">
          <div className="max-w-3xl mx-auto">
            {/* Issue 1 */}
            <div className="numbered-item">
              <div className="numbered-item-circle">1</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e63946]">Electoral System Reform</h3>
              <p className="mb-4 text-sm md:text-base">
                Consideration of changes to the electoral system to ensure fair representation and democratic processes.
              </p>
              <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                <h4 className="font-bold mb-2 text-sm md:text-base">Key Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Proportional representation vs. first-past-the-post</li>
                  <li>Presidential election threshold requirements</li>
                  <li>Electoral commission independence and funding</li>
                </ul>
              </div>
            </div>

            {/* Issue 2 */}
            <div className="numbered-item">
              <div className="numbered-item-circle">2</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e63946]">
                Decentralization and Local Governance
              </h3>
              <p className="mb-4 text-sm md:text-base">
                Strengthening local governance structures and clarifying the relationship between central and local
                governments.
              </p>
              <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                <h4 className="font-bold mb-2 text-sm md:text-base">Key Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Provincial and district autonomy</li>
                  <li>Resource allocation and revenue sharing</li>
                  <li>Traditional leadership integration</li>
                </ul>
              </div>
            </div>

            {/* Issue 3 */}
            <div className="numbered-item">
              <div className="numbered-item-circle">3</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e63946]">Bill of Rights Enhancement</h3>
              <p className="mb-4 text-sm md:text-base">
                Expanding and strengthening constitutional protections for fundamental human rights and freedoms.
              </p>
              <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                <h4 className="font-bold mb-2 text-sm md:text-base">Key Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Economic, social, and cultural rights</li>
                  <li>Environmental rights</li>
                  <li>Rights enforcement mechanisms</li>
                </ul>
              </div>
            </div>

            {/* Issue 4 */}
            <div className="numbered-item">
              <div className="numbered-item-circle">4</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e63946]">Judicial Independence</h3>
              <p className="mb-4 text-sm md:text-base">
                Strengthening the independence and effectiveness of the judiciary as a check on executive and
                legislative power.
              </p>
              <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                <h4 className="font-bold mb-2 text-sm md:text-base">Key Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Judicial appointment processes</li>
                  <li>Financial autonomy</li>
                  <li>Tenure and removal procedures</li>
                </ul>
              </div>
            </div>

            {/* Issue 5 */}
            <div className="numbered-item border-l-0">
              <div className="numbered-item-circle">5</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e63946]">Public Finance Management</h3>
              <p className="mb-4 text-sm md:text-base">
                Enhancing constitutional provisions for transparent and accountable management of public resources.
              </p>
              <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                <h4 className="font-bold mb-2 text-sm md:text-base">Key Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Budget approval processes</li>
                  <li>Debt ceiling mechanisms</li>
                  <li>Oversight institutions and their powers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
