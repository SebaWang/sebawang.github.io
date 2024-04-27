import Header from "../../Components/Header";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection"
import SocialSection from "./SocialSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import { ReactElement } from "react";

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function LandingPage(): ReactElement{
    useEffect(() => {
    // 傳送頁面檢視
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
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
  