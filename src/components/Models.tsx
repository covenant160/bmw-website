"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cars = [
  { id: 1, name: "BMW M3", image: "/images/bmw-m3.jpg", description: "High performance sports sedan." },
  { id: 2, name: "BMW X5", image: "/images/bmw-x5.jpg", description: "Luxury SUV with advanced features." },
  { id: 3, name: "BMW i8", image: "/images/bmw-i8.jpg", description: "Futuristic electric sports car." },
  { id: 4, name: "BMW 7 Series", image: "/images/bmw-7series.jpg", description: "Full-size luxury sedan." },
];

export default function Model() {
  const [activeCar, setActiveCar] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track which car is visible for highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCar(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% of the card must be visible
    );

    cars.forEach((car) => {
      const el = document.getElementById(car.name.toLowerCase().replace(/\s+/g, "-"));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
        Explore Our Models
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cars.map((car) => {
          const carId = car.name.toLowerCase().replace(/\s+/g, "-");
          const isActive = activeCar === carId;
          return (
            <div
              key={car.id}
              id={carId}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl border-2 ${
                isActive ? "border-blue-600" : "border-transparent"
              }`}
            >
              <div className="relative w-full h-64">
                <Image src={car.image} alt={car.name} fill className="object-cover" priority />
              </div>
              <div className="p-4 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600">{car.description}</p>
                </div>
                <button
                  onClick={() => handleScroll(carId)}
                  className="mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Explore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
