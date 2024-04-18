import Header from "../../Components/Header";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection"
import SocialSection from "./SocialSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import { ReactElement } from "react";

export default function LandingPage(): ReactElement{
    return (
        <>
            <Header />
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <SocialSection />
            <BlogSection />
            <ContactSection />
        </>
    );
  }
  