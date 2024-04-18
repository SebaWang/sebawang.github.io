import React, { useState } from 'react';

interface ProjectCardProps {
  imgURL: string;
  title: string;
  subTitle: string;
  concept: string;
  type: string;
  content: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgURL, title, subTitle, concept, type, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className="w-full cursor-pointer card bg-white h-[390px] duration-300 hover:shadow-2xl hover:scale-[1.02]"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className="max-h-80 overflow-hidden relative rounded-t-xl">
        <img className="w-full object-cover" src={imgURL} alt="Project" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 mask duration-300">
          <p className="text-white text-center px-16 font-light">{content}</p>
        </div>
      </div>
      <div className={`flex flex-col justify-center px-6 py-4 text-center transform transition-all duration-500 ${isHovered ? '' : ''}`}>
        {isHovered ? (
          <div className="backface-hidden">
          <div className="font-bold text-md">{title}</div>
            <p className="text-[#EA5514] text-sm">{type}</p>
            <p className="text-gray-300 text-xs">&nbsp;</p>
          </div>
        ) : (
          <React.Fragment>
            <div className="font-bold text-md">{title}</div>
            <p className="text-gray-500 text-sm">{subTitle}</p>
            <p className="text-gray-300 text-xs">{concept}</p>
          </React.Fragment>
        )}
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
