"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Explore: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="mt-50">
        <h1>Explore Page</h1>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
