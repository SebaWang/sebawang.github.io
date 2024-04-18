import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import SideNav from "../../Components/Component/SideNav";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";
import DesignSection from "./DesignSection";
import DesignProcessSection from "./DesignProcessSection"
import EvaluationSection from "./EvaluationSection";

export default function ProjectFinancePage(): ReactElement {

    const sections = {
        "Overview": "overview",
        "Background & Problem": "background",
        "Design Deliver": "design_deliver",
        "Design & Challenges": "design_challenges",
        "Evaluation": "evaluation"
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
            <DesignProcessSection />
            <EvaluationSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  