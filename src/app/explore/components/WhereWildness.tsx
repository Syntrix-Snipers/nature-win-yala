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
              alt="Luxury Villa Stay near Yala National Park Entrance"
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[47px] xl:text-[56px] leading-tight text-[#124734] text-center sm:text-left">
              Where Luxury Villa Comfort Meets
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Yala's Wilderness
            </h2>

            <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-[#2f2f2f] text-sm sm:text-[15px] leading-relaxed text-center sm:text-justify">
              <p>
                Located minutes from the Yala National Park entrance, Nature Win Yala offers the ultimate private luxury villa experience. Surrounded by untouched landscapes, our property is a sanctuary where leopards roam nearby and the thrill of safari adventure begins at your doorstep.
              </p>

              <p>
                Wake up to the sounds of nature in your private 2-bedroom villa. Enjoy authentic home-cooked meals, secure parking, and the peace of mind that comes with a private, enclosed property designed for families and couples seeking a safe, high-value alternative to crowded resorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWildness;
