"use client";
import React from "react";
import Image from "next/image";
import syntrix_logo from '../app/assets/syntrix_banner.png';
import logo from "../app/assets/nature_win_yala.png";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white font-sans px-4 py-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative backdrop-blur-xl bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center w-full max-w-[90vw] sm:max-w-md md:max-w-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:shadow-emerald-500/20 hover:shadow-3xl">
        {/* Logo */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
          <div className="relative w-full h-full flex items-center justify-center border border-white/20 rounded-full bg-gradient-to-br from-white/10 to-emerald-500/10 backdrop-blur-sm animate-scale-in">
            <Image
              src={logo}
              alt="Nature Win Yala"
              className="h-16 w-auto sm:h-20 md:h-24 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>

        {/* Title with typing effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-wide bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 text-transparent bg-clip-text animate-gradient drop-shadow-lg">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 mb-6 leading-relaxed animate-slide-up">
          Experience wilderness with comfort
        </p>

        {/* Animated decorative line */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-expand"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-emerald-400 to-transparent animate-expand"></div>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6">
          <div className="animate-bounce-slow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <span className="text-lg sm:text-xl">🏕️</span>
            </div>
          </div>
          <div className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <span className="text-lg sm:text-xl">🌲</span>
            </div>
          </div>
          <div className="animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <span className="text-lg sm:text-xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-6">
          <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full animate-loading shadow-lg shadow-emerald-400/50"></div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce shadow-lg shadow-emerald-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce shadow-lg shadow-teal-400/50" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce shadow-lg shadow-green-400/50" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Footer */}
          <div className="border-t border-white/10 pt-5 flex flex-col items-center">
            {/* Banner image */}
            <Image
              src={syntrix_logo}
              alt="team syntrix"
              className="w-40 h-auto mb-2"
            />
            <p className="text-xs sm:text-sm text-emerald-200/90 font-semibold tracking-wide animate-fade-in">
              Developing by Syntrix Alpha Team
            </p>
          </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 0%; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes expand {
          0%, 100% { transform: scaleX(0.5); opacity: 0.5; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-loading {
          animation: loading 2.5s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.3s both;
        }
        
        .animate-expand {
          animation: expand 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}