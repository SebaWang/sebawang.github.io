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

export default function ProjectFinancePage(): ReactElement {
  const sections = {
    "Background & Problem": "background",
    "Design Deliver": "design_deliver",
    "Design & Challenges": "design_challenges",
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
      <div className="bg-[#202020] h-[60px]"></div>
    </>
  );
}
