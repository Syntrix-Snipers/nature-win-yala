"use client";

import Image from "next/image";
import exploreImg from "../../../../public/assets/images/explore-images/Explore-Section-1-Img-1.jpg";

const WhereWildness = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-23 ">
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-[100%] h-[342px] md:h-[380px] rounded-xl overflow-hidden">
            <Image
              src={exploreImg}
              alt="Wildlife at Nature Win Yala"
              fill
              priority
              className="object-cover grayscale"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-[56px] md:text-[47px] leading-tight text-[#124734] mb-6">
              Where Wilderness Meets
              <br />
              Your Perfect Escape
            </h2>

            <div className="grid grid-cols-1 w-[100%] md:grid-cols-2 gap-6 text-[#2f2f2f] text-[15px] leading-relaxed">
              <p className="text-justify">
                Tucked away in Nature Win Yala sits in the heart of Sri Lanka’s
                untouched landscapes, where wildlife roams freely, skies turn
                golden at dusk, and the calm of rural life melts into the thrill
                of adventure.
              </p>

              <p className="text-justify">
                Here, every moment feels close to nature, whether it’s the call
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
