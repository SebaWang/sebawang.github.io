import React from "react";
import { ReactComponent as Bubble } from "../../assets/img/img_deco_bubble.svg";

interface ProjectCardProps {
  imgURL: string;
  title: string;
  content: string;
}

// Original card proportions restored: full-bleed image, dotted Bubble
// decoration in the white footer. Title now sits on the image itself,
// on a permanent shadow scrim (not a hover reveal); the question moved
// into the footer at a smaller size, in place of subTitle/concept.
const ProjectPreviewCard: React.FC<ProjectCardProps> = ({
  imgURL,
  title,
  content,
}) => {
  return (
    <div className="w-full h-full flex flex-col cursor-pointer card bg-white rounded-md shadow hover:scale-[1.05] hover:shadow-2xl duration-300">
      <div className="max-h-80 overflow-hidden relative rounded-t-md shrink-0">
        <img
          className="w-full object-cover aspect-[396/297]"
          src={imgURL}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#292929]/85 via-[#292929]/10 to-transparent pt-12 pb-4 px-4">
          <p
            className="text-white text-center font-bold text-[18px] leading-snug"
            style={{ textShadow: "0 2px 5px rgba(0,0,0,0.7)" }}
          >
            {title}
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start px-6 py-4 relative overflow-hidden">
        <Bubble className="absolute bottom-2 left-1 opacity-60" />
        <p className="font-light text-[13px] leading-[20px] text-left z-10">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProjectPreviewCard;
