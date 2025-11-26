"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  "/images/bmw-m3 123.jpg",
  "/images/bmw-x5.jpg",
  "/images/bmw-i8.jpg",
  "/images/bmw-7series.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-extrabold text-blue-600 mb-12 text-center drop-shadow-xl">
        BMW Gallery
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 6, rotateX: 3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer"
            onClick={() => openModal(img, i)}
          >
            <Image
              src={img}
              alt={`BMW ${i}`}
              fill
              className="object-cover rounded-xl"
              priority
            />

            {/* Light overlay for shine */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 hover:opacity-30 transition-all" />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -120) nextImage();
                if (offset.x > 120) prevImage();
              }}
            >
              <Image
                src={selectedImage}
                alt="Selected BMW"
                fill
                className="object-contain rounded-xl shadow-2xl"
              />

              {/* Previous */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                ‹
              </button>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                ›
              </button>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-4xl font-bold bg-black/40 rounded-full px-3 pb-2 hover:bg-black/70 transition"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
