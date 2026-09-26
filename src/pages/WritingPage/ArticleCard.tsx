import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Bubble } from "../../assets/img/img_deco_bubble.svg";

interface ArticleCardProps {
  id: string;
  imgURL: string;
  title: string;
  excerpt: string;
  date?: string;
}

// Same visual language as ProjectPreviewCard (title on a shadow-scrimmed
// image, dotted Bubble decoration in the white footer) but links to this
// site's own /writing/:id page, not out to Medium — reads and behaves like
// the rest of the site's internal case pages.
const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imgURL,
  title,
  excerpt,
  date,
}) => {
  return (
    <Link to={`/writing/${id}`} className="block h-full w-full">
      <div className="relative w-full h-full flex flex-col cursor-pointer bg-white rounded-md shadow hover:scale-[1.05] hover:shadow-2xl duration-300">
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
          {date && (
            <p className="text-[#DD663C] text-[14px] font-light text-left mb-3 z-10">
              {date}
            </p>
          )}
          <p className="font-light text-[17px] leading-[24px] text-left z-10">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
