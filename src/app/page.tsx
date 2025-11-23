"use client";
import React from "react";
import Image from "next/image";
import syntrix_banner from '../app/assets/syntrix_banner.png';
import logo from "../app/assets/nature_win_yala.png";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white font-sans px-4 py-6 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Animated stars/particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full animate-twinkle-delay"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-twinkle-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/2 left-2/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-twinkle-delay"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative backdrop-blur-xl bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center w-full max-w-[90vw] sm:max-w-md md:max-w-lg border border-white/10 hover:border-emerald-400/40 transition-all duration-500 hover:shadow-emerald-500/30 hover:shadow-3xl animate-card-in">
        {/* Logo with enhanced animations */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 animate-logo-entry">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full blur-xl opacity-40 animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-rotate-slow"></div>
          <div className="relative w-full h-full flex items-center justify-center border-2 border-white/20 rounded-full bg-gradient-to-br from-white/10 to-emerald-500/10 backdrop-blur-sm animate-scale-pulse hover:scale-110 transition-transform duration-500">
            <Image
              src={logo}
              alt="Nature Win Yala"
              className="h-16 w-auto sm:h-20 md:h-24 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>

        {/* Title with enhanced gradient animation */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-wide bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 text-transparent bg-clip-text animate-gradient-flow drop-shadow-lg">
          Coming Soon
        </h1>

        {/* Subtitle with wave effect */}
        <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 mb-6 leading-relaxed animate-slide-up-fade">
          Experience wilderness with comfort
        </p>

        {/* Enhanced decorative line */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-expand-pulse"></div>
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-300"></div>
          </div>
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-emerald-400 to-transparent animate-expand-pulse"></div>
        </div>

        {/* Icons with staggered bounce */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6">
          <div className="animate-float-icon">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50">
              <span className="text-lg sm:text-xl">🏕️</span>
            </div>
          </div>
          <div className="animate-float-icon" style={{ animationDelay: '0.3s' }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/50">
              <span className="text-lg sm:text-xl">🌲</span>
            </div>
          </div>
          <div className="animate-float-icon" style={{ animationDelay: '0.6s' }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50">
              <span className="text-lg sm:text-xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Enhanced progress bar */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-6">
          <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
            <div className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full animate-loading-smooth shadow-lg shadow-emerald-400/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Enhanced animated dots */}
        <div className="flex justify-center gap-1.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce-smooth shadow-lg shadow-emerald-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce-smooth shadow-lg shadow-teal-400/50" style={{ animationDelay: '0.15s' }}></div>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce-smooth shadow-lg shadow-green-400/50" style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Footer with animation */}
        <div className="border-t border-white/10 pt-5 flex flex-col items-center animate-fade-in-up">
          <Image
            src={syntrix_banner}
            alt="team syntrix"
            className="w-40 h-auto mb-2 animate-logo-fade-in hover:scale-105 transition-transform duration-300"
          />
          <p className="text-xs sm:text-sm text-emerald-200/90 font-semibold tracking-wide animate-text-glow">
            Developing by Syntrix Alpha Team
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-smooth {
          0% { width: 0%; }
          50% { width: 85%; }
          100% { width: 0%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.1); }
          66% { transform: translate(30px, -20px) scale(0.9); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -30px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes twinkle-delay {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        
        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes logo-entry {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes card-in {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-up-fade {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes expand-pulse {
          0%, 100% { transform: scaleX(0.5); opacity: 0.4; }
          50% { transform: scaleX(1.2); opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-12px); opacity: 0.7; }
        }
        
        @keyframes fade-in-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes logo-fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(110, 231, 183, 0.5); }
          50% { text-shadow: 0 0 20px rgba(110, 231, 183, 0.8); }
        }
        
        .animate-loading-smooth {
          animation: loading-smooth 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 4s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-twinkle-delay {
          animation: twinkle-delay 2.5s ease-in-out infinite;
        }
        
        .animate-twinkle-slow {
          animation: twinkle-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-scale-pulse {
          animation: scale-pulse 3s ease-in-out infinite;
        }
        
        .animate-logo-entry {
          animation: logo-entry 1s ease-out;
        }
        
        .animate-card-in {
          animation: card-in 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .animate-slide-up-fade {
          animation: slide-up-fade 1s ease-out 0.4s both;
        }
        
        .animate-expand-pulse {
          animation: expand-pulse 2.5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
        
        .animate-bounce-smooth {
          animation: bounce-smooth 1.5s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.8s both;
        }
        
        .animate-logo-fade-in {
          animation: logo-fade-in 1.2s ease-out 1s both;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}