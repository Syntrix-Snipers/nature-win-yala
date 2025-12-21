"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { contactData } from "../../../data/data";

const ContactUs = () => {
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
                        className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    ></iframe>
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
                        Get in Touch with us <br /> & let's talk
                    </h2>

                    {/* Form */}
                    <form className="space-y-10 max-w-lg">
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                className="w-full bg-transparent border-b border-white border-opacity-60 py-2 outline-none focus:border-opacity-100 transition-all placeholder:text-white placeholder:opacity-60"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <textarea
                                id="message"
                                placeholder="Message"
                                rows={1}
                                className="w-full bg-transparent border-b border-white border-opacity-60 py-2 outline-none focus:border-opacity-100 transition-all placeholder:text-white placeholder:opacity-60 resize-none overflow-hidden min-h-[40px]"
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = "auto";
                                    target.style.height = `${target.scrollHeight}px`;
                                }}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors group mt-6"
                        >
                            Submit <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
