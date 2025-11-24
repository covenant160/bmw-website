"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
    >
      {/* Rotating BMW Logo Background with Glow */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 opacity-30 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-blue-600/30 shadow-[0_0_80px_rgba(59,130,246,0.5)] animate-pulse">
          <Image
            src="/images/bmw-logo.jpg"
            alt="BMW Logo"
            fill
            className="object-contain rounded-full"
          />
        </div>
      </motion.div>

      {/* Left Side - Image */}
      <motion.div
        className="relative w-full md:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/bmw-showroom.jpg"
          alt="BMW Showroom"
          fill
          className="object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-6 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          About BMW
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          BMW, short for Bayerische Motoren Werke, is a world-renowned German
          automobile manufacturer known for producing luxury vehicles, sports
          cars, and electric innovations. Founded in 1916, BMW has a long
          tradition of precision engineering, iconic design, and driving
          pleasure.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Our mission is to combine performance, luxury, and sustainability,
          delivering cars that not only look amazing but also provide an
          exceptional driving experience. From the legendary BMW M series to
          the cutting-edge electric i series, every BMW is a masterpiece of
          technology and style.
        </p>
      </motion.div>
    </section>
  );
}
