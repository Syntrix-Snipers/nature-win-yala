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
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl w-72 cursor-pointer transition-shadow duration-300 hover:shadow-lg active:shadow-lg focus:shadow-lg focus:outline-none">
      <img
        src={icons[icon]}
        alt={title}
        className="w-24 h-24 mb-2"
      />
      <h3 className="text-lg text-[#124734] font-semibold font-serif text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#124734] font-serif text-center">
        {description}
      </p>
    </div>
  );
};

export default HomeOfferCard;
