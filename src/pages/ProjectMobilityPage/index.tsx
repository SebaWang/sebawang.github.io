import Header from "../../Components/HeaderWhite";
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import AtAGlanceSection from "./AtAGlanceSection";
import ChallengeSection from "./ChallengeSection";
import WhatIDidSection from "./WhatIDidSection";
import ScenariosSection from "./ScenariosSection";
import ImplicationsSection from "./ImplicationsSection";
import ReflectionSection from "./ReflectionSection";
import SideNav from "../../Components/Component/SideNav";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

// Follows the ProjectFinancePage layout (hero, detail bar, overview,
// bracketed content sections, warm reflection), with PhotoSlot boxes
// reserving space for photos still to be chosen.
export default function ProjectMobilityPage(): ReactElement {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const sections = {
    "At A Glance": "at_a_glance",
    "Strategic Challenge": "strategic_challenge",
    "What I Did": "what_i_did",
    "Future Scenarios": "future_scenarios",
    "Strategic Impacts": "strategic_implications",
    Reflection: "reflection",
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
        <ScenariosSection />
        <ImplicationsSection />
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
