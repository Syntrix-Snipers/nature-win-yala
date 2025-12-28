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
    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl bg-white p-4 w-72 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:z-10 focus:outline-none">
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
