import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_UTech/cover.png";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden    h-[100vh] bg-cover bg-center"
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
    </>
  );
}
