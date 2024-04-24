import Header from "../../Components/Header";
import { ReactElement } from "react";
import AvatarSection from "./AvatarSection";
import SkillSection from "./SkillSection";
import AboutSection from "./AboutSection";
import SocialSection from "../LandingPage/SocialSection";
import Head from "next/head";

export default function AboutPage(): ReactElement {
  return (
    <>
      <Header />
      <AvatarSection />
      <SkillSection />
      <AboutSection />
      <SocialSection />
      <div className="bg-[#202020] h-[60px]">
        <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">
          Copyright © 2024 Sebastian Wang
        </div>
      </div>
    </>
  );
}
