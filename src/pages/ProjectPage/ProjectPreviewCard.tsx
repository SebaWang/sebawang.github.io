import React, { useState } from "react";
import {ReactComponent as Bubble} from "../../assets/img/img_deco_bubble.svg"

interface ProjectCardProps {
  imgURL: string;
  title: string;
  subTitle: string;
  concept: string;
  content: string;
}

const ProjectPreviewCard: React.FC<ProjectCardProps> = ({
  imgURL,
  title,
  subTitle,
  concept,
  content,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="w-full cursor-pointer card bg-white rounded-md shadow hover:scale-[1.05] hover:shadow-2xl duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-h-80 overflow-hidden relative rounded-t-md">
          <img className="w-full object-cover aspect-[396/297]" src={imgURL} alt="Project" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 mask duration-300">
            <p className="text-white text-center px-16 font-light text-content">{content}</p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center px-6 py-4 text-center transform transition-all duration-50 relative overflow-hidden`}
        >
          <Bubble className="absolute bottom-0 left-0" />
          <div className="font-bold text-md mb-1 text-[20px] z-10">{title}</div>
          <p className="font-light text-[14px] mb-1 z-10">{subTitle}</p>
          <p className="font-light text-[#6F6F6F] text-[12px] z-10">{concept}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPreviewCard;
