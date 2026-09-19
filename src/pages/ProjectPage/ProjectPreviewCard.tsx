import React from "react";
import { ReactComponent as Bubble } from "../../assets/img/img_deco_bubble.svg";

interface ProjectCardProps {
  imgURL: string;
  title: string;
  content: string;
  highlights?: string[];
}

// Original card proportions restored: full-bleed image, dotted Bubble
// decoration in the white footer. Title sits on the image itself, on a
// permanent shadow scrim; the question sits in the footer. When
// `highlights` is provided, hovering the card reveals them over the
// whole card — image and white footer both blurred behind a dark
// overlay — alongside the card's existing hover lift and shadow.
const ProjectPreviewCard: React.FC<ProjectCardProps> = ({
  imgURL,
  title,
  content,
  highlights,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col cursor-pointer card group bg-white rounded-md shadow hover:scale-[1.05] hover:shadow-2xl duration-300">
      <div className="max-h-80 overflow-hidden relative rounded-t-md shrink-0">
        <img
          className="w-full object-cover aspect-[396/297]"
          src={imgURL}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#292929]/90 via-[#292929]/10 to-transparent pt-36 pb-4 px-4">
          <p
            className="text-white text-center font-bold text-[20px] leading-snug"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            {title}
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-4 relative overflow-hidden">
        <Bubble className="absolute bottom-2 left-1 opacity-60" />
        <p className="font-light text-[15px] leading-[22px] text-left z-10">
          {content}
        </p>
      </div>
      {highlights && highlights.length > 0 && (
        <div className="absolute inset-0 rounded-md overflow-hidden bg-black/55 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center px-6 z-20">
          <ul className="text-white font-light text-[19px] leading-[28px] list-disc pl-4 space-y-2 text-left">
            {highlights.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectPreviewCard;
