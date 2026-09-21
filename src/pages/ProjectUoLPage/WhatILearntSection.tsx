import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import ContactMobile from "../../Components/Component/ContactMobile";

export default function WhatILearntSection(): ReactElement {
  return (
    <>
      <div className="bg-[#FFFAF8]" id="what_i_learnt">
        <div className="container mx-auto mt-12 md:w-[1100px] pb-12 md:pb-24">
          <div className="text-center pt-12 mb-8">
            <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; WHAT I LEARNT &nbsp; ]
            </p>
          </div>

          <p className="text-[20px] md:text-[24px] font-bold mt-12">
            Reflection heading to be added.
          </p>
          <p className="text-content md:font-light mt-4">
            Reflection text to be added.
          </p>

          <p className="text-[20px] md:text-[24px] font-bold mt-8">
            Reflection heading to be added.
          </p>
          <p className="text-content md:font-light mt-4">
            Reflection text to be added.
          </p>
        </div>

        <div className="mx-auto text-center mt-4 pb-16 hidden md:block">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Works
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#D9D9D9] block md:hidden">
        <div className="container mx-auto py-12">
          <p className="text-[20px] flex items-center mb-6">
            See other projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </p>

          <Link to="/project/finance">
            <ProjectPreviewCard
              imgURL={img_project_02}
              title="A+ In Finance"
              content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?"
            />
          </Link>
          <div className="text-center border-[1px] border-[#575757] text-[12px] p-6 mt-12">
            For a better reading experience and details about the research
            and design process, please visit my website using a laptop or
            larger screen. Thank you!
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <ContactMobile />
      </div>
    </>
  );
}
