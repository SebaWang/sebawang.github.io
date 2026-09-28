import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import ContactMobile from "../../Components/Component/ContactMobile";

export default function ReflectionSection(): ReactElement {
  return (
    <>
      <div className="bg-[#FFFAF8]" id="reflection">
        <div className="container mx-auto md:w-[1100px] pb-12 md:pb-24">
          <ChapterHeader number="06" title="Reflection" />

          <p className="text-[20px] md:text-[22px] text-[#D2683A] font-light !font-serif max-w-[860px] leading-relaxed">
            The value of future scenarios lies not in how imaginative they are,
            but in{" "}
            <span className="font-bold !font-serif">
              how well they help us question the assumptions behind the service
              design decisions we make today.
            </span>
          </p>

          <p className="text-[20px] md:text-[24px] font-bold mt-16">
            Foresight taught me to question the service before designing it.
          </p>
          <p className="text-content md:font-light mt-4">
            This project changed how I understand the value of foresight. It is
            not about predicting which future is most likely. It is about
            identifying which assumptions about the future today's strategy
            depends on, and examining what would happen to existing products,
            services and business models if those assumptions stopped holding.
          </p>
          <p className="text-content md:font-light mt-4">
            In service design, I used to start from existing services:
            understanding user needs, pain points and system relationships,
            then looking for opportunities to improve them. Foresight pushed me
            to ask one step further:
          </p>
          <p className="text-content font-bold text-[#DD663C] mt-4 border-l-[3px] border-[#EA5514] pl-5">
            If the needs, roles, infrastructure and even institutions this
            service depends on were to change, would the service we are
            improving today still have a reason to exist?
          </p>
          <p className="text-content md:font-light mt-4">
            So the value of foresight to service design is not simply a longer
            time horizon.{" "}
            <span className="font-bold">
              It helps designers recognise which needs are genuinely enduring,
              which are products of the current system, and which design
              decisions might quietly carry today's assumptions into the
              future.
            </span>
          </p>

          <p className="text-[20px] md:text-[24px] font-bold mt-12">
            Service design helped make futures tangible.
          </p>
          <p className="text-content md:font-light mt-4">
            I also found that service design can address foresight's tendency
            to stay at the level of macro narrative. Shifts in climate,
            governance, AI, energy or demographics are hard to turn directly
            into organisational decisions. Through personas, journeys,
            stakeholder mapping and value-creating systems, I could translate
            macro conditions into more concrete questions:
          </p>
          <p className="text-content font-bold text-[#DD663C] mt-4 border-l-[3px] border-[#EA5514] pl-5">
            Who still needs to move? Who provides the service? Who controls the
            critical resources? Who needs to work with whom? How is value
            exchanged? And who might be left out?
          </p>
          <p className="text-content md:font-light mt-4">
            This turns a scenario from an interesting story about the future
            into a tool for examining products, partnerships, operating models
            and organisational roles.
          </p>
          <p className="text-content md:font-light mt-4">
            It also made me more aware that a future persona or future journey
            is not enough on its own. It needs to rest on a clear world logic,
            transition path and set of system conditions, or it can easily
            slide into speculative fiction.{" "}
            <span className="font-bold">
              For me, the greatest value of service design in foresight is
              translating macro uncertainty into concrete service
              relationships, not simply adding characters to the future.
            </span>
          </p>
          <p className="text-content md:font-light mt-4">
            In the same way, I no longer see scenarios as the final output of
            foresight. In this project, the strategically valuable part was
            using different futures to expose assumptions, compare
            dependencies and help the team decide:
          </p>
          <p className="text-[18px] md:text-[20px] font-bold text-[#DD663C] mt-6 text-center">
            What should we change now, what should we prepare for, and what
            should remain flexible?
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
