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

          {/* Pull quote: decorative serif quote marks around the line */}
          <p className="text-[22px] md:text-[26px] text-[#D2683A] font-light !font-serif max-w-[860px] leading-[1.7]">
            <span className="text-[40px] leading-none !font-serif align-top mr-1" aria-hidden="true">
              &ldquo;
            </span>
            The value of future scenarios lies not in how imaginative they are,
            but in how well they help question the assumptions behind the
            service design decisions we make today.
            <span className="text-[40px] leading-none !font-serif align-bottom ml-2" aria-hidden="true">
              &rdquo;
            </span>
          </p>

          <p className="text-[20px] md:text-[24px] font-bold mt-16">
            Foresight for questioning the service before designing it.
          </p>
          <div className="w-[22px] border-b-[5px] border-[#D9D9D9] h-[5px] mt-3">
            &nbsp;
          </div>
          <p className="text-content md:font-light mt-6">
            This project changed how I understand the value of foresight. It is
            not about predicting which future is most likely. It is about
            identifying which assumptions about the future today's strategy
            depends on, and examining what would happen to existing products,
            services and business models if those assumptions stopped holding.
            In service design, I used to start from existing services:
            understanding user needs, pain points and system relationships,
            then looking for opportunities to improve them. Foresight pushed me
            to review the service in reverse:
          </p>
          <p className="text-content font-bold mt-6">
            If the needs, roles, infrastructure and institutions this service
            depends on were to change, how might we design or improve the
            service?
          </p>
          <p className="text-content md:font-light mt-6">
            So the value of foresight to service design is that it helps
            designers recognise which needs are genuinely enduring, what
            uncertainties the service is built on, which risks are worth
            developing responses to, and who might be potential partners. All of
            this informs the planning of a service design roadmap.
          </p>

          {/* Three-dot divider between the two reflections */}
          <div className="flex justify-center gap-2 mt-16" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></span>
            ))}
          </div>

          <p className="text-[20px] md:text-[24px] font-bold mt-16">
            Service design helped make futures tangible.
          </p>
          <div className="w-[22px] border-b-[5px] border-[#D9D9D9] h-[5px] mt-3">
            &nbsp;
          </div>
          <p className="text-content md:font-light mt-6">
            I also found that service design can address foresight's tendency
            to stay at the level of macro narrative. Scenario narratives built
            from shifts in climate, governance, AI, energy or demographics are
            hard to turn directly into organisational decisions. Service design
            makes future scenarios more tangible: through personas, user
            journey maps, stakeholder mapping and value-creating systems, it
            grounds scenarios in people's daily lives, raising more concrete
            questions:
          </p>
          <p className="text-content font-bold mt-6">
            What will future services look like? Who provides them? What does
            the end-to-end journey look like? Who might be left out?
          </p>
          <p className="text-content md:font-light mt-6">
            This turns an interesting story about the future into a tool for
            examining products, partnerships, operating models and
            organisational roles. Therefore, the greatest value of service
            design in foresight lies in translating macro uncertainty into
            concrete future service relationships, which then help strategists
            question current services:
          </p>
          <p className="text-content font-bold mt-6">
            What should we change now? What should we prepare for? And what
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
