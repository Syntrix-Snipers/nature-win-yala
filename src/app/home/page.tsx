"use client";

import React from "react";
import Image from "next/image";
import VillaDetailsHome from "../components/VillaDetailsHome";
import HomeOfferCard from "../components/HomeOfferCard";

const Home = () => {
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
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Home</h1>
        </div>
      </div>

      {/* Second Section */}

      <VillaDetailsHome />

      {/* Third Section */}
      <div className="flex-1 bg-[#ffffff] py-16 px-4">
        <div className="text-center mb-4 py-2">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-24 md:w-36 bg-[#124734]"></div>
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#124734]">
              Facilities
            </span>
            <div className="h-[1px] w-24 md:w-36 bg-[#124734]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#124734] mb-6">
            What We Offer for a <br /> Perfect Stay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 mb-8 place-items-center">
            <HomeOfferCard
              icon="CampIcon.png"
              title="Spacious Cabanas"
              description="Spacious, airy, and designed for groups who want comfort without losing the magic of the wild"
            />
            <HomeOfferCard
              icon="FireIcon.png"
              title="Starlit Campfire Evenings"
              description="Unwind by the fire, share stories, and feel the calm of Yala's night sky - pure warmth, pure wonder"
            />
            <HomeOfferCard
              icon="PlateIcon.png"
              title="Fresh Local Meals"
              description="Delicious breakfast, lunch, and dinner prepared with homely flavors to complete your stay"
            />
            <HomeOfferCard
              icon="ParkIcon.png"
              title="Safe & Easy Parking"
              description="Park with ease and step straight into your nature escape - no hassle, no stress"
            />
            <HomeOfferCard
              icon="ShowerIcon.png"
              title="Private Attached Bathrooms"
              description="Clean, comfortable, and built for modern convenience inside your rustic getaway"
            />
            <HomeOfferCard
              icon="ElephantIcon.png"
              title="Close-to-Nature Experience"
              description="Delicious breakfast, lunch, and dinner prepared with homely flavors to complete your stay"
            />
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex-1 bg-[#124734] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-24 md:w-48 bg-[#ffffff]"></div>
              <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#ffffff]">
                Packages
              </span>
              <div className="h-[1px] w-24 md:w-48 bg-[#ffffff]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#ffffff] mb-6">
              Choose Your Perfect Stay
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              Whether you’re seeking relaxation, adventure, or a mix of both —
              we’ve crafted experiences to suit your style.
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
                <h3 className="text-white text-2xl font-serif mb-1">
                  Two-Bedroom Villa
                </h3>
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
                <h3 className="text-[#124734] text-2xl font-serif mb-1">
                  Three-Bedroom Villa
                </h3>
                <p className="text-gray-500">LKR 12,500/night</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
