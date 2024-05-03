import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import ContactMobile from "../../Components/Component/ContactMobile";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_05 from "../../assets/img/img_project_cover_06.jpg";

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
          Rational Design for Emotional Experience.
        </p>
        <p className="text-content font-light mt-4">
          In the rapidly evolving services of Web3 and NFTs, there remain
          abundant opportunities for exploration and optimization. While the NFT
          market is undeniably competitive, I believe sustained success hinges
          not on leveraging celebrity endorsements or artist collaborations.
          Instead, a robust NFT project service is essential for fostering
          enduring relationships with followers and maximizing the benefits of
          NFT ownership.{" "}
          <span className="font-bold">
            {" "}
            Through systematic analysis and design, the NFT owner experience
            should evoke feelings of pleasure and achievement, driving
            meaningful engagement.
          </span>{" "}
          As a strategy and service designer, this is the goal which I am
          committed to.
        </p>

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

          <Link to="/project/advantech">
            <ProjectPreviewCard
              imgURL={img_project_05}
              title="Integrated Tele-health Solution"
              subTitle="IoT Telemedicine Service Design"
              concept="Remote Medical Diagnosis Service"
              content="How might we seamlessly integrate the telemedical hardware and software to enable medical professionals to conduct more precise diagnoses and enhance communication experiences?"
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
