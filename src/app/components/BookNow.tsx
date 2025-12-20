"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const inputBase =
  "w-full p-3 bg-gray-100 border border-gray-200 rounded-md text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all";

const smallInput =
  "w-20 p-2 bg-gray-100 border border-gray-200 rounded text-center text-base text-gray-800 placeholder-gray-500 focus:outline-none";

type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  cabana: string;
  adults: number;
  children: number;
  checkIn: string;
  checkOut: string;
  meals: string[];
  notes: string;
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    cabana: "",
    adults: 0,
    children: 0,
    checkIn: "",
    checkOut: "",
    meals: ["", ""],
    notes: "",
  });

  // Handle inputs, selects, textareas
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const key = name as keyof BookingFormData;

    setFormData((prev) => ({
      ...prev,
      [key]: type === "number" ? Number(value) : value,
    }));
  };

  // Toggle meals checkbox
  const toggleMeal = (meal: string) => {
    setFormData((prev) => ({
      ...prev,
      meals: prev.meals.includes(meal)
        ? prev.meals.filter((m) => m !== meal)
        : [...prev.meals, meal],
    }));
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Booking request sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          cabana: "",
          adults: 0,
          children: 0,
          checkIn: "",
          checkOut: "",
          meals: ["Breakfast", "Dinner"],
          notes: "",
        });
      } else {
        alert("Failed to send booking. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#124734] mb-4">
            Booking Form
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details below and our team will get back to you shortly
          </p>
        </header>

        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["First Name", "text", "firstName"],
              ["Last Name", "text", "lastName"],
              ["E-mail", "email", "email"],
              ["Phone Number", "tel", "phone"],
            ].map(([label, type, name]) => (
              <div key={name} className="flex flex-col gap-2">
                <label className="text-base font-medium text-gray-700">
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  type={type as string}
                  name={name as string}
                  placeholder={label}
                  className={inputBase}
                  value={formData[name as keyof BookingFormData] as string | number}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-gray-700">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                className={inputBase}
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Country</option>
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
                <label className="text-base font-medium text-gray-700">
                  Select Cabana <span className="text-red-500">*</span>
                </label>
                <select
                  name="cabana"
                  className={inputBase}
                  value={formData.cabana}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Your Cabana</option>
                  <option>Two-Bedroom Villa</option>
                </select>
              </div>

              <div className="space-y-4">
                <p className="text-base font-medium text-gray-700">
                  Number of guests <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-8">
                  <div className="flex items-center gap-3">
                    <span className="text-base text-gray-600">Adults:</span>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className={smallInput}
                      min={0}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base text-gray-600">Children:</span>
                    <input
                      type="number"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className={smallInput}
                      min={0}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ["Check-in Date", "checkIn"],
                ["Check-out Date", "checkOut"],
              ].map(([label, name]) => (
                <div key={name} className="flex flex-col gap-2">
                  <label className="text-base font-medium text-gray-700">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name={name}
                    className={inputBase}
                    value={formData[name as keyof BookingFormData]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Meals */}
          <div className="space-y-4">
            <p className="text-base font-medium text-gray-700">Meals Required</p>
            <div className="flex gap-10 flex-wrap">
              {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                <label
                  key={meal}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={formData.meals.includes(meal)}
                      onChange={() => toggleMeal(meal)}
                      className="peer sr-only"
                    />
                    <div className="h-6 w-6 rounded-full bg-gray-200 transition-all peer-checked:bg-gray-200"></div>
                    <div className="absolute h-3 w-3 rounded-full bg-transparent transition-all peer-checked:bg-[#124734]"></div>
                  </div>
                  <span className="text-base text-gray-800">{meal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700">
              Special Requests / Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Any preferences or additional needs?"
              className={inputBase}
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#124734] text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-emerald-900 transition-all shadow-md group"
          >
            Book Now
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
