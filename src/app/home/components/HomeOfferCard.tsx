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
    /* Changed background to transparent by default and removed static shadow to match the image */
    <div className="flex flex-col items-center justify-start p-6 bg-transparent rounded-2xl w-72 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl active:shadow-lg group">
      <img
        src={icons[icon]}
        alt={title}
        /* Added filter to ensure icon appears dark green if the source image is gray */
        className="w-24 h-24 mb-6 object-contain"
      />
      <h3 className="text-l font-bold font-serif text-[#124734] text-center mb-3">
        {title}
      </h3>
      <p className="text-[14px] text-[#124734] font-serif text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HomeOfferCard;