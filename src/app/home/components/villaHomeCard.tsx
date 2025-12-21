import React from "react";
import Image from "next/image";

type Feature = {
  icon: string; // image path
  text: string;
};

type VillaHomeCardProps = {
  image: string;
  alt: string;
  title: string;
  price: string;
  bgColor?: string;
  textColor?: string;
  comingSoon?: boolean;
  features?: Feature[];
  actionButton?: React.ReactNode; // new prop for custom button
};

const VillaHomeCard: React.FC<VillaHomeCardProps> = ({
  image,
  alt,
  title,
  price,
  bgColor = "white",
  textColor = "#124734",
  comingSoon = false,
  features = [],
  actionButton,
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div
        className={`group transition-transform ${
          comingSoon
            ? "blur-[2px] pointer-events-none select-none"
            : "cursor-pointer hover:scale-[1.02]"
        } rounded-2xl overflow-hidden`}
      >
        {/* Image Section */}
        <div className="relative h-[300px] w-full rounded-t-md overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className={`object-cover ${
              comingSoon ? "opacity-60 grayscale-[50%]" : ""
            } rounded-t-md`}
          />
        </div>

        {/* Content Section */}
        <div
          className={`text-center p-6 ${
            comingSoon ? "bg-white border-t border-gray-100" : ""
          }`}
          style={{
            backgroundColor: !comingSoon ? bgColor : undefined,
          }}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: textColor }}
          >
            <div className="sm:text-left text-center font-serif whitespace-nowrap text-xl">
              {title}
            </div>
          </h3>

          {/* Features */}
          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center border border-gray-600 rounded-2xl px-2 py-1 bg-white h-9"
                  style={{ minHeight: "28px", height: "28px", width: "auto" }}
                >
                  <span
                    className="mr-2 flex-shrink-0 flex items-center justify-center"
                    style={{ width: 20, height: 20 }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      width={14}
                      height={14}
                    />
                  </span>
                  <span className="text-sm text-[#124734] whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Price & Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4">
            <p
              className="text-xl font-semibold text-[#124734] sm:text-left text-center"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {
                // Split price at "/night" and style "night"
                price.includes("/night") ? (
                  <>
                    {price.split("/night")[0]}
                    <span className="text-sm font-normal">/night</span>
                  </>
                ) : (
                  price
                )
              }
            </p>
            {actionButton && actionButton}
          </div>
        </div>
      </div>

      {/* Coming Soon Button (not blurred, centered) */}
      {comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto select-auto">
          <button
            className="bg-white text-[#124734] px-8 py-3 rounded-full font-bold shadow-xl border border-[#124734] text-lg"
            style={{ zIndex: 10, filter: "none" }}
            tabIndex={0}
          >
            Coming Soon
          </button>
        </div>
      )}
    </div>
  );
};

export default VillaHomeCard;
