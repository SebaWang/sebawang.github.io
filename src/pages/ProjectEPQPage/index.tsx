import Header from "../../Components/HeaderWhite";
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import SideNav from "../../Components/Component/SideNav";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";
import DesignSection from "./DesignSection";
import DesignProcessSection from "./DesignProcessSection";
import EvaluationSection from "./EvaluationSection";
import ReflectionSection from "./ReflectionSection";

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function ProjectFinancePage(): ReactElement {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const sections = {
    "Background & Problem": "background",
    "Design Deliver": "design_deliver",
    "Process & Challenges": "design_challenges",
    "Evaluation": "evaluation",
    "Reflection": "reflection",
  };
  return (
    <>
      <SideNav sections={sections} />
      <Header />
      <LandingSection />
      <DetailSection />
      <OverviewSection />
      <div id="content_section">
        <BackgroundSection />
        <DesignSection />
        <DesignProcessSection />
        <EvaluationSection />
        <ReflectionSection />
      </div>
      <div className='bg-[#202020] h-[60px]'>
                <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">Copyright © 2024 Sebastian Wang</div>
            </div>
    </>
  );
}
