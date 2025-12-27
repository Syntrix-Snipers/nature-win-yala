import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../../../public/assets/images/images";

// Example testimonials data
const testimonials = [
  {
    description:
      "The best luxury villa in Yala! We had the entire 2-bedroom villa to ourselves, and it was so close to the Yala National Park entrance. The private safari arranged by the host was incredible—we saw three leopards! The homemade Sri Lankan food was the highlight.",
    profileImage: images.TestimonialPhoto,
    name: "Sarah Jenkins",
  },
  {
    description:
      "Perfect family stay. Unlike the crowded hotels, Nature Win Yala gave us total privacy and space. The kids loved the campfire and the huge garden. Unbeatable value for a luxury safari accommodation near the park.",
    profileImage: images.TestimonialPhoto2,
    name: "Kasun Perera",
  },
  {
    description:
      "Serene, clean, and absolutely beautiful. The private kitchen was a huge plus, and the attached bathrooms were modern and spotless. Waking up to the sounds of peacocks and enjoying breakfast on the balcony was magical.",
    profileImage: images.TestimonialPhoto3,
    name: "Emma Lewis",
  },
  {
    description: "We stayed at large resorts before, but Nature Win Yala was a far more authentic and personal experience. Being minutes from the entrance meant we were the first ones in the park. 10/10 service and location.",
    profileImage: images.TestimonialPhoto4,
    name: "David Muller",
  },
  {
    description: "A hidden gem for luxury travelers. The villa is spacious (1000sqft) and the nature views are stunning. The private BBQ night under the stars was unforgettable. Highly recommend for a private safari getaway.",
    profileImage: images.TestimonialPhoto5,
    name: "Nadeeshan P.",
  },
  {
    description: "Excellent value for money. You get a whole luxury villa for the price of a hotel room. Very close to Yala safari entrance. The host organized everything perfectly, from the jeep to the meals.",
    profileImage: images.TestimonialPhoto6,
    name: "Ishara M.",
  },
];

const CARDS_PER_SLIDE = 3;
const totalSlides = Math.ceil(testimonials.length / CARDS_PER_SLIDE);

const HomeTestimonialSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Get testimonials for current slide
  const slideTestimonials = testimonials.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-500">
            {slideTestimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                description={testimonial.description}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                className="w-full md:w-[320px]"
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="absolute left-0 -bottom-4 flex gap-3">
            <button
              onClick={prevSlide}
              className={`bg-[#124734] border border-white rounded-md p-2 shadow transition hover:bg-white hover:border-white`}
              aria-label="Previous"
            >
              <ChevronLeft
                size={24}
                className="text-white hover:text-[#124734] transition"
              />
            </button>
            <button
              onClick={nextSlide}
              className={`bg-white border border-[#124734] rounded-md p-2 shadow transition hover:bg-[#124734] hover:border-white`}
              aria-label="Next"
            >
              <ChevronRight
                size={24}
                className="text-[#124734] hover:text-white transition"
              />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${idx === currentSlide
                    ? "bg-white opacity-100 scale-110"
                    : "bg-white opacity-40 hover:opacity-70"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;
