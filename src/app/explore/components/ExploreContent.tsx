"use client";

import React, { useState } from "react";
import HeroSection from "./HeroSection";
import WhereWildness from "./WhereWildness";
import GoldenEvening from "./GoldenEvening";
import Destinations from "./Destinations";
import HeartOfYala from "./HeartOfYala";
import CTA from "./CTA";

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
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Brand Styled Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-12 md:w-24 bg-[#124734] opacity-30"></div>
                    <span className="text-sm md:text-xl font-serif font-semibold text-[#124734] uppercase tracking-widest">
                        FAQs
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-[#124734] opacity-30"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-[#124734] text-center mb-16">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`border-b border-gray-100 transition-all duration-300 ${isOpen ? "pb-6" : "pb-4"}`}
                            >
                                <button
                                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${isOpen ? "text-[#124734]" : "text-gray-800 group-hover:text-[#124734]"}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 text-3xl font-light transition-transform duration-300 ${isOpen ? "rotate-45 text-[#124734]" : "text-gray-400 group-hover:text-[#124734]"}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default function ExploreContent() {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <HeroSection />
                <WhereWildness />
                <GoldenEvening />
                <Destinations />
                <HeartOfYala />
                <CTA />
                <FAQSection />
            </div>
        </div>
    );
}
