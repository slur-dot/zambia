"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-[#ffd7c2] min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-[#2f2f2f]">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-[400px] bg-[#c83434] rounded-lg p-6 md:p-8 text-white relative overflow-hidden">
            {/* Logo and Title */}
            <div className="flex items-center mb-6">
              <Image
                src="/images/zambia-coat-of-arms.png"
                alt="Zambia Constitution Amendment Portal"
                width={50}
                height={50}
                className="invert"
              />
              <div className="ml-3">
                <div className="font-bold">Zambia Constitution</div>
                <div className="text-sm">Amendment Portal</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p className="mb-4">Say something to start a live chat!</p>

              <div className="mb-2">
                <p className="mb-1">Address: 12 Lubwa, Rhodespark, Lusaka, Zambia</p>
                <p className="mb-1">Email: info@ppdf.org.zm</p>
                <p>Phone: 0977 795416 or 0772 738156</p>
              </div>
            </div>

            {/* Supported By */}
            <div className="mb-8">
              <h3 className="font-bold mb-2">Supported by:</h3>
              <div className="bg-white p-2 rounded inline-block">
                <Image src="contactus.png" alt="PPD Logo" width={120} height={40} />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <a href="https://web.facebook.com/profile.php?id=100095280505019" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f5a173] flex items-center justify-center">
                <span className="font-bold text-[#c83434]">f</span>
              </a>
              <a href="https://x.com/Amendment_Bill" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f5a173] flex items-center justify-center">
                <span className="font-bold text-[#c83434]">t</span>
              </a>
              <a href="https://www.linkedin.com/in/the-zambia-constitutional-amendment-bill-9b511a364/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f5a173] flex items-center justify-center">
                <span className="font-bold text-[#c83434]">in</span>
              </a>
              <a href="https://www.instagram.com/constitutional_amendments_bill/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f5a173] flex items-center justify-center">
                <span className="font-bold text-[#c83434]">ig</span>
              </a>
            </div>

            {/* Decorative Circles */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[100px] rounded-full bg-[#f5a173] opacity-30"></div>
            <div className="absolute bottom-[50px] right-[50px] w-[80px] h-[80px] rounded-full bg-[#f5a173] opacity-30"></div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 pt-4">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#c83434] mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#c83434] mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#c83434] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none"
                  placeholder="Enter your Email"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-[#c83434] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none resize-none"
                  placeholder="Write a message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-2 px-6 rounded"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
