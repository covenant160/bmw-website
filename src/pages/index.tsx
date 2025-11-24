import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CarCollection from "@/components/CarCollection";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VideoPromo from "@/components/VideoPromo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} scroll-smooth`}>
      {/* Navbar always visible at top */}
      <Navbar />

      {/* Hero / Slideshow */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Latest Car Collection */}
      <CarCollection />

      {/* BMW News Section */}
      <News />

      {/* Image Gallery */}
      <Gallery />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Video Promo Section */}
      <VideoPromo />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
