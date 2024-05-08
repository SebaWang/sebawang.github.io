import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_UTech/cover.png";
import img_bg_coverm from "../../assets/img/Project_UTech/cover_m.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden hidden md:block   h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex flex-col justify-center  grid grid-cols-5 h-full">
          <div className="col-span-4">&nbsp;</div>
          <div className="flex flex-col justify-center">
            <p className="text-[70px] font-bold text-white">UTech</p>
            <p className="text-[26px] font-semibold text-white">
              Universal Design for <br />
              Urine Analysis Toilet
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full relative overflow-hidden h-[60svh]  bg-cover bg-center block md:hidden"
        style={{ backgroundImage: `url(${img_bg_coverm})` }}
      ></div>
      <div className="py-24 bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold  leading-[48px]">
            UTech
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            Universal Design for <br />
            Urine Analysis Toilet
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Team Lead | Product Strategy | UI / UX
        </p>
      </div>
    </>
  );
}
