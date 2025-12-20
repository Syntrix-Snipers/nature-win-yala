"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./components/HeroSection";
import WhereWildness from "./components/WhereWildness";
import GoldenEvening from "./components/GoldenEvening";


const Explore: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div>
        <HeroSection />
        <WhereWildness />
        <GoldenEvening />
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
