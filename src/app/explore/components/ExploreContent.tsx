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
        question: "How close is your villa to Yala National Park?",
        answer: "Nature Win Yala is located just minutes away from the Yala National Park entrance (Katagamuwa and Palatupana gates). Our prime location allows you to be among the first to enter the park for early morning safaris, significantly increasing your chances of spotting leopards and bears.",
    },
    {
        question: "Do you provide private safari tours?",
        answer: "Yes, we arrange exclusive private safari jeep tours with experienced drivers/guides who know the park's best wildlife spots. We offer half-day (morning/evening) and full-day safari packages tailored to your preferences, ensuring a personalized and uncrowded experience.",
    },
    {
        question: "Is the villa suitable for families?",
        answer: "Absolutely. Nature Win Yala is one of the best family-friendly accommodations in Yala. Our secure, enclosed property features a spacious garden, a private kitchen for preparing kid-friendly meals, and a safe environment. Kids love our campfire evenings and spotting peacocks and monkeys in the garden.",
    },
    {
        question: "Do you serve authentic Sri Lankan food?",
        answer: "Yes, one of our highlights is our authentic homemade Sri Lankan cuisine. Our local chef prepares delicious breakfast, lunch, and dinner using fresh, organic ingredients. Guests rave about our traditional rice and curry, hoppers, and private BBQ dinners under the stars.",
    },
    {
        question: "Is the villa air-conditioned?",
        answer: "Our luxury villa is designed to be cool and airy, with high ceilings and fans to complement the natural breeze. For specific air-conditioning requirements, please check the room amenities or contact us directly during booking.",
    },
    {
        question: "Can I book the entire villa?",
        answer: "Yes! Unlike a hotel room, you can book the entire 2-bedroom or 3-bedroom luxury villa for complete privacy. This makes it perfect for couples seeking romance or groups of friends and families wanting their own private space in the wild.",
    },
    {
        question: "Is there internet access?",
        answer: "Yes, we provide free high-speed Wi-Fi throughout the property, allowing you to stay connected and share your safari photos instantly. It's also suitable for remote work if you wish to extend your stay in nature.",
    },
    {
        question: "What is the best time to visit Yala?",
        answer: "Yala offers great sightings year-round. The dry season (February to July) is often cited as the best time for spotting leopards as they gather at waterholes. However, the lush green season offers beautiful scenery and migratory birds. We are open all year to host you.",
    },
    {
        question: "Do you offer airport transfers?",
        answer: "We can arrange reliable private transportation to and from Colombo (BIA) or any other location in Sri Lanka upon request. Please let us know your travel plans when booking so we can coordinate your smooth arrival.",
    },
    {
        question: "Is the property pet-friendly?",
        answer: "Yes, Nature Win Yala is a pet-friendly villa. We understand that pets are family, and they are welcome to enjoy the spacious garden and nature with you. Please inform us in advance if you are bringing a pet.",
    },
    {
        question: "What other activities can we do nearby?",
        answer: "Beyond Yala safaris, you can visit the Sithulpawwa Rock Temple, enjoy bird watching at the nearby lakes (Debarawewa, Tissa Wewa), visit the Kataragama Temple, or take a relaxing walk through the rural village surroundings of our villa.",
    },
    {
        question: "How do I make a reservation?",
        answer: "Booking is easy! Simply visit our 'Book Now' page to check availability and reserve your stay online. Alternatively, you can contact us via WhatsApp for instant inquiries and customized package offers.",
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
                    Frequently Asked Questions About Yala Luxury Safaris
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
