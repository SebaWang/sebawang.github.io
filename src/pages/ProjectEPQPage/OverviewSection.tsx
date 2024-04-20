import { ReactElement } from "react";
import img_outcome from "../../assets/img/Project_EPQ Learning Journey/outcome.jpg";
import img_ovewview_bg from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/process.jpg";
import img_ovewview_01 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/1.jpeg";
import img_ovewview_02 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/2-1.jpg";
import img_ovewview_03 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/2-2.jpg";
import img_ovewview_04 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/3-1.jpg";
import img_ovewview_05 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/3-2.jpg";
import img_ovewview_06 from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/4.jpg";
import HoverImage from "../../Components/Component/HoverImage";

export default function OverviewSection(): ReactElement {
  return (
    <div id="overview">
      <div className="container mx-auto mt-12 w-[1100px]">
        <p className="font-bold text-[40px] text-[#DD663C]">
          EPQ Learning Journey
        </p>
        <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className='flex flex-col justify-center'>
            <p className="text-content font-light">
              This collaborative project with Open Book at Goldsmiths University
              seeks to address the learning hurdles faced by individuals with
              non-traditional backgrounds, including those who have battled
              addiction, mental health issues, or have been involved in the
              criminal justice system. Often feeling unsuited to traditional
              educational institutions, these individuals may be hesitant about
              entering such environments when aiming to attain A-level
              qualifications for stable career progression. Through
              participatory design, the project developed an Extended Project
              Qualification qualification (A-level) course
              <span className="font-bold">
                {" "}
                tailored to learners with non-traditional backgrounds,
                empowering them to discover their passion for learning and
                progress in their careers
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center ">
            <img src={img_outcome} alt="OutcomeImage" />
          </div>

          <div>
            <div className="flex gap-2 text-content font-light flex-wrap">
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
                Inclusive Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
                Participatory Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
                Social Design
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
        <img src={img_ovewview_bg} alt='overviewBgImg' />
        <HoverImage
          width="9.5%"
          height="24%"
          position="left"
          distance="18%"
          top="57%"
          hoverLeft="29.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_01}
          description="Using images to initiate discussions and engage with learners."
        />
        <HoverImage
          width="9.5%"
          height="23%"
          position="left"
          distance="43%"
          top="37%"
          hoverLeft="52.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_02}
        />
        <HoverImage
          width="9.5%"
          height="23%"
          position="left"
          distance="43%"
          top="60%"
          hoverLeft="52.5%"
          hoverTop="10%"
          imageUrl={img_ovewview_03}
        />
        <HoverImage
          width="11%"
          height="23%"
          position="right"
          distance="32%"
          top="37%"
          hoverLeft="45%"
          hoverTop="10%"
          imageUrl={img_ovewview_04}
          description="Utilizing the learning journal to identify their interests and EPQ project topics."
        />
        <HoverImage
          width="11%"
          height="23%"
          position="right"
          distance="32%"
          top="60%"
          hoverLeft="45%"
          hoverTop="10%"
          imageUrl={img_ovewview_05}
          description="An idea that learners have provided to us."
        />
        <HoverImage
          width="11%"
          height="27%"
          position="right"
          distance="17.5%"
          top="35.5%"
          hoverLeft="30%"
          hoverTop="10%"
          imageUrl={img_ovewview_06}
        />
      </div>
    </div>
  );
}
