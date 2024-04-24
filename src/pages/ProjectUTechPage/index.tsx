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

export default function ProjectFinancePage(): ReactElement {
  const sections = {
    "Background & Problem": "background",
    "Design Deliver": "design_deliver",
    "Design & Challenges": "design_challenges",
    "Evaluation": "evaluation",
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
      </div>
      <div className='bg-[#202020] h-[60px]'>
                <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">Copyright © 2024 Sebastian Wang</div>
            </div>
    </>
  );
}
