"use client";

import Link from "next/link";
import { BtnComponent } from "../../components/BtnComponent";


const CTA = () => {
  return (
    <section
      style={{ backgroundColor: "#124734" }}
      className="w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-23">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Text Content */}
          <div className="text-white text-center md:text-left lg:ml-[-2%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4">
              Need Help With Your Booking?
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Have questions or want to book faster? Reach us anytime
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex justify-center md:justify-end">
            <BtnComponent variant="btn_1">
              <Link href="/#contact" className="flex items-center gap-2">
                Contact Us Now
                <span className="text-xl">→</span>
              </Link>
            </BtnComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
