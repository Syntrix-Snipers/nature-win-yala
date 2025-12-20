"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

const VillaDetailsHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure these file paths point to the 5 distinct images you want
  const images = [
    "/assets/images/thumb-1.png",
    "/assets/images/thumb-2.png",
    "/assets/images/thumb-3.png",
    "/assets/images/thumb-4.png",
    "/assets/images/thumb-5.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Automatically change slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#124734] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            {/* Main Slider Display */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out h-full w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <div
                    key={`main-${idx}`}
                    className="relative min-w-full w-full h-full flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`Villa View ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 100vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm md:text-xl font-serif whitespace-nowrap">
                About Us
              </p>
              <div className="h-px bg-white flex-grow"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              A Tranquil Escape in the Heart of Yala
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              Nature Win Yala is where comfort meets the wild. Our cozy cabanas
              sit beside the untouched beauty of Yala, surrounded by birdsong,
              starry skies, and the warmth of campfire nights. It’s a peaceful
              escape for friends, families, and nature lovers - a place to
              unwind, explore, and create memories that stay with you long after
              your journey ends.
            </p>
            <button className="flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold w-fit hover:bg-gray-100 transition-colors">
              Discover More <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaDetailsHome;
