import React from "react";
import { icons } from ".././../../../public/assets/icons/icon";

interface HomeOfferCardProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

const HomeOfferCard: React.FC<HomeOfferCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl w-72 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-2xl hover:bg-[#f3f8f5] active:scale-[0.98] focus:shadow-2xl focus:outline-none group"
      tabIndex={0}
      aria-label={title}
    >
      <img
        src={icons[icon]}
        alt={title}
        className="w-24 h-24 mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
      />
      <h3 className="text-lg font-bold font-serif text-center mb-2 text-[#124734] group-hover:text-[#1a5c3b]">
        {title}
      </h3>
      <p className="text-base text-[#3a3a3a] font-serif text-center group-hover:text-[#124734]">
        {description}
      </p>
    </div>
  );
};

export default HomeOfferCard;
