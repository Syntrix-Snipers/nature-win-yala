"use client";

import Image from "next/image";
import backgroundImage from "../../../../public/assets/images/explore-images/Background.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Nature Win Yala"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

      

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4 leading-tight">
            Explore Nature Win Yala
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
            <span>Home</span>
            <ChevronRight
              size={16}
              className="opacity-70 sm:w-[18px] sm:h-[18px]"
            />
            <span className="text-[#F9C170]">Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
