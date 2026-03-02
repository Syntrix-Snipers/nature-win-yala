"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { homeImages, galleryMore } from "../../../../public/assets/images/images";
import BtnComponent from "../../components/BtnComponent";

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
    <section id="gallery" className="w-full pt-8 px-4 md:px-8">
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
                alt="Spacious Living Area at Nature Win Yala cabana"
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
                  alt="Night View of cabana Nature Win Yala"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View More Button with Background Image */}
        <div className="relative mt-12 rounded-2xl overflow-hidden group/cta">
          <div className="absolute inset-0 z-0">
            <Image
              src={galleryMore[0].src}
              alt="Scenic View of Yala National Park Entrance"
              fill
              className="object-cover transition-transform duration-1000 group-hover/cta:scale-110"
            />
            <div className="absolute inset-0 bg-[#124734]/40 group-hover/cta:bg-[#124734]/30 transition-colors duration-500"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center py-16 px-6 text-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 drop-shadow-md">
              Hungry for More Nature?
            </h3>
            <Link href="/gallery">
              <BtnComponent variant="btn_2" className="shadow-2xl">
                Explore Full Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </BtnComponent>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
