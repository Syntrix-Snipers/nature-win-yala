"use client";

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Nature Win Yala</span> —
          your perfect escape into the wild. We are dedicated to providing
          unforgettable safari experiences in the heart of Yala, blending
          adventure, comfort, and nature.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Our team is passionate about wildlife and committed to offering safe,
          guided, and personalized tours. Whether you're a nature lover,
          photographer, or someone seeking peace, we ensure a memorable journey.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Join us and experience the beauty, thrill, and serenity of Yala like
          never before. Your adventure begins here!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
