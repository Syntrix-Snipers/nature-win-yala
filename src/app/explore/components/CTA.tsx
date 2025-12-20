"use client";

import Link from "next/link";

const CTA = () => {
  return (
    <section
      style={{ backgroundColor: "#124734" }}
      className="w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-23">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Text Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4">
              Need Help With Your Booking?
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Have questions or want to book faster? Reach us anytime
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex justify-start md:justify-end">
            <Link
              href="/contact" // Change this to your actual contact/booking page
              className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-medium text-lg rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us Now
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
