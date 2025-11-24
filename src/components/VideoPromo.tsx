"use client";

import { motion } from "framer-motion";

export default function VideoPromo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative text-center bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-12"
      >
        BMW Promo Video
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl"
      >
        {/* Responsive Wrapper */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/iSaj1qnvSmQ"
            title="NEW BMW X7 Series (2025) - Interior and Exterior Walkaround"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
