import Header from "../../Components/Header";
import { ReactElement } from "react";
import ContactSection from "../LandingPage/ContactSection";
import PreviewSection from "./PreviewSection";

export default function ProjectPage(): ReactElement {
    return (
        <>
            <Header />
            <PreviewSection />
            <ContactSection />
            <div className='bg-[#202020] h-[60px]'>
                <div className="flex justify-center text-[12px] mx-auto h-[60px] items-center text-white font-light tracking-[2px] inter">Copyright © 2024 Sebastian Wang</div>
            </div>
        </>
    );
  }
  