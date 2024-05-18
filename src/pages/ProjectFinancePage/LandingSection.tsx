import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/img_project_finance_cover.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden h-[60svh]   md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex-col justify-center h-full flex justify-center flex-col hidden md:flex">
          <p className="text-[70px] font-bold text-white">A+ In Finance</p>
          <p className="text-[26px] font-semibold text-white">
            Financial Management Journey and
            <br /> Inclusive Design for ADHD
          </p>
        </div>
      </div>
      <div className="bg-[#1E1E1E] text-center px-4  block md:hidden py-24">
        <div>
          <h1 className="text-white text-[45px] font-bold">A+ In Finance</h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
            ADHD Financial Learning Journey & Inclusion Design
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
          Service Design | UI / UX | Operational Strategy
        </p>
      </div>
    </>
  );
}
