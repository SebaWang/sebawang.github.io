import React from "react";

interface ProjectCardProps {
  imgURL: string;
  title: string;
  content: string;
}

// Title above the image, question always visible below it — no hover reveal.
const ProjectPreviewCard: React.FC<ProjectCardProps> = ({
  imgURL,
  title,
  content,
}) => {
  return (
    <div className="w-full h-full flex flex-col cursor-pointer bg-white rounded-md shadow overflow-hidden hover:scale-[1.05] hover:shadow-2xl duration-300">
      <div className="px-6 py-5 text-center shrink-0">
        <p className="font-bold text-[20px] leading-snug">{title}</p>
      </div>
      <img
        className="w-full object-cover aspect-[396/297] shrink-0"
        src={imgURL}
        alt={title}
      />
      <div className="flex-1 px-6 py-5 bg-[#F4F4F4]">
        <p className="text-left font-light text-content">{content}</p>
      </div>
    </div>
  );
};

export default ProjectPreviewCard;
