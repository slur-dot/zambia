"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-[#f5a173] py-4 relative z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/zambia-coat-of-arms.png"
            alt="Zambia Constitution Amendment Portal"
            width={40}
            height={40}
          />
          <div className="text-[#2f2f2f]">
            <div className="font-bold text-sm md:text-base">Zambia Constitution</div>
            <div className="text-xs md:text-sm">Amendment Portal</div>
          </div>
        </Link>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 mr-6">
            <Link href="/" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              Home
            </Link>
            <Link href="/roadmap" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              Roadmap
            </Link>
            <Link href="/key-issues" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              Key Issues
            </Link>
            <Link href="/media" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              Media
            </Link>
            <Link href="/faq" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              FAQs
            </Link>
            <Link href="/contact-us" className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium">
              Contact Us
            </Link>
          </nav>

          <Link
            href="/submit"
            className="hidden md:block bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-2 px-4 rounded text-sm"
          >
            Submit Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2f2f2f] p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f5a173] absolute top-full left-0 w-full shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/roadmap"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/key-issues"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Key Issues
            </Link>
            <Link
              href="/media"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Media
            </Link>
            <Link
              href="/faq"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact-us"
              className="text-[#2f2f2f] hover:text-[#c83434] text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/submit"
              className="bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-2 px-4 rounded text-sm inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
