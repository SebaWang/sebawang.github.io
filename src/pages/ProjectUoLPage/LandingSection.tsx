import { ReactElement } from "react";
import DetailSection from "./DetailSection";
import img_cover from "../../assets/img/img_project_cover_placeholder_wide.svg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        id="hero_cover"
        className="w-full relative overflow-hidden h-[60svh] md:h-[100vh] bg-[#1E1E1E] bg-cover bg-center"
        // Dark overlay keeps the white title legible over the bright
        // illustration; right-click disabled to discourage saving
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.05) 100%), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.5)), url(${img_cover})`,
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div
          className="container mx-auto flex-col justify-center h-full flex justify-center flex-col hidden md:flex relative md:pb-[280px]"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7), 0 4px 22px rgba(0,0,0,0.65)" }}
        >
          <p className="text-[70px] font-bold text-white">
            Design Evaluation Using GDS Service Standard
          </p>
          <p className="text-[26px] font-semibold text-white">
            Subtitle to be added
          </p>
        </div>
        <DetailSection />
      </div>
      <div className="bg-[#1E1E1E] text-center px-4 block md:hidden py-24">
        <div>
          <h1 className="text-white text-[45px] font-bold">
            Design Evaluation Using GDS Service Standard
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Subtitle to be added
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | Agile Delivery | GDS Assessment
        </p>
      </div>
    </>
  );
}
