"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "BMW M3",
    image: "/images/bmw-m3 123.jpg",
    description: "High performance sports sedan built for adrenaline.",
    specs: ["Power: 473 hp", "0-60 mph: 4.1s", "Top Speed: 180 mph"],
  },
  {
    id: 2,
    name: "BMW X5",
    image: "/images/bmw-x5.jpg",
    description: "Luxury SUV engineered for comfort and strength.",
    specs: ["Power: 335 hp", "0-60 mph: 5.3s", "Top Speed: 155 mph"],
  },
  {
    id: 3,
    name: "BMW i8",
    image: "/images/bmw-i8 2.jpg",
    description: "Futuristic hybrid sports car — power meets innovation.",
    specs: ["Power: 369 hp", "0-60 mph: 4.2s", "Top Speed: 155 mph"],
  },
  {
    id: 4,
    name: "BMW 7 Series",
    image: "/images/bmw-7series 2.jpg",
    description: "The pinnacle of luxury and executive design.",
    specs: ["Power: 335-523 hp", "0-60 mph: 4.5s", "Top Speed: 155 mph"],
  },
];

export default function CarCollection() {
  const [selectedCar, setSelectedCar] = useState<null | typeof cars[0]>(null);

  return (
    <section className="relative w-full bg-black py-28">
      <div className="text-center mb-20">
        <h2 className="text-6xl sm:text-7xl font-extrabold uppercase bg-gradient-to-r from-blue-500 via-sky-300 to-blue-700 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
          BMW Car Collection
        </h2>
        <p className="text-gray-300 mt-6 text-lg sm:text-xl font-light">
          Experience perfection. Power. Precision. Legacy.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 px-8 relative z-10">
        {cars.map((car) => (
          <div
            key={car.id}
            className="group relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_50px_rgba(0,115,255,0.5)] transform hover:scale-[1.03] transition-all duration-700"
          >
            <div className="relative w-full h-[500px] sm:h-[550px] overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-lg">
                {car.name}
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl max-w-md mb-4">
                {car.description}
              </p>
              <button
                onClick={() => setSelectedCar(car)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/50 transition"
              >
                Explore Model
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-500 transition"
              >
                &times;
              </button>
              <div className="relative w-full h-[400px] sm:h-[500px]">
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {selectedCar.name}
                </h3>
                <p className="text-gray-300 mb-4">{selectedCar.description}</p>
                <ul className="text-gray-200 list-disc list-inside space-y-1">
                  {selectedCar.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
