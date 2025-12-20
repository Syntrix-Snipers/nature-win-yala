"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./components/HeroSection";
import WhereWildness from "./components/WhereWildness";
import GoldenEvening from "./components/GoldenEvening";
import Destinations from "./components/Destinations";
import HeartOfYala from "./components/HeartOfYala";
import CTA from "./components/CTA";


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
        <Destinations />
        <HeartOfYala />
        <CTA />
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
