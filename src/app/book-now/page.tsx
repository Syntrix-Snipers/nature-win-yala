"use client";

import React from "react";
import Image from "next/image";
import VillaDetails from "../components/VillaOneDetails";
import BookingForm from "../components/BookNow";

const BookNow = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/images/houseimg1.png"
          alt="Nature Win Yala"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-[#124734]/70"></div>

        {/* Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Find the Perfect Stay
          </h1>
          <p className="text-lg md:text-xl">
            Home &gt; <span className="text-[#F9C170]">Book Now</span>
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
                Choose Your Cabana
              </span>
              <div className="h-[1px] w-12 md:w-24 bg-gray-300"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#124734] mb-6">
              Pick Your Cabana & Begin Your Journey
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose your preferred cabana and follow the steps to check details and secure your booking
            </p>
          </div>

          {/* Cabana Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Two-Bedroom Villa Card */}
            <div className="group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/assets/images/houseimg1.png"
                  alt="Two-Bedroom Villa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#124734] text-center p-6">
                <h3 className="text-white text-2xl font-serif mb-1">Two-Bedroom Villa</h3>
                <p className="text-gray-300">LKR 12,500/night</p>
              </div>
            </div>

            {/* Three-Bedroom Villa Card (Coming Soon) */}
            <div className="group rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <div className="relative h-[300px] w-full bg-gray-100">
                <Image
                  src="/assets/images/houseimg2.png"
                  alt="Three-Bedroom Villa"
                  fill
                  className="object-cover opacity-60 grayscale-[50%]"
                />
                {/* Coming Soon Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-8 py-3 rounded-full text-[#124734] font-bold shadow-xl border border-gray-100">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="bg-white text-center p-6 border-t border-gray-100">
                <h3 className="text-[#124734] text-2xl font-serif mb-1">Three-Bedroom Villa</h3>
                <p className="text-gray-500">LKR 12,500/night</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Third Section */}
      <VillaDetails />

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
              Have questions or want to book faster? Reach us anytime
            </p>
          </div>

          {/* Action Button */}
          <a
            href="/about-us"
            className="bg-white text-[#124734] px-8 py-4 rounded-md font-semibold flex items-center gap-3 transition-all hover:bg-gray-100 group whitespace-nowrap"
          >
            Contact Us Now
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
};

export default BookNow;
