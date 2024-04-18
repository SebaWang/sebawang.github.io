import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_Medicy/cover.jpg";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden aspect-[16/9] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex-col justify-center h-full  grid grid-cols-3">
          <div className="col-span-2">&nbsp;</div>
          <div className='flex flex-col justify-center'>
            <p className="text-[70px] font-bold text-white">
              MEDICY: NFT News Fantasy
            </p>
            <p className="text-[26px] font-semibold text-white">
              Strategy & Service Design for NFT Evaluating and Trading
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
