import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_Telehealth/cover.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden h-[60svh]   md:h-[100vh] bg-cover bg-left md:bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex-col justify-center h-full  grid grid-cols-3 hidden md:grid">
          <div className="col-span-2">&nbsp;</div>
          <div className="flex flex-col justify-center">
            <p className="text-[70px] font-bold text-white">
              Integrated
              <br />
              Tele-health
              <br />
              Solution
            </p>
            <p className="text-[26px] font-semibold text-white">
              IoT Telemedicine Service Design
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold leading-[48px]">
            Integrated Telehealth Solution
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            IoT Telemedicine Service Design
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | Product Strategy | UI / UX
        </p>
      </div>
    </>
  );
}
