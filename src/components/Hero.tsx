"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/bmw-m3 11.jpg",
    caption: "BMW M3 — Ultimate Driving Machine",
  },
  {
    id: 2,
    image: "/images/bmw-7series.jpg",
    caption: "BMW 7 Series — Luxury Redefined",
  },
  {
    id: 3,
    image: "/images/bmw-i8.jpg",
    caption: "BMW i8 — Electric Power & Iconic Design",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Rotating BMW Logo - Responsive & Behind Navbar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-24 md:top-20 right-4 md:right-10 w-20 md:w-24 h-20 md:h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center cursor-pointer overflow-hidden z-0"
        whileHover={{ scale: 1.1 }}
      >
        {/* Logo Image */}
        <div className="relative w-16 h-16 md:w-16 md:h-16 rounded-full overflow-hidden bg-white">
          <Image
            src="/images/bmw-logo.jpg"
            alt="BMW Logo"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Glossy Reflection Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none opacity-0 hover:opacity-70 transition-opacity duration-500" />
      </motion.div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].caption}
            fill
            priority
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />

          {/* Caption - positioned away from logo */}
          <motion.div
            key={slides[currentSlide].caption}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-24 left-1/3 sm:left-1/4 max-w-xl"
          >
            <h1 className="text-white text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
              {slides[currentSlide].caption}
            </h1>
            <p className="text-gray-300 mt-4 text-lg sm:text-xl font-light">
              Feel the precision. Live the power.
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-white w-16" : "bg-gray-500 w-12"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
