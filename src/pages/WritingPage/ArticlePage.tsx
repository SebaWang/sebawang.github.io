import { ReactElement, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../Components/Header";
import ContactSection from "../LandingPage/ContactSection";
import { articles, ArticleBlock } from "./articles";
import ReactGA from "react-ga";

function Block({ block }: { block: ArticleBlock }): ReactElement | null {
  switch (block.type) {
    case "heading":
      return (
        <p className="font-bold text-[22px] mt-10 mb-2">{block.text}</p>
      );
    case "quote":
      return (
        <blockquote className="border-l-[3px] border-[#DD663C] pl-4 italic text-[#6F6F6F] my-6">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="list-disc pl-5 space-y-2 my-4">
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return <p className="mt-4 leading-[28px]">{block.text}</p>;
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
      <div className="bg-[#D9D9D9] min-h-screen">
        <Header />
        <div className="container mx-auto pt-48 pb-32 text-center">
          <p className="text-content">Article not found.</p>
          <Link to="/writing" className="text-[#DD663C] underline">
            Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#D9D9D9]">
      <Header />
      <div className="container mx-auto pt-32 md:pt-48 md:w-[760px] pb-16">
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
        <p className="text-[32px] md:text-[40px] font-bold text-[#EA5514] leading-tight">
          {article.title}
        </p>
        <p className="text-[18px] md:text-[20px] font-light text-[#6F6F6F] mt-2">
          {article.subtitle}
        </p>
        <p className="text-[14px] text-[#929292] mt-4">
          {article.date} · {article.readTime}
        </p>
        <img
          src={article.imgURL}
          alt={article.title}
          className="w-full aspect-[396/297] object-cover rounded-md mt-8"
        />
        <div className="text-content font-light mt-4">
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {article.references && article.references.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[#CFCFCF]">
            <p className="font-bold text-[18px] mb-3">References</p>
            <ul className="text-[13px] font-light text-[#6F6F6F] space-y-2">
              {article.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/writing">
            <button className="border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Writing
            </button>
          </Link>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
