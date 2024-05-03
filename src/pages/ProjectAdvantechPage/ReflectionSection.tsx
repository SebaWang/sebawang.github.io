import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Reflection } from "../../assets/img/Project_Telehealth/reflection.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMobile from "../../Components/Component/ContactMobile";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_06 from "../../assets/img/img_project_cover_05.png";

export default function ReflectionSection(): ReactElement {
  return (
    <div className=" bg-[#FFFAF8]" id="reflection">
      <div className="container mx-auto mt-12 md:w-[1100px] pb-24">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; REFLECTION &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[20px] md:text-[24px]">
          Embracing various problem-solving perspectives is the fascinating part
          of Service Design.
        </p>
        <div className="grid md:grid-cols-5 mt-6 gap-16">
          <div className="col-span-2 hidden md:block">
            <Reflection className="h-[90%]" />

            <p className="text-content font-light mt-4">
              Designers should shift various perspectives to adjust their
              problem-solving approach.
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <p className="text-content font-light">
              Genuine innovation requires the integration of design thinking and
              business management knowledge. Throughout my year-long project,
              I've come to realize that designers must not only focus on
              end-users but also adopt a managerial perspective. This involves
              understanding how innovations impact users, the company, and the
              industry as a whole. As such, I play the role of not only a
              designer but also an innovation diffusion strategist, ensuring
              that our innovations effectively penetrate the market while
              remaining closely connected to end-users. I reckon that embracing
              various levels of problem analysis and understanding stakeholders'
              perspectives adds a fascinating dimension to service design.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center mt-4 pb-16  hidden md:block">
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

          <Link to="/project/utech">
            <ProjectPreviewCard
              imgURL={img_project_06}
              title="UTech"
              subTitle="Universal Design for Urine Analysis Toilet"
              concept="Operation Process for All-Age"
              content="How might we design a clear and intuitive user journey, enabling various users to operate the urine analysis toilet within 10 secs toileting time?"
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
    </div>
  );
}
