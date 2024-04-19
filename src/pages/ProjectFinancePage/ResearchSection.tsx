import { ReactElement } from "react";
import img_research_01 from "../../assets/img/img_design_finance_research_01.png";
import img_research_02 from "../../assets/img/img_design_finance_research_02.jpg";
import img_research_03 from "../../assets/img/img_design_finance_research_03.png";
import img_research_04 from "../../assets/img/img_design_finance_research_04.png";
import img_research_05 from "../../assets/img/img_design_finance_research_05.png";
import img_research_06 from "../../assets/img/img_design_finance_research_06.jpg";

import ModalImage from "../../Components/Component/ModalImage";
import ModalImageFree from "../../Components/Component/ModalImageFree";

export default function ResearchSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="process_challenges">
      <div className="container mx-auto mt-12 w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; RESEARCH PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          It was not an easy task to engage people with ADHD in discussions
          about finance.
        </p>
        <p className="font-light text-[16px] mt-6">
          Conversations about ADHD can be sensitive, especially when discussing
          finance.{" "}
          <span className="font-bold">
            Individuals with ADHD might find it challenging to open up about
            experiences that could evoke feelings of shame or stigma,
          </span>
          particularly with someone they do not know well, like myself. To
          foster a psychologically safe environment and promote open sharing, I
          implemented{" "}
          <span className="font-bold">several inclusive strategies,</span>{" "}
          including creating a project and research ethics briefing video,
          consulting with ADHD charity experts on language, and incorporating
          case studies and gamification during interactions.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <ModalImage imgURL={img_research_01} description="Utilizing videos and captivating materials to introduce the project and demonstrate my commitment to research ethics with ADHD groups." />
          <ModalImage imgURL={img_research_02} description="Implementing gamification to encourage greater participant involvement in the workshops." />
          <ModalImage imgURL={img_research_03} description="Avoiding sensitive terms: I regularly consult with experts to ensure language sensitivity and avoid stigmatizing individuals with ADHD." />
        </div>
        <p className="font-bold text-[24px] mt-12">
          Using case studies instead of personas helps maintain the complexity
          of ADHD.
        </p>
        <p className="font-light text-[16px] mt-6">
          The intricacy of ADHD lies in the diversity of symptoms and their
          different personalized strategies.{" "}
          <span className="font-bold">
            Condensing them into representative characters through personas
            might risk oversimplifying the complex array of ADHD.
          </span>{" "}
          Instead, I opted to share real-life stories during workshops to
          provide a more authentic experience. By showcasing tangible cases,
          participants{" "}
          <span className="font-bold">
            felt reassured that their challenges were surmountable.
          </span>{" "}
          This approach also demonstrated my respect and understanding of their
          struggles, fostering trust and facilitating open dialogue throughout
          the workshop sessions.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <ModalImage imgURL={img_research_04} aspectRatio="513/228" description="Incorporating real-life stories to engage with participants with ADHD." />
          <ModalImage imgURL={img_research_05} aspectRatio="513/228" />
        </div>
        <p className="font-bold text-[24px] mt-12">
          Using a consultancy approach in service design helps manage project
          development.
        </p>
        <div className="grid grid-cols-5 gap-6 mt-6 pb-4">
          <div className="col-span-3">
            <ModalImageFree imgURL={img_research_06} />
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <p className="font-light text-[16px] mt-6">
              I also learned to use{" "}
              <span className="font-bold">hypothesis thinking</span> to ensure
              clarity in my interview objectives and research questions. This
              method facilitated the systematic collecting and analysis of
              information within the constraints of the time limit, preventing
              me from getting lost in exploration without a clear starting
              point.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
