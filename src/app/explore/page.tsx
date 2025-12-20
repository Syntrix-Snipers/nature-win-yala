"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./components/HeroSection";
import WhereWildness from "./components/WhereWildness";
import GoldenEvening from "./components/GoldenEvening";
import Destinations from "./components/Destinations";
import HeartOfYala from "./components/HeartOfYala";
import CTA from "./components/CTA";



const faqs = [
  {
    question: "What is Nature Win Yala?",
    answer:
      "Nature Win Yala is a unique eco-friendly villa experience located near Yala National Park, offering luxury stays and curated wildlife adventures.",
  },
  {
    question: "How do I book a stay?",
    answer:
      "You can book your stay directly through our website's 'Book Now' page or contact us for personalized assistance.",
  },
  {
    question: "Are meals included?",
    answer:
      "Yes, we offer a variety of meal plans including local and international cuisine. Please check your booking details for included options.",
  },
  {
    question: "Is transportation provided?",
    answer:
      "We can arrange airport transfers and safari transport upon request. Please contact us in advance to schedule your transportation.",
  },
  {
    question: "What activities are available?",
    answer:
      "Guests can enjoy guided safaris, bird watching, nature walks, and cultural experiences. Check our Explore page for more details.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-[#124734] mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left text-[#124734] focus:outline-none focus:bg-gray-50 transition"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span className="ml-4 text-2xl">
                {openIndex === idx ? "-" : "+"}
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ease-in-out ${
                openIndex === idx ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Explore: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div>
        <HeroSection />
        <WhereWildness />
        <GoldenEvening />
        <Destinations />
        <HeartOfYala />
        <CTA />
        <FAQSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
