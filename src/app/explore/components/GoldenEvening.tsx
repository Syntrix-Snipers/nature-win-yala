"use client";

import Image from "next/image";

// Replace these with your actual image paths in public/assets/images/...
import sunsetImg from "../../../../public/assets/images/explore-images/Explore-Section-2-Img-1.jpg";
import landscapeImg from "../../../../public/assets/images/explore-images/Explore-Section-2-Img-2.jpg";
import wildlifeImg from "../../../../public/assets/images/explore-images/Explore-Section-2-Img-3.jpg";

const GoldenEvening = () => {
  return (
    <section
      className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-51"
      style={{ backgroundColor: "#124734" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left: Title */}
          <div className="text-white w-full text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif leading-tight">
              Golden Evenings at
              <br />
              Bembawa Wewa
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] text-center lg:text-justify">
            <p>
              Just minutes from the resort, Bembawa Wewa offers one of Yala's
              most magical sunsets — calm waters, golden skies, and a view that
              feels like a painting.
            </p>
          </div>
        </div>

        {/* Images Row */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Large Sunset Image */}
          <div className="md:col-span-1">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={sunsetImg}
                alt="Golden sunset over calm waters at Bembawa Wewa"
                width={625}
                height={340}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Smaller Images Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Landscape Image */}
            <div className="col-span-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full">
                <Image
                  src={landscapeImg}
                  alt="Serene landscape with trees and wildlife"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Wildlife Image */}
            <div className="col-span-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full">
                <Image
                  src={wildlifeImg}
                  alt="Birds and animals by the water at Bembawa Wewa"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenEvening;
