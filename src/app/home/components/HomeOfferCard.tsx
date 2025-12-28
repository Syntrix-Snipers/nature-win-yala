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
    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl bg-white p-4 w-72 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:z-10 focus:outline-none">
      <img
        src={icons[icon]}
        alt={title}
        /* Added filter to ensure icon appears dark green if the source image is gray */
        className="w-24 h-24 mb-6 object-contain"
      />
      <h3 className="text-lg text-[#124734] font-semibold font-serif text-center mb-2">
        {title}
      </h3>
      <p className="text-[14px] text-[#124734] font-serif text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HomeOfferCard;