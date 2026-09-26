import { ReactElement } from "react";
import Header from "../../Components/Header";
import ContactSection from "../LandingPage/ContactSection";
import ArticleCard from "./ArticleCard";
import img_blog_01 from "../../assets/img/blog01.png";
import img_blog_02 from "../../assets/img/blog02.png";
import img_blog_03 from "../../assets/img/blog03.png";
import img_blog_04 from "../../assets/img/blog04.png";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

const articles = [
  {
    id: "scenario-planning-ai",
    imgURL: img_blog_04,
    title: "The Creative Work in Scenario Planning That Can't Be Outsourced",
    excerpt:
      "Don't rush to ask AI for ideation. Scenario planning has two modes of thinking, and only one of them is safe to hand over.",
    url: "https://medium.com/@SBSTN_WANG/dont-rush-to-ask-ai-for-foresight-a1bbd720fd79",
    date: "Jul 2026",
  },
  {
    id: "financial-vulnerability",
    imgURL: img_blog_02,
    title: "What Financial Vulnerability Is",
    excerpt: "Design for Financial Vulnerability #1: Background Research.",
    url: "https://medium.com/@SBSTN_WANG/what-financial-vulnerability-is-bd48d90b6ad6",
  },
  {
    id: "inclusive-design",
    imgURL: img_blog_01,
    title: "Inclusive Design: De-label! Blur the Boundary!",
    excerpt: "How I implement inclusive design.",
    url: "https://medium.com/design-bootcamp/inclusive-design-de-label-blur-the-boundary-cc2b06253644",
  },
  {
    id: "research-through-design",
    imgURL: img_blog_03,
    title: "Research through Design: The Spirit of Iteration",
    excerpt: "The relationship between design and research.",
    url: "https://medium.com/design-bootcamp/research-through-design-the-spirit-of-iteration-7af98ee546b7",
  },
];

export default function WritingPage(): ReactElement {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="bg-[#D9D9D9]">
      <Header />
      <div className="container mx-auto pt-48 text-center">
        <p className="tracking-[6px] text-[#EA5514] text-[24px] font-semibold">
          WRITING
        </p>
        <div className="w-[22px] border-b-[6px] border-[#EA5514] h-[12px] mx-auto mt-2">
          &nbsp;
        </div>
        <p className="text-content font-light text-[#6F6F6F] max-w-[600px] mx-auto mt-6">
          Practice and writing about design in my life, published on Medium.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-20 pb-32">
          {articles.map((article) => (
            <div key={article.id} className="h-full">
              <ArticleCard
                imgURL={article.imgURL}
                title={article.title}
                excerpt={article.excerpt}
                url={article.url}
                date={article.date}
              />
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
