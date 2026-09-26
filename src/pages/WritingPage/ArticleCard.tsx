import React from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  imgURL: string;
  title: string;
  excerpt: string;
  date?: string;
  tags?: string[];
}

// Horizontal row: title/date/tags on the left, a cover thumbnail filling
// the full height of the row on the right (object-cover crops to fit
// without stretching, so the image's own proportions are kept).
const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imgURL,
  title,
  excerpt,
  date,
  tags,
}) => {
  return (
    <Link to={`/writing/${id}`} className="block w-full">
      <div className="w-full flex items-stretch justify-between bg-white rounded-md shadow overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-xl duration-300">
        <div className="text-left flex-1 min-w-0 px-6 py-5 md:px-8 md:py-6 flex flex-col justify-center">
          {date && (
            <p className="text-[#DD663C] text-[13px] font-light mb-1">
              {date}
            </p>
          )}
          <p className="font-bold text-[18px] md:text-[22px] leading-snug">
            {title}
          </p>
          <p className="font-light text-[14px] md:text-[15px] text-[#6F6F6F] mt-1 hidden md:block">
            {excerpt}
          </p>
          {tags && tags.length > 0 && (
            <p className="text-[12px] font-light text-[#929292] mt-2">
              {tags.join(" · ")}
            </p>
          )}
        </div>
        <img
          src={imgURL}
          alt={title}
          className="w-[120px] md:w-[240px] h-auto object-cover shrink-0"
        />
      </div>
    </Link>
  );
};

export default ArticleCard;
