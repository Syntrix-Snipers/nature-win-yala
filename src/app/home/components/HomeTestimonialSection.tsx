import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example testimonials data
const testimonials = [
  {
    description:
      "Such a peaceful place! The cabana was clean, spacious, and surrounded by pure nature. Perfect getaway near Yala - highly recommended!",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "John Doe",
  },
  {
    description:
      "We had an amazing stay! The hosts were very friendly and made us feel at home. A wonderful escape for families and friends.",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "Jane Smith",
  },
  {
    description:
      "Beautiful cabana with great facilities. The meals were delicious and the environment was relaxing. Will definitely visit again!",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "Emily Johnson",
  },
  {
    description: "Peaceful and relaxing. Will visit again.",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "Michael Lee",
  },
  {
    description: "Staff were friendly and helpful throughout our stay.",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "Sara Kim",
  },
  {
    description: "The villa was spacious and clean. Highly recommend!",
    profileImage: "/assets/images/TestimonialPhoto.png",
    name: "David Brown",
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
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide
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
