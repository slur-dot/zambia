"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export default function FAQ() {
  const faqItems: FaqItem[] = [
    {
      question: "What is the purpose of the constitutional amendment process?",
      answer:
        "The constitutional amendment process aims to update and improve Zambia's constitution to better reflect current national values, address governance challenges, and strengthen democratic institutions. It seeks to create a more inclusive, effective, and responsive constitutional framework.",
    },
    {
      question: "How can citizens participate in the amendment process?",
      answer:
        "Citizens can participate by attending public consultation forums, submitting written proposals, engaging with the online platform, joining community discussions, and participating in the referendum if one is held. Registration on this website also allows you to receive updates and invitations to participation opportunities.",
    },
    {
      question: "Will there be a referendum on the proposed amendments?",
      answer:
        "Whether a referendum will be held depends on the nature of the proposed amendments. According to the current constitution, amendments to the Bill of Rights and certain other fundamental provisions require approval through a national referendum. Other amendments may be enacted through the parliamentary process.",
    },
    {
      question: "How long will the entire amendment process take?",
      answer:
        "The current timeline projects the process to take approximately two years, from initial consultations to implementation. However, this timeline may be adjusted based on the complexity of issues raised and the level of consensus achieved at various stages.",
    },
    {
      question: "How are decisions made about which amendments to include?",
      answer:
        "Decisions are based on several factors: the frequency and consistency of public input on specific issues, technical analysis by constitutional experts, alignment with international best practices, and the level of national consensus. The process aims to be inclusive and evidence-based.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-[#fbe5e1] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-3 md:mb-4">
              <button
                className="w-full text-left flex justify-between items-center bg-[#e63946] text-white p-3 md:p-4 rounded-md mb-2 cursor-pointer"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-sm md:text-base pr-2">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0" />
                ) : (
                  <ChevronDown className="flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-white p-3 md:p-4 rounded-b-md shadow-md mt-1 text-sm md:text-base">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
