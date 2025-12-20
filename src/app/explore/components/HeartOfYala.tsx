"use client";

import Image from "next/image";

// Import your background image
import backgroundImg from "../../../../public/assets/images/explore-images/Explore-Section-4-Background.jpg";

const HeartOfYala = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[400px] lg:h-[522px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImg}
          alt="Map of Yala region with Nature Win Yala location"
          fill
          className="object-cover"
          priority
        />
 
      </div>

      {/* Content Container */}
      <div className="z-10 max-w-6xl mr-[640px] text-left text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
          In the Heart of Yala's
          <br />
          Wilderness
        </h2>

        <p className="text-xl w-[469px] md:text-1xl lg:text-1xl max-w-2xl leading-relaxed">
          Located in Rota Wewa Yaya, our resort is surrounded by lakes, forest
          trails, and wildlife zones giving you the perfect mix of peace and
          adventure.
        </p>
      </div>

      
    </section>
  );
};

export default HeartOfYala;
