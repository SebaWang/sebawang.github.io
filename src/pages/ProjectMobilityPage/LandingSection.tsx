import { ReactElement } from "react";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        id="hero_cover"
        className="w-full relative overflow-hidden h-[60svh] md:h-[100vh] bg-[#1E1E1E]"
      >
        <div className="absolute inset-8 md:inset-16 border-2 border-dashed border-[#3A3A3A] hidden md:block"></div>
        <p className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-[12px] tracking-[3px] text-[#6A6A6A] hidden md:block">
          COVER PHOTO TO BE ADDED
        </p>
        <div className="container mx-auto flex-col justify-center h-full flex justify-center flex-col hidden md:flex relative">
          <p className="text-[70px] font-bold text-white">
            Future Strategy and Service of Mobility
          </p>
          <p className="text-[26px] font-semibold text-white">
            Reframing the Metropolitan Mobility Service
            <br /> Strategy in a Post-AI Era
          </p>
        </div>
      </div>
      <div className="bg-[#1E1E1E] text-center px-4 block md:hidden py-24">
        <div>
          <h1 className="text-white text-[45px] font-bold">
            Future Strategy and Service of Mobility
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Reframing the Metropolitan Mobility Service Strategy in a Post-AI
            Era
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Foresight | Scenario Planning | Service Design
        </p>
      </div>
    </>
  );
}
