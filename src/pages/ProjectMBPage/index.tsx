import Header from "../../Components/HeaderWhite"
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
        "Overview": "overview",
        "Background & Problem": "background",
        "Design Deliver": "design_deliver",
        "Process & Challenges": "process_challenges",
        "Evaluation": "evaluation",
        "Reflection": "reflection"
      };
    return (
        <>
            <SideNav sections={sections} />
            <Header />
            <LandingSection />
            <DetailSection />
            <OverviewSection />
            <BackgroundSection />
            <DesignSection />
            <ChallengeSection />
            <EvaluationSection />
            <ReflectionSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  