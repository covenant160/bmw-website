"use client";

import { useState } from "react";

const faqs = [
  { question: "How can I book a test drive?", answer: "You can book through our Contact form or visit the nearest BMW showroom." },
  { question: "Do you offer electric cars?", answer: "Yes, we have the BMW i series fully electric cars." },
  { question: "Where can I find service centers?", answer: "BMW service centers are available in major cities worldwide." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative max-w-4xl mx-auto px-6 py-28">
      {/* BMW Logo Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none">
        <img
          src="/images/bmw-logo.jpg"
          alt="BMW Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-16 text-center relative z-10">
        FAQs
      </h2>

      <div className="flex flex-col gap-6 relative z-10">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <div className="p-6 flex justify-between items-center">
              <h4 className="font-bold text-lg sm:text-xl">{f.question}</h4>
              <span
                className={`text-2xl font-bold transition-transform duration-300 ${
                  openIndex === i ? "rotate-45 text-blue-600" : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`px-6 pb-6 text-gray-700 transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p>{f.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
