import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/img_project_cover_placeholder_wide.svg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        id="hero_cover"
        className="w-full relative overflow-hidden h-[60svh] md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex-col justify-center h-full flex justify-center flex-col hidden md:flex">
          <p className="text-[70px] font-bold text-white">
            Design with GDS Standards
          </p>
          <p className="text-[26px] font-semibold text-white">
            Subtitle to be added
          </p>
        </div>
      </div>
      <div className="bg-[#1E1E1E] text-center px-4 block md:hidden py-24">
        <div>
          <h1 className="text-white text-[45px] font-bold">
            Design with GDS Standards
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
