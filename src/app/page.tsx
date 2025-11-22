"use client";
import React from "react";
import Image from "next/image";
import logo from "../app/assets/nature_win_yala.png"; // Project logo
import syntrix_logo from "../app/assets/syntrix_logo.png"; // Syntrix logo

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans px-4 py-8 sm:px-6 lg:px-8">
      <div className="backdrop-blur-xl bg-white/10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl text-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl border border-white/20 hover:border-green-300/30 transition-all duration-300">
        {/* Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
          {/* Project Logo */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center border border-white/10 rounded-full bg-white/5">
              <Image
                src={logo}
                alt="Project Logo"
                className="h-24 w-auto sm:h-28 md:h-32 object-contain"
              />
            </div>
          </div>

          {/* Plus Icon - Hidden on mobile, visible on sm+ */}
          <div className="hidden sm:block text-green-300 text-3xl md:text-4xl drop-shadow-md animate-pulse">
            +
          </div>

          {/* Syntrix Logo */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-xl opacity-20 animate-pulse [animation-delay:500ms]"></div>
            <div className="relative w-full h-full flex items-center justify-center border border-white/10 rounded-full bg-white/5">
              <Image
                src={syntrix_logo}
                alt="Syntrix Logo"
                className="h-20 w-auto sm:h-24 md:h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 tracking-wide bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-transparent bg-clip-text drop-shadow-xl animate-gradient">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 max-w-xs sm:max-w-sm md:max-w-md mx-auto leading-relaxed px-2">
          We're crafting something exceptional. Stay tuned for the official
          launch!
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mb-8 sm:mb-10">
          <div className="animate-bounce h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
          <div className="animate-bounce h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white shadow-lg shadow-white/50 [animation-delay:150ms]"></div>
          <div className="animate-bounce h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-300 shadow-lg shadow-green-300/50 [animation-delay:300ms]"></div>
        </div>

        {/* Progress indicator */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-8 sm:mb-10">
          <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-300 to-green-500 rounded-full animate-loading shadow-lg shadow-green-400/50"></div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-white/60 tracking-wide">
            Developed by
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mt-1 sm:mt-2 tracking-widest text-green-300 drop-shadow-md hover:text-green-400 transition-colors duration-300">
            Syntrix
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 0%;
          }
        }
        .animate-loading {
          animation: loading 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
