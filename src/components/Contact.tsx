"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbabvgn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-12 text-center">
        Contact Us
      </h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-10 md:p-16 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-xl shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
          <p>Your message has been sent successfully. We will get back to you soon.</p>
          <button
            className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      )}
    </section>
  );
}
