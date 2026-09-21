import Header from "../../Components/HeaderWhite";
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import AtAGlanceSection from "./AtAGlanceSection";
import ChallengeSection from "./ChallengeSection";
import WhatIDidSection from "./WhatIDidSection";
import ResultsEvaluationSection from "./ResultsEvaluationSection";
import WhatILearntSection from "./WhatILearntSection";
import ReflectionSection from "./ReflectionSection";
import SideNav from "../../Components/Component/SideNav";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

// Leaner Nesta-style narrative architecture: At a glance, Challenge,
// What I did, Results & Evaluation, What I learnt — used for this page
// only, distinct from the fuller ProjectFinancePage architecture.
export default function ProjectUoLPage(): ReactElement {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const sections = {
    "At A Glance": "at_a_glance",
    Challenge: "challenge",
    "What I Did": "what_i_did",
    "Results & Evaluation": "results_evaluation",
    "What I Learnt": "what_i_learnt",
  };
  return (
    <>
      <SideNav sections={sections} />
      <Header />
      <LandingSection />
      <div id="content_section">
        <AtAGlanceSection />
        <ChallengeSection />
        <WhatIDidSection />
        <ResultsEvaluationSection />
        <WhatILearntSection />
        <ReflectionSection />
      </div>
      <div className="bg-[#202020] h-[60px] hidden md:block">
        <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">
          Copyright © 2026 Sebastian Wang
        </div>
      </div>
    </>
  );
}
