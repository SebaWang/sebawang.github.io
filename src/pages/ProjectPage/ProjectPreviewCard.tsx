import React, { useState } from "react";

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
        className="w-full cursor-pointer card bg-white rounded-md shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-h-80 overflow-hidden relative rounded-t-md">
          <img className="w-full object-cover aspect-[396/297]" src={imgURL} alt="Project" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 mask duration-300">
            <p className="text-white text-center px-16 font-light text-[16px]">{content}</p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center px-6 py-4 text-center transform transition-all duration-500`}
        >
          <div className="font-bold text-md mb-1 text-[20px]">{title}</div>
          <p className="font-light text-[14px] mb-1">{subTitle}</p>
          <p className="font-light text-[#6F6F6F] text-[12px]">{concept}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPreviewCard;
