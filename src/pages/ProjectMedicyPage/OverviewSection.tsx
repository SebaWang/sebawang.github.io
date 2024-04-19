import { ReactElement } from "react";
import img_outcome from "../../assets/img/Project_Medicy/outcome.png";
import img_ovewview_bg from "../../assets/img/Project_Medicy/Process Overview/bg.png";
import img_ovewview_02 from "../../assets/img/Project_Medicy/Process Overview/behavior_analysis.jpg";
import img_ovewview_01 from "../../assets/img/Project_Medicy/Process Overview/nft_evaluation.jpg";
import img_ovewview_03 from "../../assets/img/Project_Medicy/Process & Challenges/2.jpg";
import HoverImage from "../../Components/Component/HoverImage";

export default function OverviewSection(): ReactElement {
  return (
    <div id="overview">
      <div className="container mx-auto mt-12 w-[1100px]">
        <p className="font-bold text-[40px] text-[#DD663C]">
          MEDICY: NFT News Fantasy
        </p>
        <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[16px] font-light">
              As a strategy designer, I've supported Rug Pull Frens (RPF), a
              prominent Asian Non-Fungible Token (NFT) project, in formulating
              its roadmap. A pivotal element of this ambitious plan is Medicy,
              an integrated news and forum platform dedicated to NFT trading and
              information. Drawing inspiration from the influential Medici
              family of the Renaissance era, Medicy is designed to support NFT
              artists and projects in this modern Digital Renaissance.
              <span className="font-bold">
                {" "}
                By consolidating trading information into a trader-friendly
                platform, it streamlines the NFT value evaluation process,
                eliminating the need to navigate multiple sources.
              </span>
              Through this strategic input, Medicy has emerged as a dynamic
              tool, enhancing attention and investment for the development of
              RPF’s Generation 2 NFT.
            </p>
          </div>
          <div className="flex flex-col justify-center ">
            <img src={img_outcome} alt="OutcomeImage" className='scale-[1.1]' />
          </div>

          <div>
            <div className="flex gap-2 text-[16px] font-light flex-wrap">
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              Strategy Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              Website Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              UI / UX Design
              </div>
            </div>
            <p className="text-[14px] font-light mt-10">
              * Participants have consented to the use of photos.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; PROJECT PROCESS OVERVIEW &nbsp; ]
          </p>
        </div>
      </div>
      <div className="w-full relative mt-6">
        <img src={img_ovewview_bg} alt="overviewBgImg" className='w-full' />
        <HoverImage
          width="18%"
          height="28%"
          position="left"
          distance="9.6%"
          top="60%"
          hoverLeft="29.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_01}
          description="General NFT Evaluation Journey"
        />
        <HoverImage
          width="18%"
          height="28%"
          position="left"
          distance="29%"
          top="60%"
          hoverLeft="29.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_02}
          description="Customer Behavior Analysis & Overall Strategy Formulation"
        />
        <HoverImage
          width="17%"
          height="30%"
          position="left"
          distance="49%"
          top="60%"
          hoverLeft="29.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_03}
          description="Offline Community Workshops for Blockchain Learning"
        />
      </div>
    </div>
  );
}
