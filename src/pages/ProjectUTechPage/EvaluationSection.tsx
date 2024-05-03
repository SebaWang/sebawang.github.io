import { ReactElement } from "react";
import { ReactComponent as Magnifier } from "../../assets/img/icon_magnifier.svg";
import { ReactComponent as Magnet } from "../../assets/img/icon_magnet.svg";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMobile from "../../Components/Component/ContactMobile";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_01 from "../../assets/img/img_landing_project_02.jpg";

export default function EvaluationSection(): ReactElement {
  return (
    <>    <div
      className="container mx-auto mt-12 md:w-[1100px] pb-12"
      id="evaluation"
    >
      <div className="text-center pt-12 mb-8">
        <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-4 ">
        <div className="flex flex-col gap-4">
          <Magnifier className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            Remarkable Prevention Effect
          </p>
          <p className="text-content font-light text-left hidden md:block">
            The urine analysis toilets have finally been deployed in three
            teaching hospitals, i
            <span className="font-bold">
              {" "}
              increasing the early detection of urinary tract infections and
              kidney stones by 16%{" "}
            </span>
            and enhancing proactive healthcare management.
          </p>
          <p className="text-content text-left md:hidden block">
            The urine analysis toilets have finally been deployed in three
            teaching hospitals, i
            <span className="font-bold">
              {" "}
              increasing the early detection of urinary tract infections and
              kidney stones by 16%{" "}
            </span>
            and enhancing proactive healthcare management.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Magnet className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            Attracting New Consumer Generations
          </p>
          <p className="text-content font-light text-left hidden md:block">
            I also recommended the application of the new touch-screen
            controller to other toilet product lines. Despite a 5% increase in
            manufacturing costs, the high-tech appearance and clean user
            interface
            <span className="font-bold">
              {" "}
              appealed to approximately 35% more young buyers,{" "}
            </span>
            resulting in increased profit for the company
          </p>
          <p className="text-content text-left md:hidden block">
            I also recommended the application of the new touch-screen
            controller to other toilet product lines. Despite a 5% increase in
            manufacturing costs, the high-tech appearance and clean user
            interface
            <span className="font-bold">
              {" "}
              appealed to approximately 35% more young buyers,{" "}
            </span>
            resulting in increased profit for the company
          </p>
        </div>
      </div>
      <div className="mx-auto text-center mt-4 pb-16 hidden md:block">
        <Link to="/project">
          <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
            Back To Projects
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
              imgURL={img_project_01}
              title="A+ In Finance"
              subTitle="Inclusive Design for ADHD Financial Management"
              concept="Financial Inclusion"
              content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?"
            />
          </Link>
          <div className="text-center border-[1px] border-[#575757] text-[12px] p-6 mt-12">
            For a better reading experience and details about the research and
            design process, please visit my website using a laptop or larger
            screen. Thank you!
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <ContactMobile />
      </div>
    </>

  );
}
