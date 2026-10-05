import { ReactElement } from "react";
import DetailSection from "./DetailSection";
import img_bg_cover from "../../assets/img/img_project_mob_bg_cover.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        id="hero_cover"
        className="w-full relative overflow-hidden  h-[60svh]   md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        {/* Title sits just above the billboard (as a share of the cover
            height, so it tracks the image at any screen size), with a soft
            shadow for legibility over the trees */}
        <div
          className="w-full bottom-[69%] text-center hidden md:block absolute"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
        >
          <p className="text-[64px] font-black text-white">
            Ministry of Biodiversity
          </p>
          <p className="text-white text-[26px]">
            Speculative Design for Future Agriculture Policy with GDS
          </p>
        </div>
        <DetailSection />
      </div>
      <div className="py-24 bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold leading-[45px] ">
            Ministry of Biodiversity
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Speculative Design for Agriculture with GDS
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | Speculative Storytelling<br /> Policy Communications
        </p>
      </div>
    </>
  );
}
