import React from "react";

interface TestimonialCardProps {
  description: string;
  profileImage: string;
  name: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  profileImage,
  name,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md flex flex-col items-center p-6 mx-auto ${className}`}
      style={{
        width: "100%",
        maxWidth: 350,
        minHeight: 330,
      }}
    >
      <div className="text-7xl text-[#124734] mb-[-20px] font-serif">“</div>
      <p className="text-center text-[#124734] mb-4 flex-1">{description}</p>
      <hr className="w-42 border-t border-[#124734] mb-4" />
      <img
        src={profileImage}
        alt={name}
        className="w-18 h-18 rounded-full object-cover mb-2 border-2 border-gray-100"
      />
      <div className="text-sm text-gray-400">{name}</div>
    </div>
  );
};

export default TestimonialCard;
