"use client";

import React from "react";
import Image from "next/image";

import { homeImages } from "../../../../public/assets/images/images";

const images = [
  homeImages.galeryImage1,
  homeImages.galeryImage2,
  homeImages.galeryImage3,
  homeImages.galeryImage4,
  homeImages.galeryImage5,
  homeImages.galeryImage6,
];

const HomeGallerySection: React.FC = () => {
  return (
    <section className="w-full pt-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Left Subcolumn: 2 rows */}
            <div className="flex flex-col gap-6">
              <div className="group relative w-full h-48 md:h-56 lg:h-64 rounded-xl group-hover:z-10">
                <Image
                  src={images[0]}
                  alt="Luxury Bedroom with Nature View - Nature Win Yala Safari Villa"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="group relative w-full h-48 md:h-56 lg:h-64 rounded-xl group-hover:z-10">
                <Image
                  src={images[1]}
                  alt="Modern Bathroom Amenities in Private Safari Villa Yala"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Right Subcolumn: 1 image */}
            <div className="group relative w-full h-full min-h-96 rounded-xl group-hover:z-10">
              <Image
                src={images[2]}
                alt="Spacious Living Area at Nature Win Yala Luxury Villa"
                fill
                className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* Top Row: 1 image */}
            <div className="group relative w-full h-48 md:h-56 lg:h-64 rounded-xl group-hover:z-10">
              <Image
                src={images[3]}
                alt="Outdoor Nature Views Near Yala National Park Entrance"
                fill
                className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Bottom Row: 2 columns */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="group relative w-full h-48 md:h-56 lg:h-64 rounded-xl group-hover:z-10">
                <Image
                  src={images[4]}
                  alt="Private Garden and Relaxing Area for Safari Guests"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="group relative w-full h-48 md:h-56 lg:h-64 rounded-xl group-hover:z-10">
                <Image
                  src={images[5]}
                  alt="Night View of Luxury Villa Nature Win Yala"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
