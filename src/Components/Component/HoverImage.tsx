import React, { useState } from "react";

interface HoverImageProps {
  imageUrl: string;
  width: string;
  height: string;
  position: 'left' | 'right'; 
  distance: string;
  top: string;
  hoverLeft: string;
  hoverTop: string;
  description?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  imageUrl,
  width,
  height,
  position,
  distance,
  top,
  hoverLeft,
  hoverTop,
  description="None",
}) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
    console.log(hoverPosition);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="bg-cover absolute rounded-md cursor-pointer bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: width,
          height: height,
          [position]: distance,
          top: top,
          backgroundColor: "white"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      {isHovered && (
        <div
          className="absolute p-4 backdrop-blur-lg rounded-md shadow-lg z-30 max-w-[450px] bg-white bg-opacity-30"
          style={{
            [position]: hoverLeft,
            top: hoverTop,
          }}
        >
          <img src={imageUrl} className="w-full bg-white" />
          <p className="text-[14px] pt-2 text-[#2e2e2e]">
           {description}
          </p>
        </div>
      )}
    </>
  );
};

export default HoverImage;
