"use client";

import Image from "next/image";
import backgroundImage from "../../../../public/assets/images/explore-images/Background.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]  flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Nature Win Yala"
          fill
          priority
          className="object-cover mt-9.5  "
        />

        {/* Text */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Explore Nature Win Yala
          </h1>
          <div className="text-lg md:text-xl">
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl">
              <span>Home</span>
              <ChevronRight size={18} className="opacity-70" />
              <span className="text-[#F9C170]">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
