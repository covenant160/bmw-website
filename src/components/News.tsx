"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/bmw-m3 123.jpg", caption: "BMW M3 Competition" },
  { src: "/images/bmw-x5.jpg", caption: "BMW X5" },
  { src: "/images/bmw-i8.jpg", caption: "BMW i8" },
  { src: "/images/bmw-7series.jpg", caption: "BMW 7 Series" },
  { src: "/images/bmw-x6.jpg", caption: "BMW X6" },
  { src: "/images/bmw-z4.jpg", caption: "BMW Z4" },
  { src: "/images/bmw-m4.jpg", caption: "BMW M4" },
  { src: "/images/bmw-m3 11.jpg", caption: "BMW X3" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].src);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].src);
    setCurrentIndex(prevIndex);
  };

  const jumpToImage = (index: number) => {
    setSelectedImage(galleryImages[index].src);
    setCurrentIndex(index);
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
            whileHover={{ scale: 1.08, rotateY: 6, rotateX: 3, boxShadow: "0 0 20px rgba(0,0,255,0.4)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openModal(img.src, i)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 hover:opacity-30 transition-all rounded-xl" />
            <div className="absolute bottom-2 left-2 text-white bg-blue-600/60 px-2 py-1 rounded-md text-sm font-semibold">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
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
                alt={galleryImages[currentIndex].caption}
                fill
                className="object-contain rounded-xl shadow-2xl"
              />

              {/* Caption */}
              <div className="absolute bottom-16 text-white bg-blue-600/70 px-4 py-2 rounded-md text-lg font-semibold">
                {galleryImages[currentIndex].caption}
              </div>

              {/* Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold p-3 bg-blue-600/40 rounded-full hover:bg-blue-600/70 transition"
              >
                ‹
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold p-3 bg-blue-600/40 rounded-full hover:bg-blue-600/70 transition"
              >
                ›
              </button>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-4xl font-bold bg-blue-600/40 rounded-full px-3 pb-2 hover:bg-blue-600/70 transition"
              >
                ×
              </button>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-6 overflow-x-auto px-2 py-2 max-w-5xl">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className={`relative w-24 h-16 rounded-md cursor-pointer border-2 ${
                    idx === currentIndex ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => jumpToImage(idx)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover rounded-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
