import { ReactElement } from "react";
import img_research_01 from "../../assets/img/img_project_finance_designP_03.jpg";
import img_research_02 from "../../assets/img/img_project_finance_designP_04.png";
import img_research_03 from "../../assets/img/img_project_finance_designP_05.jpg";
import img_research_04 from "../../assets/img/img_project_finance_designP_01.png";
import img_research_05 from "../../assets/img/img_design_finance_designP_02.svg";
import img_research_06 from "../../assets/img/img_project_finance_designP_06.png";

import ModalImage from "../../Components/Component/ModalImage";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import ModalImageCustom from "./ModalImage";

export default function DesignProcessSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] pb-16" id='design_challenges'>
      <div className="container mx-auto mt-12 w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          Nothing about ADHD without ADHD.
        </p>
        <p className="font-light text-[16px] mt-6">
          I prioritize designing "with" people with ADHD rather than designing
          "for" them. I recognized these individuals as integral partners in the
          development of services and avoiding making decisions on their behalf.
          With this inclusive mindset, I can ensure that the designed services
          are refined and aligned with the lifestyles and habits of young adults
          with ADHD.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <ModalImage imgURL={img_research_01} />
          <ModalImage imgURL={img_research_02} />
          <ModalImage imgURL={img_research_03} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div>
            <p className="text-[16px] font-bold mb-4">The Concepts Iteration</p>
            <ModalImage imgURL={img_research_04} aspectRatio="547/228" description="Iterating concepts through numerous discussions and workshops with individuals with ADHD." />
          </div>
          <div>
            <p className="text-[16px] font-bold mb-4">
              Impact-Feasibility Matrix
            </p>
            <ModalImageCustom imgURL={img_research_05} aspectRatio="522/285" />
          </div>
        </div>

        <p className="font-bold text-[24px] mt-12">
          The service designer’s role in workshops is to encourage, not to steer
          the conversation.
        </p>
        <p className="font-light text-[16px] mt-6 mb-8">
          When conducting workshops, I wanted to ensure that both individuals
          with ADHD and professionals from ADHD charities have opportunities to
          share ideas and contribute to design decisions. <span className='font-bold'>I consciously take on
          the role of a visual facilitator, helping participants express their
          concepts visually, even if they lack confidence in drawing.</span> By
          sketching out their ideas on the spot, I facilitate deeper
          conversation and ensure that every concept is thoroughly explored and
          discussed.
        </p>
        <ModalImageFree imgURL={img_research_06} />
      </div>
    </div>
  );
}
