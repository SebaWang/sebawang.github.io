import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/img_project_mob_bg_cover.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden  h-[60svh]   md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
        id="overview"
      >
        <div className="w-full  bottom-0 text-center pb-[5%] hidden md:block absolute">
          <p className="text-[64px] font-black text-white">
            Ministry of Biodiversity
          </p>
          <p className="text-white text-[26px]">
            Speculative Design for Future Agriculture Policy with GDS
          </p>
        </div>
      </div>
      <div className="h-[40svh] bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold leading-[45px] pt-[20%]">
            Ministry of Biodiversity
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Speculative Design for Agriculture with GDS
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | Future Design<br /> Policy Communications
        </p>
      </div>
    </>
  );
}
