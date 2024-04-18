import Header from "../../Components/Header";
import { ReactElement } from "react";
import AvatarSection from "./AvatarSection";
import SkillSection from "./SkillSection";
import AboutSection from "./AboutSection";
import SocialSection from "../LandingPage/SocialSection";

export default function AboutPage(): ReactElement {
    return (
        <>
            <Header />
            <AvatarSection />
            <SkillSection />
            <AboutSection />
            <SocialSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  