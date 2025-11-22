"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Book Now| Nature Win Yala",
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    


  return (
    <nav className="w-full bg-white dark:bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          NATURE WIN YALA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <Link href="/" className="hover:text-fuchsia-500 transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-fuchsia-500 transition">
            About Us
          </Link>

          {/* Book Now Button */}
          <Link
            href="/book-now"
            className="bg-fuchsia-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-fuchsia-700 transition"
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
