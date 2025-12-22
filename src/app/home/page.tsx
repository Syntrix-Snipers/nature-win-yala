"use client";

import Image from "next/image";
import VillaDetailsHome from "./components/VillaDetailsHome";
import { images } from "../../../public/assets/images/images";
import HomeOfferCard from "./components/HomeOfferCard";
import { icons } from "../../../public/assets/icons/icon";
import HomeTopImageCollage from "./components/HomeTopImageCollage";
import VillaHomeCard from "./components/villaHomeCard";
import Link from "next/link";
import HomeTestimonialSection from "./components/HomeTestimonialSection";
import ContactUs from "../components/ContactUs";
import HomeGallerySection from "./components/HomeGallerySection";
import { BtnComponent } from "../components/BtnComponent";

const Home = () => {
  // Images for HomeTopImageCollage
  const collageImages = [
    images.SunsetImg,
    images.VillaImg,
    images.ElephantImg,
    images.FireCampImg,
  ];
  return (
    <div className="pt-0 md:pt-12 flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-[#ffffff] md:bg-[#000000] px-2 sm:px-8 flex justify-center md:h-[100svh]">
        {/* Background Image (md+ only) */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={images.houseimg2}
            alt="Nature Win Yala"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
            priority
          />
          {/* Green overlay (md+ only) */}
          <div className="absolute inset-0 bg-[#124734]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 md:h-full">
          <div className="text-white flex flex-col md:flex-row md:items-stretch md:justify-between md:h-full min-h-[500px] md:min-h-0 gap-10">
            <div className="md:w-1/2 flex flex-col justify-center py-8 md:py-12 text-center md:text-left items-center md:items-start gap-6">
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-serif pt-24 md:pt-48 mb-4 text-[#124734] md:text-white">
                Escape to the Heart of Yala’s Serenity
              </h1>
              <p className="mb-4 text-[#124734] md:text-white">
                Unwind in spacious cabanas, enjoy campfire nights, and wake to
                the sounds of nature like never before
              </p>
                <BtnComponent variant={typeof window !== "undefined" && window.innerWidth < 768 ? "btn_2" : "btn_1"}>
                <Link href="/book-now">Book Now</Link>
                </BtnComponent>
            </div>

            <div className="md:w-1/2 md:mt-0 flex flex-col pt-0 pb-10 sm:pb-0 md:pt-0 md:pb-0">
              <div className="flex-1 min-h-0 flex items-end justify-center md:justify-end md:items-stretch">
                <HomeTopImageCollage
                  className="w-full md:h-full"
                  images={collageImages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <VillaDetailsHome
        bgColor="#124734"
        images={[
          images.thumb1,
          images.thumb2,
          images.thumb3,
          images.thumb4,
          images.thumb5,
        ]}
        heading="A Tranquil Escape in the Heart of Yala"
        paragraph="Nature Win Yala is where comfort meets the wild. Our cozy cabanas sit beside the untouched beauty of Yala, surrounded by birdsong, starry skies, and the warmth of campfire nights. It’s a peaceful escape for friends, families, and nature lovers - a place to unwind, explore, and create memories that stay with you long after your journey ends."
        buttonText="Discover More"
        button={<BtnComponent variant="btn_1"><Link href="/explore">Discover More</Link></BtnComponent>}
        aboutText="About Us"
        aboutTextColor="#ffffff"
      />

      {/* Third Section */}
      <div className="flex-1 bg-[#ffffff] py-16 px-4">
        <div className="text-center mb-4 py-2">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-24 md:w-36 bg-[#124734]"></div>
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#124734]">
              Facilities
            </span>
            <div className="h-[1px] w-24 md:w-36 bg-[#124734]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#124734] mb-6">
            What We Offer for a <br /> Perfect Stay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 mb-8 place-items-center">
            <HomeOfferCard
              icon="CampIcon"
              title="Spacious Cabanas"
              description="Spacious, airy, and designed for groups who want comfort without losing the magic of the wild"
            />
            <HomeOfferCard
              icon="FireIcon"
              title="Starlit Campfire Evenings"
              description="Unwind by the fire, share stories, and feel the calm of Yala's night sky - pure warmth, pure wonder"
            />
            <HomeOfferCard
              icon="PlateIcon"
              title="Fresh Local Meals"
              description="Delicious breakfast, lunch, and dinner prepared with homely flavors to complete your stay"
            />
            <HomeOfferCard
              icon="ParkIcon"
              title="Safe & Easy Parking"
              description="Park with ease and step straight into your nature escape - no hassle, no stress"
            />
            <HomeOfferCard
              icon="ShowerIcon"
              title="Private Attached Bathrooms"
              description="Clean, comfortable, and built for modern convenience inside your rustic getaway"
            />
            <HomeOfferCard
              icon="ElephantIcon"
              title="Close-to-Nature Experience"
              description="Delicious breakfast, lunch, and dinner prepared with homely flavors to complete your stay"
            />
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex-1 bg-[#124734] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-24 md:w-48 bg-[#ffffff]"></div>
              <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#ffffff]">
                Packages
              </span>
              <div className="h-[1px] w-24 md:w-48 bg-[#ffffff]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#ffffff] mb-6">
              Choose Your Perfect Stay
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              Whether you’re seeking relaxation, adventure, or a mix of both -
              we’ve crafted experiences to suit your style.
            </p>
          </div>

          {/* Cabana Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <VillaHomeCard
              image={images.houseimg1}
              alt="Two-Bedroom Villa"
              title="Two-Bedroom Villa"
              price="Rs. 12,500.00/night"
              features={[
                {
                  icon: icons.SmallHomeIcon,
                  text: "Entire villa",
                },
                {
                  icon: icons.SmallProfileIcon,
                  text: "6 Persons",
                },
                { icon: icons.SmallBoxIcon, text: "1000 m²" },
                {
                  icon: icons.SmallKitchenIcon,
                  text: "Private kitchen",
                },
                {
                  icon: icons.SmallWashroomIcon,
                  text: "Private bathroom",
                },
              ]}
              actionButton={
                <BtnComponent variant="btn_2">
                  <Link href="/book-now">Book Now</Link>
                </BtnComponent>
              }
            />
            <VillaHomeCard
              image={images.houseimg2}
              alt="Three-Bedroom Villa"
              title="Three-Bedroom Villa"
              price="Rs. 15,500.00/night"
              features={[
                {
                  icon: icons.SmallHomeIcon,
                  text: "Entire villa",
                },
                {
                  icon: icons.SmallProfileIcon,
                  text: "6 Persons",
                },
                { icon: icons.SmallBoxIcon, text: "1000 m²" },
                {
                  icon: icons.SmallKitchenIcon,
                  text: "Private kitchen",
                },
                {
                  icon: icons.SmallWashroomIcon,
                  text: "Private bathroom",
                },
              ]}
              actionButton={
                <BtnComponent variant="btn_2">
                  <Link href="/book-now">Book Now</Link>
                </BtnComponent>
              }
              comingSoon={true}
            />
          </div>
        </div>
      </div>

      {/* Fisth Section */}
      <VillaDetailsHome
        bgColor="#fff"
        images={[
          images.dining1,
          images.dining2,
          images.dining3,
          images.dining4,
        ]}
        heading="A Tranquil Escape in the Heart of Yala"
        paragraph="Nature Win Yala is where comfort meets the wild. 
        Our cozy cabanas sit beside the untouched beauty of Yala, surrounded by birdsong, starry skies, and the warmth of campfire nights. 
        It’s a peaceful escape for friends, families, and nature lovers - a place to unwind, 
        explore, and create memories that stay with you long after your journey ends."
        headingColor="#124734"
        paragraphColor="#124734"
        buttonText="Download Menu"
        button={<BtnComponent variant="btn_2">Download Menu</BtnComponent>}
        aboutText="Dine With Us"
        aboutTextColor="#124734"
        reverse={true}
      />

      {/* Sixth Section */}
      <div className="flex-1 bg-[#124734] py-16 px-4">
        <div className="text-center mb-4 py-2">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-24 md:w-64 bg-[#ffffff]"></div>
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#ffffff]">
              Testimonial
            </span>
            <div className="h-[1px] w-24 md:w-64 bg-[#ffffff]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#ffffff] mb-6">
            What Our Clients Say About Us
          </h2>
          <HomeTestimonialSection />
        </div>
      </div>

      {/* Seventh Section */}
      <div className="flex-1 bg-[#ffffff] py-16 px-4">
        <div className="text-center mb-4 py-2">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-24 md:w-56 bg-[#124734]"></div>
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap text-[#124734]">
              Gallery
            </span>
            <div className="h-[1px] w-24 md:w-56 bg-[#124734]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#124734] mb-6">
            Beauty Beyond the Cabana
          </h2>
          <HomeGallerySection />
        </div>
      </div>

      {/* Eighth Section */}
      <ContactUs />
    </div>
  );
};

export default Home;
