"use client";

import React from "react";
import Image from "next/image";
import VillaDetailsHome from "../components/VillaDetailsHome";
import HomeOfferCard from "../components/HomeOfferCard";
import { ChevronRightIcon } from "lucide-react";
import HomeTopImageCollage from "../components/HomeTopImageCollage";
import VillaHomeCard from "../components/villaHomeCard";
import Link from "next/link";
import HomeTestimonialSection from "../components/HomeTestimonialSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[110vh] flex items-center bg-[#000000] justify-center">
        {/* Background Image */}
        <Image
          src="/assets/images/houseimg2.png"
          alt="Nature Win Yala"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-[#124734]/70"></div>

        {/* Text */}
        <div className="relative text-center text-white px-4 flex flex-col md:flex-row md:items-center md:justify-between h-full min-h-[500px]">
          <div className="md:w-1/2 flex flex-col justify-center h-full text-center md:text-left items-center md:items-start">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Escape to the Heart of Yala’s Serenity
            </h1>
            <p className="mb-4">
              Unwind in spacious cabanas, enjoy campfire nights, and wake to the
              sounds of nature like never before
            </p>
            <button className="flex items-center justify-center md:justify-start gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold w-fit hover:bg-gray-100 transition-colors">
              Book Now <ChevronRightIcon size={18} />
            </button>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-center h-full">
            <div className="w-full h-full flex items-center justify-center px-12 md:px-12 py-8 md:py-12">
              <HomeTopImageCollage />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <VillaDetailsHome
        bgColor="#124734"
        images={[
          "/assets/images/thumb-1.png",
          "/assets/images/thumb-2.png",
          "/assets/images/thumb-3.png",
          "/assets/images/thumb-4.png",
          "/assets/images/thumb-5.png",
        ]}
        heading="A Tranquil Escape in the Heart of Yala"
        paragraph="Nature Win Yala is where comfort meets the wild. Our cozy cabanas sit beside the untouched beauty of Yala, surrounded by birdsong, starry skies, and the warmth of campfire nights. It’s a peaceful escape for friends, families, and nature lovers - a place to unwind, explore, and create memories that stay with you long after your journey ends."
        buttonText="Discover More"
        button={
          <button className="flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold w-fit hover:bg-gray-100 transition-colors">
            Discover More <ChevronRightIcon size={18} />
          </button>
        }
        aboutText="About Us"
      />

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
            <VillaHomeCard
              image="/assets/images/houseimg1.png"
              alt="Two-Bedroom Villa"
              title="Two-Bedroom Villa"
              price="Rs. 12,500.00/night"
              features={[
                {
                  icon: "/assets/icons/SmallHomeIcon.png",
                  text: "Entire villa",
                },
                {
                  icon: "/assets/icons/SmallProfileIcon.png",
                  text: "6 Persons",
                },
                { icon: "/assets/icons/SmallBoxIcon.png", text: "1000 m²" },
                {
                  icon: "/assets/icons/SmallKitchenIcon.png",
                  text: "Private kitchen",
                },
                {
                  icon: "/assets/icons/SmallWashroomIcon.png",
                  text: "Private bathroom",
                },
              ]}
              actionButton={
                <Link
                  href="/book-now"
                  className="bg-[#124734] text-white px-5 py-2 rounded-lg shadow-md
                    border border-transparent font-bold
                    hover:bg-white hover:text-[#124734] hover:border-[#124734]
                    transition-all duration-300"
                >
                  Book Now
                </Link>
              }
            />
            <VillaHomeCard
              image="/assets/images/houseimg2.png"
              alt="Three-Bedroom Villa"
              title="Three-Bedroom Villa"
              price="Rs. 15,500.00/night"
              features={[
                {
                  icon: "/assets/icons/SmallHomeIcon.png",
                  text: "Entire villa",
                },
                {
                  icon: "/assets/icons/SmallProfileIcon.png",
                  text: "6 Persons",
                },
                { icon: "/assets/icons/SmallBoxIcon.png", text: "1000 m²" },
                {
                  icon: "/assets/icons/SmallKitchenIcon.png",
                  text: "Private kitchen",
                },
                {
                  icon: "/assets/icons/SmallWashroomIcon.png",
                  text: "Private bathroom",
                },
              ]}
              actionButton={
                <Link
                  href="/book-now"
                  className="bg-[#124734] text-white px-5 py-2 rounded-lg shadow-md
                    border border-transparent font-bold
                    hover:bg-white hover:text-[#124734] hover:border-[#124734]
                    transition-all duration-300"
                >
                  Book Now
                </Link>
              }
              comingSoon={true}
            />
          </div>
        </div>
      </div>

      {/* Fisth Section */}
      <VillaDetailsHome
        bgColor="#fff"
        images={[
          "/assets/images/dining1.png",
          "/assets/images/dining2.png",
          "/assets/images/dining3.png",
          "/assets/images/dining4.png",
        ]}
        heading="A Tranquil Escape in the Heart of Yala"
        paragraph="Nature Win Yala is where comfort meets the wild. 
        Our cozy cabanas sit beside the untouched beauty of Yala, surrounded by birdsong, starry skies, and the warmth of campfire nights. 
        It’s a peaceful escape for friends, families, and nature lovers - a place to unwind, 
        explore, and create memories that stay with you long after your journey ends."
        headingColor="#124734"
        paragraphColor="#124734"
        buttonText="Download Menu"
        button={
          <button className="flex items-center justify-center gap-2 bg-[#124734] text-white px-8 py-3 rounded-md font-semibold w-fit">
            Download Menu <ChevronRightIcon size={18} />
          </button>
        }
        aboutText="Dine With Us"
        aboutTextColor="#124734"
        reverse={true}
      />

      {/* Sixth Section */}
      <div className="flex-1 bg-[#124734] py-16 px-4">
        <div className="text-center mb-4 py-2">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-24 md:w-64 bg-[#ffffff]"></div>
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#ffffff]">
              Testimonial
            </span>
            <div className="h-[1px] w-24 md:w-64 bg-[#ffffff]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#ffffff] mb-6">
            What Our Clients Say About Us
          </h2>
          <HomeTestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
