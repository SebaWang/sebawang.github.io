import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";
import DesignSection from "./DesignSection";
import ResearchSection from "./ResearchSection";
import DesignProcessSection from "./DesignProcessSection";
import EvaluationSection from "./EvaluationSection";
import ReflectionSection from "./ReflectionSection";
import SideNav from "../../Components/Component/SideNav";

export default function ProjectFinancePage(): ReactElement {

    const sections = {
        "Overview": "overview",
        "Background & Problem": "background",
        "Design Deliver": "design_deliver",
        "Research & Challenges": "process_challenges",
        "Design & Challenges": "design_challenges",
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
            <ResearchSection />
            <DesignProcessSection />
            <EvaluationSection />
            <ReflectionSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  