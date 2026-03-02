"use client";

import React, { useState } from "react";
import Image from "next/image";
import VillaOneDetails from "./VillaOneDetails";
import VillaTwoDetails from "./VillaTwoDetails";
import VillaThreeDetails from "./VillaThreeDetails";
import BookingForm from "./BookNow";
import { BtnComponent } from "../../components/BtnComponent";

export default function BookNowContent() {
  const [selectedVilla, setSelectedVilla] = useState<"villa1" | "villa2" | "villa3">(
    "villa1"
  );

  const [isExiting, setIsExiting] = useState(false);

  const handleVillaChange = () => {
    setIsExiting(true);

    setTimeout(() => {
      setSelectedVilla((prev) => {
        if (prev === "villa1") return "villa2";
        if (prev === "villa2") return "villa3";
        return "villa1";
      });

      setIsExiting(false);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/images/houseimg1.png"
          alt="Book Safari Villa in Yala National Park"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-[#124734]/70"></div>

        {/* Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Book Your Luxury Private Villa in Yala
          </h1>
          <p className="text-lg md:text-xl">
            Home &gt; <span className="text-[#F9C170]">Book Luxury Stay</span>
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex-1 bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 md:w-24 bg-gray-300"></div>
              <span className="uppercase tracking-widest text-[#124734] font-medium text-sm">
                Select Your Luxury Accommodation Package in Yala
              </span>
              <div className="h-[1px] w-12 md:w-24 bg-gray-300"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#124734] mb-6">
              Select Your Private Villa Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Reserve the best private villa near Yala National Park. A superior choice compared to crowded Yala hotels, offering complete privacy, a private kitchen, and exclusive safari tours. Perfect for families and couples seeking a luxury nature escape.
            </p>
          </div>

          {/* Cabana Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

            {/* Card 1: Galkaduwa Cabana */}
            <div
              onClick={() => setSelectedVilla("villa1")}
              className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border-2 ${selectedVilla === "villa1" ? "border-[#124734]" : "border-transparent"
                }`}
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src="/assets/images/houseimg1.png"
                  alt="Galkaduwa Cabana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#124734] text-center p-6">
                <h3 className="text-white text-xl font-serif mb-1">
                  Gal Kaduwa Cabana
                </h3>
                <p className="text-gray-300">USD 50/night</p>
              </div>
            </div>

            {/* Card 2: Rotawewa Cabana */}
            <div
              onClick={() => setSelectedVilla("villa2")}
              className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border-2 ${selectedVilla === "villa2" ? "border-[#124734]" : "border-transparent"
                }`}
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src="/assets/images/houseimg2.png"
                  alt="Rotawewa Cabana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#124734] text-center p-6">
                <h3 className="text-white text-xl font-serif mb-1">
                  Rotawewa Cabana
                </h3>
                <p className="text-gray-300">USD 50/night</p>
              </div>
            </div>

            {/* Card 3: Palugas Wewa Cabana */}
            <div
              onClick={() => setSelectedVilla("villa3")}
              className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border-2 ${selectedVilla === "villa3" ? "border-[#124734]" : "border-transparent"
                }`}
            >
              <div className="relative group rounded-xl overflow-hidden shadow-lg border-2 border-transparent">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/assets/images/thumb-15.jpeg"
                    alt="Palugas Wewa Cabana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#124734] text-center p-6 flex-grow">
                  <h3 className="text-white text-xl font-serif mb-1">
                    Palugas Wewa Cabana
                  </h3>
                  <p className="text-gray-300">USD 50/night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section: Animated Details with Arrows */}
      <div className="relative bg-[#124734] py-10 md:py-0">

        {/* Navigation Arrows - Repositioned for Mobile */}
        <div className="flex items-center justify-between px-6 md:px-10 mb-6 md:mb-0 md:absolute md:inset-y-0 md:w-full z-30 pointer-events-none">

          {/* Previous Arrow */}
          <button
            onClick={() => {
              setIsExiting(true);
              setTimeout(() => {
                setSelectedVilla((prev) => {
                  if (prev === "villa1") return "villa3";
                  if (prev === "villa2") return "villa1";
                  return "villa2";
                });
                setIsExiting(false);
              }, 300);
            }}
            className="pointer-events-auto bg-white/10 hover:bg-white text-white hover:text-[#124734] p-2 md:p-3 rounded-full transition-all duration-300 shadow-xl backdrop-blur-md border border-white/20 active:scale-90"
            aria-label="Previous Villa"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Villa Indicator (Visible on Mobile only to clear space) */}
          <span className="text-white/50 text-xs uppercase tracking-widest font-medium md:hidden">
            {selectedVilla === "villa1" ? "01 / 03" : selectedVilla === "villa2" ? "02 / 03" : "03 / 03"}
          </span>

          {/* Next Arrow */}
          <button
            onClick={() => {
              setIsExiting(true);
              setTimeout(() => {
                setSelectedVilla((prev) => {
                  if (prev === "villa1") return "villa2";
                  if (prev === "villa2") return "villa3";
                  return "villa1";
                });
                setIsExiting(false);
              }, 300);
            }}
            className="pointer-events-auto bg-white/10 hover:bg-white text-white hover:text-[#124734] p-2 md:p-3 rounded-full transition-all duration-300 shadow-xl backdrop-blur-md border border-white/20 active:scale-90"
            aria-label="Next Villa"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Animated Content Wrapper */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${isExiting
              ? "opacity-0 scale-[0.98] translate-y-4"
              : "opacity-100 scale-100 translate-y-0"
            }`}
        >
          {selectedVilla === "villa1" && <VillaOneDetails />}
          {selectedVilla === "villa2" && <VillaTwoDetails />}
          {selectedVilla === "villa3" && <VillaThreeDetails />}
        </div>
      </div>

      {/* Fourth Section: New Booking Form */}
      <BookingForm />

      {/* Need Help CTA Section */}
      <div className="bg-[#124734] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-2">
              Need Help With Your Booking?
            </h2>
            <p className="text-gray-300 text-lg">
              Have questions or want to book faster? Reach us anytime on WhatsApp
            </p>
          </div>

          {/* Action Button */}
          {/* If navigation is needed, wrap BtnComponent with Link */}
          <a
            href="/#contact"
            className="group flex items-center gap-3 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F9C170]"
            aria-label="Contact Us Now"
          >
            <BtnComponent
              variant="btn_1"
              className="flex items-center gap-3"
            >
              Contact Us Now
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </BtnComponent>
          </a>
        </div>
      </div>
    </div>
  );
}
