"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type VillaDetailsHomeProps = {
  bgColor?: string;
  images?: string[];
  heading: string;
  paragraph: string;
  buttonText?: string;
  button?: React.ReactNode;
  aboutText?: string;
  reverse?: boolean; // add this prop to control layout direction
  headingColor?: string;
  paragraphColor?: string;
  aboutTextColor?: string; // new prop
};

const VillaDetailsHome: React.FC<VillaDetailsHomeProps> = ({
  bgColor = "#124734",
  images = [],
  heading,
  paragraph,
  buttonText,
  button,
  aboutText = "About Us",
  reverse = false,
  headingColor,
  paragraphColor,
  aboutTextColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="pt-8 lg:pt-18 pb-6 px-4 md:px-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl mx-auto p-8 md:p-10">
        {/* Small screens: About row on top */}
        <div
          className="flex w-full items-center gap-4 mb-8 lg:hidden"
          style={{ color: aboutTextColor || "white" }}
        >
          <p className="text-sm md:text-xl font-serif whitespace-nowrap">
            {aboutText}
          </p>
          <div
            className="h-px grow"
            style={{ backgroundColor: aboutTextColor || "white" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:items-stretch">
          {/* Slider Section */}
          <div
            className={`flex flex-col gap-4 h-full order-2 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative flex-1 aspect-[4/3] lg:[aspect-ratio:auto] lg:h-full rounded-lg overflow-hidden">
              {/* Slider Images */}
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

              {/* Dots Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-white scale-110"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`text-white flex flex-col justify-center items-center text-center lg:items-start lg:text-left order-3 h-full ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Large screens: About row stays inside text column */}
            <div
              className="hidden lg:flex w-full items-center gap-4 mb-6"
              style={{ color: aboutTextColor || "white" }}
            >
              <p className="text-sm md:text-xl font-serif whitespace-nowrap">
                {aboutText}
              </p>
              <div
                className="h-px grow"
                style={{ backgroundColor: aboutTextColor || "white" }}
              ></div>
            </div>

            <h2
              className="text-4xl md:text-5xl font-serif mb-6"
              style={headingColor ? { color: headingColor } : undefined}
            >
              {heading}
            </h2>

            <p
              className="leading-relaxed mb-8 text-sm md:text-base"
              style={
                paragraphColor
                  ? { color: paragraphColor }
                  : { color: "#d1d5db" }
              }
            >
              {paragraph}
            </p>

            {button
              ? button
              : buttonText && (
                  <button className="flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold w-fit hover:bg-gray-100 transition-colors">
                    {buttonText}
                  </button>
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaDetailsHome;
