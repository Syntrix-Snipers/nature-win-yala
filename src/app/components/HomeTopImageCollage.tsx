import React from "react";

interface HomeTopImageCollageProps {
  images?: string[];
}

const HomeTopImageCollage: React.FC<HomeTopImageCollageProps> = ({
  images = [
    "/assets/images/SunsetImg.png",
    "/assets/images/villaImg.png",
    "/assets/images/ElephantImg.png",
    "/assets/images/FireCampImg.png",
  ],
}) => {
  return (
    <div
      style={{
        backgroundColor: "#0a2a1a",
        width: "clamp(180px, 90vw, 500px)",
        aspectRatio: "500 / 730",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1.6fr 1fr",
        gap: "clamp(6px, 2vw, 18px)",
        padding: "clamp(6px, 2vw, 18px)",
        boxSizing: "border-box",
        borderRadius: "12px",
        maxWidth: "100vw",
      }}
    >
      {/* Bottom Left – TALL */}
      <div style={{ gridRow: "2 / 4" }}>
        <img src={images[2]} alt="2" style={imgStyle} />
      </div>

      {/* Bottom Right – SMALL */}
      <div>
        <img src={images[0]} alt="3" style={imgStyle} />
      </div>

      {/* Top Left – SMALL */}
      <div>
        <img src={images[3]} alt="0" style={imgStyle} />
      </div>

      {/* Top Right – TALL */}
      <div style={{ gridRow: "1 / 3" }}>
        <img src={images[1]} alt="1" style={imgStyle} />
      </div>
    </div>
  );
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};

export default HomeTopImageCollage;
