"use client";

import React, { useState } from "react";
import { BtnComponent } from "./BtnComponent";
import Image from "next/image";
import { contactData } from "../../../data/data";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Thank you! Your message has been sent.");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side: Map */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95069.71003679032!2d81.35873477485332!3d6.301294312313644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae683005bbfdbd3%3A0xa49e19a7d2d058c!2sNature%20win%20yala!5e0!3m2!1sen!2slk!4v1766254348871!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:grayscale lg:contrast-125 lg:hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#124734] text-white p-8 md:p-12 lg:p-20 flex flex-col justify-center relative">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm md:text-xl font-serif font-semibold whitespace-nowrap">
              Contact Us
            </span>
            <div className="h-[1px] w-full max-w-[300px] bg-white opacity-60"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
            Get in Touch with us <br /> & let&apos;s talk
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10 max-w-lg">
            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white border-opacity-60 py-2 outline-none focus:border-opacity-100 transition-all placeholder:text-white placeholder:opacity-60"
                required
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                placeholder="Message"
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white border-opacity-60 py-2 outline-none focus:border-opacity-100 transition-all placeholder:text-white placeholder:opacity-60 resize-none overflow-hidden min-h-[40px]"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = `${target.scrollHeight}px`;
                }}
                required
              />
            </div>

            {/* Feedback Messages */}
            {success && (
              <p className="text-green-300 text-sm font-serif">{success}</p>
            )}
            {error && (
              <p className="text-red-300 text-sm font-serif">{error}</p>
            )}

            {/* Submit Button */}
            <BtnComponent
              type="submit"
              variant="btn_1"
              disabled={loading}
              className="mt-6 flex items-center gap-2 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                className="inline-block"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10h10m0 0-4-4m4 4-4 4"
                />
              </svg>
            </BtnComponent>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
