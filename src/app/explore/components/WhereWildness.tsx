"use client";

import Image from "next/image";
import exploreImg from "../../../../public/assets/images/explore-images/Explore-Section-1-Img-1.jpg";

const WhereWildness = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-23">
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={exploreImg}
              alt="Wildlife at Nature Win Yala"
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[47px] xl:text-[56px] leading-tight text-[#124734]">
              Where Wilderness Meets
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Your Perfect Escape
            </h2>

            <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-[#2f2f2f] text-sm sm:text-[15px] leading-relaxed">
              <p className="text-justify">
                Tucked away in Nature Win Yala sits in the heart of Sri Lanka's
                untouched landscapes, where wildlife roams freely, skies turn
                golden at dusk, and the calm of rural life melts into the thrill
                of adventure.
              </p>

              <p className="text-justify">
                Here, every moment feels close to nature, whether it's the call
                of birds at sunrise, the rustling forests around you, or the
                serenity of open fields stretching into the horizon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWildness;
