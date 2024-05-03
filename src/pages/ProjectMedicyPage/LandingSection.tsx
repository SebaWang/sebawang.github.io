import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_Medicy/4medicy_bg.png";
import img_bg_screen from "../../assets/img/Project_Medicy/4medicy_screen.png";

export default function LandingSection(): ReactElement {
  return (
    <>
      <div
        className="w-full relative overflow-hidden  h-[60svh]  md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg_cover})` }}
      >
        <div className="container mx-auto flex-col justify-center h-full  grid md:grid-cols-3 gap-12">
          <div className="col-span-2 flex flex-col justify-center">
            <img src={img_bg_screen} alt='bgscreen' />
          </div>
          <div className='flex flex-col justify-center md:flex hidden'>
            <p className="text-[70px] font-bold text-white">
              MEDICY: NFT News Fantasy
            </p>
            <p className="text-[26px] font-semibold text-white">
              Strategy & Service Design for NFT Evaluating and Trading
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-[40svh] bg-[#1E1E1E] text-center px-4  block md:hidden">
        <div>
          <h1 className="text-white text-[45px] font-bold leading-[45px] pt-[20%]">
          MEDICY: NFT News Fantasy
          </h1>
          <p className="text-[#A0A0A0] text-[14px] font-semibold mt-4">
          Strategy Design for NFT Evaluating & Trading
          </p>
        </div>
        <p className="text-[#DD663C] font-light text-[13px] mt-12">
        Service Design | Roadmap Strategy<br /> Website UI / UX
        </p>
      </div>
    </>
  );
}
