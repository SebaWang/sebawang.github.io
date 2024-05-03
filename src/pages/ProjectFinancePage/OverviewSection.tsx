import { ReactElement } from "react";
import img_outcome from "../../assets/img/img_project_finance_outcome1.png";
import img_ovewview_bg from "../../assets/img/img_project_finance_overview_bg.jpg";
import img_ovewview_01 from "../../assets/img/img_project_finance_overview_01.jpg";
import img_ovewview_02 from "../../assets/img/img_project_finance_overview_02.jpg";
import img_ovewview_03 from "../../assets/img/img_project_finance_overview_03.png";
import img_ovewview_04 from "../../assets/img/img_project_finance_overview_04.jpg";
import img_ovewview_05 from "../../assets/img/img_project_finance_overview_05.png";
import img_ovewview_06 from "../../assets/img/img_project_finance_overview_06.png";
import img_ovewview_07 from "../../assets/img/img_project_finance_overview_07.jpg";
import img_ovewview_08 from "../../assets/img/img_project_finance_overview_08.jpg";
import HoverImage from "../../Components/Component/HoverImage";

export default function OverviewSection(): ReactElement {
  return (
    <>
      <div id="overview" className="hidden md:block">
        <div className="container mx-auto mt-12 w-[1100px]">
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold text-[40px] text-[#DD663C]">
                A+ In Finance
              </p>
              <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
                &nbsp;
              </div>
              <p className="text-content font-light mt-8 mb-8">
                A+ in Finance focuses on designing{" "}
                <span className="font-bold">
                  financial inclusion strategies{" "}
                </span>
                for ADHD. Through research and design involving 14 people with
                ADHD across various age groups, a common financial learning
                journey emerged. It was observed that those with longer
                diagnoses exhibit proficient financial capability, attributed to
                their grasps of activities that boost dopamine levels.
                Conversely, young adults with ADHD may take a decade to identify
                and practice such activities, often resorting to impulsive
                behaviors like shopping or substance use.{" "}
                <span className="font-bold">
                  How might young adults with ADHD manage symptoms and curb
                  impulsive shopping behavior without years of learning?
                </span>{" "}
                This project developed a Google Chrome Extension and ADHD
                Financial Learning Courses to provide practical guidance, which
                currently support over 150 individuals.
              </p>
              <div className="flex gap-2 text-content font-light flex-wrap">
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Inclusive Design
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300]"
                  style={{ cursor: "default" }}
                >
                  Co-design
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Research Through Design
                </div>
              </div>
              <p className="text-[14px] font-light mt-10">
                * Participants have consented to the use of photos.
              </p>
            </div>
            <div className="flex flex-col justify-center scale-[1.3]">
              <img src={img_outcome} />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; PROJECT PROCESS OVERVIEW &nbsp; ]
            </p>
          </div>
        </div>
        <div className="w-full relative mt-6">
          <img src={img_ovewview_bg} />
          <HoverImage
            width="10.5%"
            height="21.5%"
            position="left"
            distance="7.2%"
            top="15.5%"
            hoverLeft="24%"
            hoverTop="10%"
            imageUrl={img_ovewview_01}
            description="Interview and language check with the expert at the Brain Charity."
          />
          <HoverImage
            width="9%"
            height="21.5%"
            position="left"
            distance="18.8%"
            top="15.5%"
            hoverLeft="29.8%"
            hoverTop="10%"
            imageUrl={img_ovewview_02}
            description="Online survey about the financial management methods and attitudes of individuals with ADHD."
          />
          <HoverImage
            width="10.5%"
            height="21.5%"
            position="left"
            distance="28.9%"
            top="15.5%"
            hoverLeft="41.4%"
            hoverTop="10%"
            imageUrl={img_ovewview_03}
            description="Interview with an adult with ADHD."
          />
          <HoverImage
            width="10.5%"
            height="21.5%"
            position="left"
            distance="40.2%"
            top="15.5%"
            hoverLeft="52.7%"
            hoverTop="10%"
            imageUrl={img_ovewview_04}
            description="ADHD Financial Learning Journey: Insights gathered from interviewing 14 individuals with ADHD across different age groups and financial coaches."
          />
          <HoverImage
            width="9.5%"
            height="21.5%"
            position="right"
            distance="36.8%"
            top="15.5%"
            hoverLeft="48.3%"
            hoverTop="10%"
            imageUrl={img_ovewview_05}
            description="Workshop Poster: Using a visual style that attract individuals with ADHD."
          />
          <HoverImage
            width="9.5%"
            height="21.5%"
            position="right"
            distance="26.25%"
            top="15.5%"
            hoverLeft="38%"
            hoverTop="10%"
            imageUrl={img_ovewview_06}
            description="Research through Design Workshop: Using design artifacts to interact with participants with ADHD."
          />
          <HoverImage
            width="9.5%"
            height="21.5%"
            position="right"
            distance="15.6%"
            top="15.5%"
            hoverLeft="28%"
            hoverTop="10%"
            imageUrl={img_ovewview_07}
            description="Co-design Workshops: Involving individuals with ADHD to share their ideas about financial management."
          />
          <HoverImage
            width="9.5%"
            height="21.5%"
            position="right"
            distance="5%"
            top="15.5%"
            hoverLeft="18%"
            hoverTop="10%"
            imageUrl={img_ovewview_08}
            description="Prototype Testing: Functions and User Interface Improvement."
          />
        </div>
      </div>
      <div id='project_info' className="block md:hidden container mx-auto bg-[#F3EEEE] pb-24">
        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold pt-24">Research Question</p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without a decade of learning?</p>
        <img src={img_outcome} alt='outcome' className="w-full" />
        
        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold mt-12">Outcome</p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">A Google Chrome Extension,ADHD Financial Learning Journey Map,Service Blueprint and System Map for ADHD Financial Course</p>
      </div>
    </>
  );
}
