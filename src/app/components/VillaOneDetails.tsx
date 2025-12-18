"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Home, Users, Square, Soup, 
  PawPrint, ShowerHead, LandPlot, Mountain,
  ChevronLeft, ChevronRight, ChevronRightIcon 
} from "lucide-react";

const VillaDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure these file paths point to the 5 distinct images you want
  const images = [
    "/assets/images/thumb-1.png",
    "/assets/images/thumb-2.png",
    "/assets/images/thumb-3.png",
    "/assets/images/thumb-4.png",
    "/assets/images/thumb-5.png",
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
    <section className="bg-[#124734] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto border border-dashed border-emerald-600/50 p-6 md:p-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          <div className="space-y-4">
            {/* Main Slider Display */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <div 
                    className="flex transition-transform duration-500 ease-out h-full w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, idx) => (
                    <div key={`main-${idx}`} className="relative min-w-full w-full h-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Villa View ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority={idx === 0}
                        />
                    </div>
                    ))}
                </div>

                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-gray-800 shadow-md hover:bg-white z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-gray-800 shadow-md hover:bg-white z-10"
                >
                  <ChevronRight size={20} />
                </button>
            </div>

            {/* Clickable Thumbnails - FIXED Mapping */}
            <div className="grid grid-cols-5 gap-2">
                {images.map((src, i) => (
                <button 
                    key={`thumb-${i}`} // Used a more descriptive key
                    onClick={() => setCurrentIndex(i)}
                    className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                    i === currentIndex ? 'border-yellow-400 scale-95 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                    <Image
                        src={src}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                    />
                </button>
                ))}
            </div>
          </div>

          <div className="text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Two-Bedroom Villa</h2>
            <div className="space-y-1 text-gray-200 mb-6 font-light">
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
            <button className="flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold w-fit hover:bg-gray-100 transition-colors">
              Book Now <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 border border-emerald-700/50 rounded-lg p-4 text-white/90 hover:bg-emerald-800/30 transition-colors"
            >
              <div className="text-emerald-400">{item.icon}</div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaDetails;