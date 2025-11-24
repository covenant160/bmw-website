"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400 overflow-hidden pt-16 pb-12">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-700 animate-gradient-x"></div>

      {/* BMW Logo floating */}
      <div className="absolute -top-10 right-10 w-20 h-20 opacity-20 animate-bounce-slow pointer-events-none">
        <img
          src="/images/bmw-logo.jpg"
          alt="BMW Logo"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">BMW</h3>
          <p className="text-gray-400 mt-1">Designed with ❤️ by Covenant</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-60 text-gray-900"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-semibold">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-blue-500 transition text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-500 transition text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-500 transition text-lg">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-center mt-12 text-sm">
        © 2025 BMW Website. All rights reserved.
      </p>

      {/* Extra Tailwind Animations */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite alternate;
        }
      `}</style>
    </footer>
  );
}
