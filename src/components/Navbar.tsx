"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections = ["hero", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 80;
          if (window.scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 p-5 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-95 shadow-lg" : "bg-black bg-opacity-90"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-500 tracking-wide">
          BMW
        </div>

        <nav>
          <ul className="hidden md:flex gap-8 font-medium text-white">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`transition-all duration-300 ${
                    activeSection === sec ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu placeholder */}
        <div className="md:hidden text-white cursor-pointer">&#9776;</div>
      </div>
    </header>
  );
}
