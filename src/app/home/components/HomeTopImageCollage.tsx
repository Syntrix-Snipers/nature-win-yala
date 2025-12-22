import React from "react";

interface HomeTopImageCollageProps {
  images?: string[];
  className?: string;
}

const HomeTopImageCollage: React.FC<HomeTopImageCollageProps> = ({
  images = [
    "/assets/images/SunsetImg.png",
    "/assets/images/villaImg.png",
    "/assets/images/ElephantImg.png",
    "/assets/images/FireCampImg.png",
  ],
  className,
}) => {
  return (
    <div
      className={[
        // Mobile: no background/radius, natural height (taller)
        "w-full max-w-full bg-transparent rounded-none min-h-[540px] md:min-h-[730px]",
        // Desktop: keep existing look, allow filling parent height (wider)
        "md:bg-[#0a2a1a] md:rounded-none md:h-full md:w-[clamp(220px,90vw,560px)] md:max-w-[560px]",
        // Layout
        "grid grid-cols-2 grid-rows-[3fr_1fr_3fr]",
        // Spacing
        "gap-2 p-0 md:gap-[clamp(6px,2vw,18px)] md:px-[clamp(6px,2vw,18px)] md:py-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Bottom Left – TALL */}
      <div className="row-start-2 row-end-4 overflow-hidden md:rounded-b-none rounded-t-[15px] rounded-b-[15px] ">
        <img src={images[2]} alt="2" className="h-full w-full object-cover" />
      </div>

      {/* Bottom Right – SMALL */}
      <div className="overflow-hidden md:rounded-b-none rounded-t-[15px] rounded-b-[15px]">
        <img src={images[0]} alt="3" className="h-full w-full object-cover" />
      </div>

      {/* Top Left – SMALL */}
      <div className="overflow-hidden rounded-[15px] md:rounded-none">
        <img src={images[3]} alt="0" className="h-full w-full object-cover" />
      </div>

      {/* Top Right – TALL */}
      <div className="row-start-1 row-end-3 overflow-hidden rounded-[15px] md:rounded-[15px]">
        <img src={images[1]} alt="1" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default HomeTopImageCollage;
