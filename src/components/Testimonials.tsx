"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "John Doe", feedback: `BMW drives are unmatched!` },
  { id: 2, name: "Sarah Smith", feedback: `Luxury and performance in one car.` },
  { id: 3, name: "Mike Johnson", feedback: `The i8 is futuristic and stunning.` },
  { id: 4, name: "Anna Lee", feedback: `Smooth ride, excellent handling.` },
  { id: 5, name: "David Brown", feedback: `BMW combines luxury and tech perfectly.` },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3); 
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-16 text-center">
        Customer Reviews
      </h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${(currentIndex * 100) / visibleCards}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ width: `${(testimonials.length * 100) / visibleCards}%` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="bg-white p-8 rounded-xl shadow-2xl h-full flex flex-col justify-between">
                <p className="text-gray-700 italic mb-6 text-lg">{`"${t.feedback}"`}</p>
                <h4 className="font-bold text-blue-600 text-lg">{t.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-blue-600 w-6" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
