"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const inputBase =
  "w-full p-3 bg-gray-100 border border-gray-200 rounded-md text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-emerald-500";

const smallInput =
  "w-20 p-2 bg-gray-100 border border-gray-200 rounded text-center text-gray-800 placeholder-gray-600 focus:outline-none";

const BookingForm = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className="text-4xl font-serif text-[#124734] mb-2">Booking Form</h2>
          <p className="text-gray-600">
            Fill in your details below and our team will get back to you shortly
          </p>
        </header>

        <form className="space-y-8">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["First Name", "text"],
              ["Last Name", "text"],
              ["E-mail", "email"],
              ["Phone Number", "tel"],
            ].map(([label, type]) => (
              <div key={label} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {label} <span className="text-red-500">*</span>
                </label>
                <input type={type} placeholder={label} className={inputBase} />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Country <span className="text-red-500">*</span>
              </label>
              <select className={inputBase}>
                <option>Select Your Country</option>
                <option>Sri Lanka</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Russia</option>
              </select>
            </div>
          </div>

          {/* Cabana & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Cabana <span className="text-red-500">*</span>
                </label>
                <select className={inputBase}>
                  <option>Select Your Cabana</option>
                  <option>Two-Bedroom Villa</option>
                </select>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">
                  Number of guests <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Adults:</span>
                    <input type="number" placeholder="0" className={smallInput} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Children:</span>
                    <input type="number" placeholder="0" className={smallInput} />
                  </div>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Check-in Date", "Check-out Date"].map((label) => (
                <div key={label} className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input type="date" className={inputBase} />
                </div>
              ))}
            </div>
          </div>

          {/* Meals */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">Meals Required</p>
            <div className="flex gap-6">
              {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                <label key={meal} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#124734]" />
                  <span className="text-sm text-gray-700">{meal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Special Requests / Notes
            </label>
            <textarea
              rows={4}
              placeholder="Any preferences or additional needs?"
              className={inputBase}
            />
          </div>

          <button className="flex items-center gap-2 bg-[#124734] text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-900 transition">
            Book Now <ChevronRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
