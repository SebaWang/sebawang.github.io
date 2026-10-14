import React from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  imgURL: string;
  imgPosition?: string;
  imgFit?: "cover" | "contain";
  title: string;
  excerpt: string;
  date?: string;
  tags?: string[];
}

// Horizontal row: title/date/tags on the left, a cover thumbnail filling
// the full height of the row on the right (object-cover crops to fit
// without stretching). On desktop every row has the same fixed height, set
// by the tallest text block (a two-line title), so the list reads evenly.
const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imgURL,
  imgPosition,
  imgFit = "cover",
  title,
  excerpt,
  date,
  tags,
}) => {
  return (
    <Link to={`/articles/${id}`} className="block w-full">
      <div className="w-full md:h-[185px] flex items-stretch justify-between bg-white rounded-md shadow overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-xl duration-300">
        <div className="text-left flex-1 min-w-0 px-6 py-5 md:px-8 md:py-6 flex flex-col justify-center">
          {date && (
            <p className="text-[#DD663C] text-[13px] font-light mb-1">
              {date}
            </p>
          )}
          <p className="font-bold text-[18px] md:text-[22px] leading-snug">
            {title}
          </p>
          <p className="font-light text-[15px] md:text-[17px] text-[#6F6F6F] mt-1 hidden md:block">
            {excerpt}
          </p>
          {tags && tags.length > 0 && (
            <p className="text-[12px] font-light text-[#DD663C] mt-2">
              {tags.join(" · ")}
            </p>
          )}
        </div>
        <img
          src={imgURL}
          alt={title}
          className={`h-auto md:h-full shrink-0 ${
            imgFit === "contain"
              ? // Diagrams: same slot width as the photos (so the divider
                // line lines up with their edge), shown whole, minimal padding
                "w-[120px] md:w-[240px] object-contain bg-white px-2 border-l border-[#E0E0E0]"
              : "w-[120px] md:w-[240px] object-cover"
          }`}
          style={imgPosition ? { objectPosition: imgPosition } : undefined}
        />
      </div>
    </Link>
  );
};

export default ArticleCard;
