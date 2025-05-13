import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#c83434] text-white">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/zambia-coat-of-arms.png"
                alt="Zambia Constitution Amendment Portal"
                width={40}
                height={40}
                className="invert"
              />
              <div>
                <div className="font-bold">Zambia Constitution</div>
                <div className="text-sm">Amendment Portal</div>
              </div>
            </div>
            <p className="text-sm mb-4">12 Lubwa, Rhodespark, Lusaka</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Supported by:</h3>
              <div className="bg-white p-2 rounded inline-block">
                <Image src="contactus.png" alt="PPD Logo" width={120} height={40} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                  <Image src="/images/email-icon.png" alt="Email" width={20} height={20} className="invert" />
                </div>
                <a href="mailto:info@ppdf.org.zm" className="hover:underline">
                info@ppdf.org.zm
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                  <Image src="/images/phone-icon.png" alt="Phone" width={20} height={20} className="invert" />
                </div>
                <a href="tel:+260977795416" className="hover:underline">
                  0977 795416 / 0772 738156
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100095280505019"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#c83434] p-2 rounded-full hover:bg-gray-200 w-8 h-8 flex items-center justify-center"
              >
                <span className="font-bold">f</span>
              </a>
              <a
                href="https://x.com/Amendment_Bill"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#c83434] p-2 rounded-full hover:bg-gray-200 w-8 h-8 flex items-center justify-center"
              >
                <span className="font-bold">t</span>
              </a>
              <a
                href="https://www.linkedin.com/in/the-zambia-constitutional-amendment-bill-9b511a364/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#c83434] p-2 rounded-full hover:bg-gray-200 w-8 h-8 flex items-center justify-center"
              >
                <span className="font-bold">in</span>
              </a>
              <a
                href="https://www.instagram.com/constitutional_amendments_bill/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#c83434] p-2 rounded-full hover:bg-gray-200 w-8 h-8 flex items-center justify-center"
              >
                <span className="font-bold">ig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} Zambia Constitution Amendment Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
