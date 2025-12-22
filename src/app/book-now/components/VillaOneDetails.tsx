"use client";
// SEO metadata for the Two-Bedroom Villa page
import { BtnComponent } from "../../components/BtnComponent";
export const metadata = {
  title: "Two-Bedroom Villa | Yala Safari Stay | Travel Yala Sri Lanka | Nature Win Yala",
  description:
    "Book your luxury two-bedroom villa in Yala, Sri Lanka. Enjoy a unique safari experience, wildlife adventures, and family-friendly travel near Yala National Park. Pet-friendly, private kitchen, balcony views, and the best Yala safari accommodation for travelers exploring Yala, Sri Lanka.",
  keywords: [
    "Yala",
    "Yala Sri Lanka",
    "Yala safari",
    "Yala National Park",
    "safari villa Yala",
    "travel Yala",
    "Sri Lanka travel",
    "luxury villa Yala",
    "family accommodation Yala",
    "pet friendly Yala",
    "wildlife Yala",
    "Nature Win Yala",
    "Yala safari stay",
    "Yala travel guide",
    "Yala accommodation",
    "Yala safari hotel"
  ],
};


import React, { useState } from "react";
import Image from "next/image";
import { 
  Home, Users, Square, Soup, 
  PawPrint, ShowerHead, LandPlot, Mountain,
  ChevronLeft, ChevronRight, ChevronRightIcon 
} from "lucide-react";
// Import images from the auto-generated images.js file
import { images as villaImages } from "../../../../public/assets/images/images";

const VillaDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: villaImages.thumb1,
      alt: "Luxury two-bedroom villa exterior with private pool at Nature Win Yala"
    },
    {
      src: villaImages.thumb2,
      alt: "Spacious bedroom with twin beds in Yala safari villa at Nature Win Yala"
    },
    {
      src: villaImages.thumb3,
      alt: "Modern kitchen and dining area in private villa near Yala National Park"
    },
    {
      src: villaImages.thumb4,
      alt: "Balcony view overlooking Yala National Park jungle from villa"
    },
    {
      src: villaImages.thumb5,
      alt: "Pet-friendly villa with free parking and garden at Nature Win Yala"
    }
  ];

  const amenities = [
    { icon: <Home size={20} />, label: "The entire villa" },
    { icon: <Users size={20} />, label: "6 Persons" },
    { icon: <Square size={20} />, label: "1000 m²" },
    { icon: <Soup size={20} />, label: "Private kitchen" },
    { icon: <PawPrint size={20} />, label: "Pet friendly" },
    { icon: <ShowerHead size={20} />, label: "Private bathroom" },
    { icon: <LandPlot size={20} />, label: "Free on-site parking" },
    { icon: <Mountain size={20} />, label: "Balcony View" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#124734] py-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto border border-dashed border-emerald-600/50 p-5 md:p-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          
          {/* Slider Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <div 
              className="flex transition-transform duration-500 ease-out h-full w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
              {images.map((img, idx) => (
                <div key={`main-${idx}`} className="relative min-w-full w-full h-full flex-shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={idx === 0}
                />
                </div>
              ))}
              </div>

              {/* Slider Arrows */}
              <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-[#124734] bg-white/90 border border-[#124734] shadow-sm z-10 transition-all duration-150 hover:bg-[#124734] hover:text-white hover:shadow-lg hover:border-white focus:outline-none focus:ring-2 focus:ring-[#124734]"
              style={{ minWidth: 0 }}
              >
              <ChevronLeft size={18} />
              </button>
              <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-[#124734] bg-white/90 border border-[#124734] shadow-sm z-10 transition-all duration-150 hover:bg-[#124734] hover:text-white hover:shadow-lg hover:border-white focus:outline-none focus:ring-2 focus:ring-[#124734]"
              style={{ minWidth: 0 }}
              >
              <ChevronRight size={18} />
              </button>
            </div>

            {/* Clickable Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {images.map((img, i) => (
                <BtnComponent
                  key={`thumb-${i}`}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  variant="btn_2"
                  className={`relative aspect-square rounded overflow-hidden border-2 transition-all duration-150 p-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#124734] hover:shadow-lg hover:scale-[1.05] ${
                    i === currentIndex
                      ? 'border-[#124734] opacity-100 shadow-lg'
                      : 'border-transparent opacity-60'
                  }`}
                  style={{ minWidth: 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt + ' (thumbnail)'}
                    fill
                    className="object-cover"
                  />
                </BtnComponent>
              ))}
            </div>
          </div>

          {/* Villa Details Info */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Two-Bedroom Villa</h2>
            
            <div className="space-y-2 text-gray-200 mb-6 font-light text-sm md:text-base">
              <p><span className="font-semibold text-white">Number of guests :</span> 6 Members</p>
              <p><span className="font-semibold text-white">Villa Size :</span> 1000 m²</p>
              <p><span className="font-semibold text-white">Bedroom 1 :</span> 3 twin beds</p>
              <p><span className="font-semibold text-white">Bedroom 2 :</span> 1 full bed</p>
              <p><span className="font-semibold text-white">Living room :</span> 1 sofa bed</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              The air-conditioned villa has 2 bedrooms, 1 bathroom and a kitchen. 
              The villa&apos;s kitchen is available for cooking and storing food. 
              This villa features a flat-screen TV. The unit has 5 beds.
            </p>

            <div className="mb-8">
              <span className="text-3xl font-semibold">LKR 12,500.00</span>
              <span className="text-gray-300 text-xl font-light"> / Night Per Person</span>
            </div>

            <BtnComponent
              variant="btn_1"
            >
              Book Now <ChevronRightIcon size={18} />
            </BtnComponent>
          </div>
        </div>

        {/* Amenities Grid: 
            - grid-cols-2: two columns on mobile
            - grid-rows-4: forces exactly 4 rows
            - grid-flow-col: fills vertically (1,2,3,4 on left | 5,6,7,8 on right)
            - lg overrides: returns to 4-column horizontal layout for desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 grid-flow-col lg:grid-flow-row gap-3 md:gap-4">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 border border-emerald-700/50 rounded-lg p-3 md:p-4 text-white/90 hover:bg-white hover:text-emerald-600 transition-colors group"
            >
              <div className="text-emerald-400 shrink-0 group-hover:text-emerald-600 transition-colors">{item.icon}</div>
              <span className="text-xs sm:text-sm font-medium leading-tight group-hover:text-emerald-600 transition-colors">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VillaDetails;