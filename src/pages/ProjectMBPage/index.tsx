import Header from "../../Components/HeaderWhite";
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";
import DesignSection from "./DesignSection";
import ChallengeSection from "./ChallengeSection";
import EvaluationSection from "../ProjectMBPage/EvaluationSection";
import ReflectionSection from "./ReflectionSection";
import SideNav from "../../Components/Component/SideNav";

export default function ProjectMBPage(): ReactElement {
  const sections = {
    "Background & Problem": "background",
    "Design Deliver": "design_deliver",
    "Process & Challenges": "process_challenges",
    Evaluation: "evaluation",
    Reflection: "reflection",
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
        <ChallengeSection />
        <EvaluationSection />
        <ReflectionSection />
      </div>

      <div className='bg-[#202020] h-[60px]'>
                <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">Copyright © 2024 Sebastian Wang</div>
            </div>
    </>
  );
}
