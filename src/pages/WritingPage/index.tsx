import { ReactElement } from "react";
import Header from "../../Components/Header";
import ContactSection from "../LandingPage/ContactSection";
import ArticleCard from "./ArticleCard";
import { articles } from "./articles";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

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
          Practice and writing about design in my life.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-20 pb-32">
          {articles.map((article) => (
            <div key={article.id} className="h-full">
              <ArticleCard
                id={article.id}
                imgURL={article.imgURL}
                title={article.title}
                excerpt={article.excerpt}
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
