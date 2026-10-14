import { ReactElement, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../Components/Header";
import ContactSection from "../LandingPage/ContactSection";
import { articles, ArticleBlock } from "./articles";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

function Block({ block }: { block: ArticleBlock }): ReactElement | null {
  switch (block.type) {
    case "heading":
      return (
        <p className="font-bold text-[24px] mt-10 mb-2">{block.text}</p>
      );
    case "quote":
      return (
        <blockquote className="border-l-[3px] border-[#DD663C] pl-4 italic text-[#333333] my-6">
          {block.items ? (
            // A quote holding several lines, shown as a bulleted list
            <ul className="list-disc pl-5 space-y-2">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            block.text
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul className="list-disc pl-5 space-y-2 my-4 leading-[35px]">
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-8">
          <div
            className={`grid gap-3 ${
              (block.images?.length ?? 1) > 1 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {block.images?.map((src) => (
              <img
                key={src}
                src={src}
                alt={block.caption ?? ""}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          {block.caption && (
            <figcaption className="text-[15px] text-[#929292] text-center mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "paragraph":
    default:
      return <p className="mt-4 leading-[35px]">{block.text}</p>;
  }
}

export default function ArticlePage(): ReactElement {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  if (!article) {
    return (
      <div className="bg-[#FBFBFB] min-h-screen">
        <Header />
        <div className="container mx-auto pt-48 pb-32 text-center">
          <p className="text-content">Article not found.</p>
          <Link to="/articles" className="text-[#DD663C] underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBFBFB]">
      <Header />
      <div className="container mx-auto pt-32 md:pt-48 pb-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] text-[#DD663C] border border-[#DD663C] rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[32px] md:text-[40px] font-bold text-[#333333] leading-tight">
          {article.title}
        </p>
        <p className="text-[20px] md:text-[26px] font-light text-[#333333] mt-3">
          {article.subtitle}
        </p>
        <p className="text-[14px] text-[#333333] mt-4">
          {article.readTime}
        </p>
        <img
          src={article.imgURL}
          alt={article.title}
          className="w-full h-[260px] md:h-[440px] object-cover rounded-md mt-8"
        />
        <div className="text-[20px] text-[#333333] font-light mt-4">
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {article.references && article.references.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[#E0E0E0]">
            <p className="font-bold text-[18px] text-[#333333] mb-3">References</p>
            <ul className="text-[15px] font-light text-[#333333] space-y-2">
              {article.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Source: link back to the original post on Medium */}
        <div className="mt-10 pt-6 border-t border-[#E0E0E0] flex items-center gap-2 text-[15px] font-light text-[#333333]">
          <FontAwesomeIcon icon={faMedium} className="text-[18px]" />
          <span>Originally published on Medium:</span>
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#DD663C] underline underline-offset-2 hover:text-[#E34F10] break-all"
          >
            {article.title}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link to="/articles">
            <button className="border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Articles
            </button>
          </Link>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
