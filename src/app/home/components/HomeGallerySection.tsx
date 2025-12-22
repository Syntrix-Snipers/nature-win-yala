"use client";

import React, { useState, useEffect } from "react";
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
  // Dynamic image rotation
  const [galleryIndex, setGalleryIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Get 6 images, rotated
  const dynamicImages = [
    images[(galleryIndex + 0) % images.length],
    images[(galleryIndex + 1) % images.length],
    images[(galleryIndex + 2) % images.length],
    images[(galleryIndex + 3) % images.length],
    images[(galleryIndex + 4) % images.length],
    images[(galleryIndex + 5) % images.length],
  ];

  // Helper for image hover effect
  const hoverClass =
    "transition-transform duration-500 ease-in-out hover:scale-105 hover:brightness-110";

  return (
    <section className="w-full pt-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Left Subcolumn: 2 rows */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-48 md:h-56 lg:h-64 group">
                <Image
                  src={dynamicImages[0]}
                  alt="Gallery 1"
                  fill
                  className={`object-cover rounded-xl ${hoverClass}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative w-full h-48 md:h-56 lg:h-64 group">
                <Image
                  src={dynamicImages[1]}
                  alt="Gallery 2"
                  fill
                  className={`object-cover rounded-xl ${hoverClass}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Right Subcolumn: 1 image */}
            <div className="relative w-full h-full min-h-96 group">
              <Image
                src={dynamicImages[2]}
                alt="Gallery 3"
                fill
                className={`object-cover rounded-xl ${hoverClass}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* Top Row: 1 image */}
            <div className="relative w-full h-48 md:h-56 lg:h-64 group">
              <Image
                src={dynamicImages[3]}
                alt="Gallery 4"
                fill
                className={`object-cover rounded-xl ${hoverClass}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Bottom Row: 2 columns */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="relative w-full h-48 md:h-56 lg:h-64 group">
                <Image
                  src={dynamicImages[4]}
                  alt="Gallery 5"
                  fill
                  className={`object-cover rounded-xl ${hoverClass}`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative w-full h-48 md:h-56 lg:h-64 group">
                <Image
                  src={dynamicImages[5]}
                  alt="Gallery 6"
                  fill
                  className={`object-cover rounded-xl ${hoverClass}`}
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
