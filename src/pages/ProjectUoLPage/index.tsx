import Header from "../../Components/HeaderWhite";
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import AtAGlanceSection from "./AtAGlanceSection";
import ChallengeSection from "./ChallengeSection";
import WhatIDidSection from "./WhatIDidSection";
import ResultsEvaluationSection from "./ResultsEvaluationSection";
import WhatILearntSection from "./WhatILearntSection";
import SideNav from "../../Components/Component/SideNav";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

// Same format as the Oxford mobility page (glass info band on the cover,
// numbered chapters, PhotoSlot boxes for photos still to be chosen); the
// copy is still to be written.
export default function ProjectUoLPage(): ReactElement {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const sections = {
    "At A Glance": "at_a_glance",
    Challenge: "challenge",
    "What I Did": "what_i_did",
    "Results & Impact": "results_evaluation",
    "What I Learnt": "what_i_learnt",
  };
  return (
    // Body text (.text-content) is 1px larger than the site default (16px),
    // as on the mobility page
    <div className="[&_.text-content]:text-[17px] [&_.text-content]:leading-[29.5px]">
      <SideNav sections={sections} />
      <Header />
      <LandingSection />
      <div id="content_section">
        <AtAGlanceSection />
        <ChallengeSection />
        <WhatIDidSection />
        <ResultsEvaluationSection />
        <WhatILearntSection />
      </div>
      <div className="bg-[#202020] h-[60px] hidden md:block">
        <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">
          Copyright © 2026 Sebastian Wang
        </div>
      </div>
    </div>
  );
}
