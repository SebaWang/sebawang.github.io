import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_EPQ Learning Journey/cover.jpg";
import img_bg_mobile from "../../assets/img/Project_EPQ Learning Journey/outcome.jpg"

export default function LandingSection(): ReactElement {
  return (
    <div id="landing">
      <div
        className="w-full relative overflow-hidden  h-[60svh] md:h-[100vh] bg-cover bg-center hidden md:block "
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="hidden md:flex container mx-auto flex-col justify-center h-full flex text-center">
          <p className="text-[70px] font-bold text-white">
            EPQ Learning Journey
          </p>
          <p className="text-[26px] font-semibold text-white">
            Social Design for Non-traditional Education
          </p>
        </div>
      </div>
      <div className="block md:hidden  h-[60svh] w-full bg-cover bg-center"  style={{ backgroundImage: `url(${img_bg_mobile})` }}></div>
      <div className="h-[40svh] bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold pt-[20%] leading-[45px]">
            EPQ Learning Journey
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Social Design for Non-traditional Education
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | Social Design
          <br />
          Participatory Design
        </p>
      </div>
    </div>
  );
}
