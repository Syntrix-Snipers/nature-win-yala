"use client";

import Image from "next/image";
import backgroundImg from "../../../../public/assets/images/explore-images/Explore-Section-4-Background.jpg";

const HeartOfYala = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[400px] lg:h-[522px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImg}
          alt="Map of Yala region with Nature Win Yala location"
          fill
          priority
          className="object-cover object-[40%_40%] md:object-center"
        />
      </div>

      {/* Content Container */}
      <div className="z-10 max-w-6xl text-center lg:text-left px-4 sm:px-6 md:px-0 lg:ml-[-30%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4 md:mb-8">
          In the Heart of Yala's
          <br />
          Wilderness
        </h2>

        <p className="text-xl md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Located in Rota Wewa Yaya, our resort is surrounded by lakes, forest
          trails, and wildlife zones — giving you the perfect mix of peace and
          adventure.
        </p>
      </div>
    </section>
  );
};

export default HeartOfYala;
