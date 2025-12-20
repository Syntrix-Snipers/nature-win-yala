"use client";

import Image from "next/image";

// Update these paths to match your actual image locations
import Img1 from "../../../../public/assets/images/explore-images/Explore-Section-3-Img-1.png";
import Img2 from "../../../../public/assets/images/explore-images/Explore-Section-3-Img-2.png";
import Img3 from "../../../../public/assets/images/explore-images/Explore-Section-3-Img-3.png";
import Img4 from "../../../../public/assets/images/explore-images/Explore-Section-3-Img-4.png";

const Destinations = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-51">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center justify-center gap-4 text-sm uppercase font-serif tracking-widest text-[#124734] mb-2">
            <hr className="w-85 border-[#124734]" />
            <span>Explore</span>
            <hr className="w-85 border-[#124734]" />
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            Destinations You Can Explore Nearby
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            At Nature Win Yala, every sunrise opens the door to a new adventure.
            Step outside your cabana, and the wild itself begins the journey.
          </p>
        </div>

        {/* Yala National Park Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Images - Left */}
          <div className="relative">
            <Image
              src={Img1}
              alt="Yala National Park"
              width={625}
              height={361}
              className="w-full object-cover"
            />
          </div>

          {/* Text - Right */}
          <div className="text-left lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Yala National Park – The Untamed Icon
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Just a short drive away, Yala welcomes you with its world-famous
              wildlife. Leopards, elephants, bears, crocodiles, birds — this is
              the place where nature puts on its greatest show. Perfect for
              safari lovers and first-time explorers.
            </p>
          </div>
        </div>

        {/* Sithulpawwa Ancient Rock Temple Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Text - Left */}
          <div className="text-left lg:pr-12 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Sithulpawwa Ancient Rock Temple
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A peaceful spiritual retreat rising above the forest canopy. Climb
              the rock, breathe in the views, and explore centuries of Buddhist
              heritage surrounded by silence and nature.
            </p>
          </div>

          {/* Images - Right */}
          <div className="relative order-1 lg:order-2 ">
            <Image
              src={Img2}
              alt="White stupa at Sithulpawwa Ancient Rock Temple"
              width={625}
              height={361}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Kirinda Beach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Images - Left */}
          <div className="relative">
            <Image
              src={Img3}
              alt="Kirinda Beach"
              width={625}
              height={361}
              className="w-full object-cover"
            />
          </div>

          {/* Text - Right */}
          <div className="text-left lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Kirinda Beach & Temple
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Where the ocean meets mythology.Golden sands, crashing waves, and
              the historic Kirinda Vihara overlooking the sea — a perfect sunset
              spot.
            </p>
          </div>
        </div>

        {/* Tissa Lake & Tissamaharama Temple Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text - Left */}
          <div className="text-left lg:pr-12 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Tissa Lake & Tissamaharama Temple
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Calm waters, starlit evenings, and a stunning temple backdrop.
              Ideal for photography, evening walks, or simply taking in the
              beauty of Southern Sri Lanka.
            </p>
          </div>

          {/* Images - Right */}
          <div className="relative order-1 lg:order-2">
            <Image
              src={Img4}
              alt="Tissamaharama Temple"
              width={625}
              height={361}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
