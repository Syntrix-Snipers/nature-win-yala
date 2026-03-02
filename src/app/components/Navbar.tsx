"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { images } from "../../../public/assets/images/images";

const navLinkClass =
  "relative font-bold text-[#124734] transition " +
  "after:absolute after:left-0 after:-bottom-1 " +
  "after:h-[2px] after:w-0 after:bg-[#124734] " +
  "after:transition-all after:duration-300 " +
  "hover:after:w-full";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3" aria-label="Nature Win Yala Homepage" data-nosnippet>
          <Image
            src={images.BrandSymbol}
            alt="Nature Win Yala — cabana & Safari"
            width={200} // Reduced width for better layout fit
            height={60}
            className="object-contain w-auto h-12"
            loading="lazy"
            data-nosnippet
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/explore" className={navLinkClass}>
            Explore
          </Link>
          <Link href="/#contact" className={navLinkClass}>
            Contact Us
          </Link>
          <Link
            href="/book-now"
            className="bg-[#124734] text-white px-5 py-2 rounded-lg shadow-md border border-[#124734] font-bold hover:bg-white hover:text-[#124734] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#124734] text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen border-t border-gray-100" : "max-h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 text-lg">
          <Link
            href="/"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Explore
          </Link>
          <Link
            href="/#contact"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/book-now"
            onClick={() => setOpen(false)}
            className="bg-[#124734] text-center text-white px-5 py-3 rounded-lg shadow-md font-bold hover:opacity-90 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
