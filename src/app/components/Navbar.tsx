"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinkClass =
  "relative font-bold text-[#124734] transition " +
  "after:absolute after:left-0 after:-bottom-1 " +
  "after:h-[2px] after:w-0 after:bg-[#124734] " +
  "after:transition-all after:duration-300 " +
  "hover:after:w-full";


export const metadata: Metadata = {
  title: "Book Now| Nature Win Yala",
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    


  return (
    <nav className="w-full bg-white dark:bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-[#124734]"
        >
          <Image
            src="/assets/images/LogoVersion2.png"
            alt="Nature Win Yala Logo"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <Link href="/" className={navLinkClass}>Home</Link>
          <Link href="/about-us" className={navLinkClass}>Explore</Link>
          <Link href="/about-us" className={navLinkClass}>Contact US</Link>


          {/* Book Now Button */}
          <Link
            href="/book-now"
            className="bg-[#124734] text-white px-5 py-2 rounded-lg shadow-md
           border border-transparent font-bold
           hover:bg-white hover:text-[#124734] hover:border-[#124734]
           transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col px-6 py-4 space-y-4 text-lg">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" onClick={() => setOpen(false)}>
              About Us
            </Link>

            {/* Mobile Book Now Button */}
            <Link
              href="/book-now"
              onClick={() => setOpen(false)}
              className="bg-fuchsia-600 text-center text-white px-5 py-3 rounded-lg shadow-md hover:bg-fuchsia-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
