"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/context"

export default function Submit() {
  const router = useRouter()
  const { setUserInfo, setIsAnonymous } = useUser()
  const [isAnonymous, setIsAnonymousLocal] = useState(false)
  const [formData, setFormData] = useState({
    nrcNumber: "",
    phoneNumber: "",
    fullName: "",
    gender: "",
    ageRange: "",
    isDifferentlyAbled: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Set user info in context
    setUserInfo({
      gender: formData.gender,
      ageRange: formData.ageRange,
      isDifferentlyAbled: formData.isDifferentlyAbled,
      ...(isAnonymous
        ? {}
        : {
            nrcNumber: formData.nrcNumber,
            phoneNumber: formData.phoneNumber,
            fullName: formData.fullName,
          }),
    })
    setIsAnonymous(isAnonymous)

    // Navigate to questionnaire page
    router.push("/questionnaire")
  }

  return (
    <div className="bg-[#ffd7c2] min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-[#2f2f2f]">
          Registration
        </h1>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-[#f5b8a8] rounded-lg p-6 md:p-8 lg:p-12">
          {/* Anonymous Toggle */}
          <div className="flex justify-between items-center mb-8">
            <label htmlFor="anonymous" className="font-medium text-[#2f2f2f]">
              Submit Anonymously
            </label>
            <div
              className={`w-12 h-6 rounded-full p-1 cursor-pointer ${isAnonymous ? "bg-[#c83434]" : "bg-gray-300"}`}
              onClick={() => setIsAnonymousLocal(!isAnonymous)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnonymous ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {!isAnonymous ? (
              // Non-anonymous form fields
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NRC Number */}
                <div className="mb-6">
                  <label htmlFor="nrcNumber" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                    NRC Number
                  </label>
                  <input
                    type="text"
                    id="nrcNumber"
                    name="nrcNumber"
                    value={formData.nrcNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                    placeholder="Enter NRC Number"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                    placeholder="Enter Phone Number"
                  />
                </div>

                {/* Full Name */}
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                    placeholder="Enter Full Name"
                  />
                </div>

                {/* Gender */}
                <div className="mb-6">
                  <label htmlFor="gender" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none appearance-none"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#c83434]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Fields that appear in both anonymous and non-anonymous modes */}
            {isAnonymous ? (
              // Gender field for anonymous mode
              <div className="mb-6">
                <label htmlFor="gender" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                  Gender
                </label>
                <div className="relative">
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none appearance-none"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-[#c83434]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Age Range - appears in both modes */}
            <div className="mb-6">
              <label htmlFor="ageRange" className="block text-sm font-medium text-[#2f2f2f] mb-2">
                Age Range
              </label>
              <div className="relative">
                <select
                  id="ageRange"
                  name="ageRange"
                  value={formData.ageRange}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none appearance-none"
                >
                  <option value="" disabled>
                    Select Your Age Range
                  </option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65+">65+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-[#c83434]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Differently Abled Checkbox - appears in both modes */}
            <div className="mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDifferentlyAbled"
                  name="isDifferentlyAbled"
                  checked={formData.isDifferentlyAbled}
                  onChange={handleChange}
                  className="w-5 h-5 border-gray-300 rounded"
                />
                <label htmlFor="isDifferentlyAbled" className="ml-2 text-sm text-[#2f2f2f]">
                  Are you differently abled?
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#c83434] hover:bg-[#a52015] text-white font-medium py-3 px-8 rounded"
              >
                Start Questionnaire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
