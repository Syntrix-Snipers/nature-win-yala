"use client";

import React, { useState } from "react";

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Your booking request has been sent!");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-28 px-6 pb-16">
      <div className="max-w-lg mx-auto bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Book Now
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-zinc-100 dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="0771234567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-zinc-100 dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-zinc-100 dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Any special request..."
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-zinc-100 dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-fuchsia-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-fuchsia-700 transition shadow-md"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
