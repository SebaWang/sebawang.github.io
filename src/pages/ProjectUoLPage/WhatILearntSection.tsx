import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";
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
        <div className="container mx-auto md:w-[1100px] pb-12 md:pb-24">
          <ChapterHeader number="05" title="What I Learnt" />

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:-mt-4">
            {/* Pull quote: decorative serif quote marks around the line */}
            <p className="text-[22px] md:text-[26px] text-[#D2683A] font-light !font-serif max-w-[760px] md:flex-1 leading-[1.7]">
              <span className="text-[40px] leading-none !font-serif align-top mr-1" aria-hidden="true">
                &ldquo;
              </span>
              Pull quote to be added.
              <span className="text-[40px] leading-none !font-serif align-bottom ml-2" aria-hidden="true">
                &rdquo;
              </span>
            </p>
            {/* Vertically centred with the pull quote. Low-res file only;
                right-click and drag disabled */}
            <div className="w-full md:w-[240px] md:shrink-0 md:ml-auto">
              <PhotoSlot label="Photo 16" aspect="4/3" className="rounded-md" />
            </div>
          </div>

          <p className="text-[20px] md:text-[24px] font-bold mt-10">
            Reflection heading to be added.
          </p>
          <div className="w-[22px] border-b-[5px] border-[#D9D9D9] h-[5px] mt-3">
            &nbsp;
          </div>
          <p className="text-content md:font-light mt-6">
            Reflection text to be added.
          </p>
          <p className="text-content font-bold mt-6">
            Key question or takeaway to be added.
          </p>

          {/* Three-dot divider between the two reflections */}
          <div className="flex justify-center gap-2 mt-16" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></span>
            ))}
          </div>

          <p className="text-[20px] md:text-[24px] font-bold mt-16">
            Reflection heading to be added.
          </p>
          <div className="w-[22px] border-b-[5px] border-[#D9D9D9] h-[5px] mt-3">
            &nbsp;
          </div>
          <p className="text-content md:font-light mt-6">
            Reflection text to be added.
          </p>
        </div>

        <div className="mx-auto text-center mt-4 pb-16 hidden md:block">
          <Link to="/project">
            <button className="mt-4 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
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
              title="Co-designed Service for ADHD Financial Inclusion"
              content="How can an evidence-based toolkit and course empower young ADHD adults to enhance financial management?"
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
