"use client";

import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "btn_1" | "btn_2";
  children: React.ReactNode;
}



const btn1Styles =
  // White bg, green text, invert on hover, smooth transitions, focus ring, border and shadow on hover
  "flex items-center justify-center gap-2 bg-white text-[#124734] px-8 py-4 rounded-md font-bold w-full md:w-fit shadow-sm transition-all duration-150 hover:bg-[#124734] hover:text-white hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-[#124734] border border-transparent hover:border-white hover:shadow-lg";



const btn2Styles =
  // Green bg, white text, invert on hover, smooth transitions, focus ring, border and shadow on hover
  "flex items-center justify-center gap-2 bg-[#124734] text-white px-8 py-4 rounded-md font-bold w-full md:w-fit shadow-sm transition-all duration-150 hover:bg-white hover:text-[#124734] hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-[#124734] border border-transparent hover:border-[#124734] hover:shadow-lg";

export const BtnComponent: React.FC<BtnProps> = ({
  variant = "btn_1",
  children,
  className = "",
  ...props
}) => {
  const style = variant === "btn_1" ? btn1Styles : btn2Styles;
  return (
    <button className={`${style} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default BtnComponent;