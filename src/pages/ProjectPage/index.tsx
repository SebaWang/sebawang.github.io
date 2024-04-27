import Header from "../../Components/Header";
import { ReactElement } from "react";
import ContactSection from "../LandingPage/ContactSection";
import PreviewSection from "./PreviewSection";

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function ProjectPage(): ReactElement {
    useEffect(() => {
        // 傳送頁面檢視
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
    return (
        <>
            <Header />
            <PreviewSection />
            <ContactSection />
        </>
    );
  }
  