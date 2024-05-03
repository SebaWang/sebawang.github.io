import { ReactElement } from "react";
import img_crown from "../../assets/img/img_project_mob_crown.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMobile from "../../Components/Component/ContactMobile";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_03 from "../../assets/img/img_project_cover_03.jpg";

export default function ReflectionSection(): ReactElement {
  return (
    <div id="reflection">
      <div className="bg-[#FFFAF8] mx-auto pt-12">
        <div className="container mx-auto md:w-[1100px]">
          <div className="text-center mb-12">
            <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; REFLECTION &nbsp; ]
            </p>
          </div>
          <p className="font-bold text-[20px] md:text-[24px]">
            Building anti-fragile systems through speculative design.
          </p>
          <p className="text-content font-light mt-4 px-6 border-l-[2px] border-black hidden md:block">
            “Antifragility helps build a systematic guide in any situation in
            which there is randomness, unpredictability, or incomplete
            understanding of things.”
            <br />— Taleb, 2016
          </p>
          <p className="text-content mt-4 font-light">
            I believe speculative design can make designers and stakeholders
            "anti-fragile." It involves exploring the potential future
            trajectories of societies and organizations, allowing us{" "}
            <span className="font-bold">
              to identify vulnerabilities and risks within services, and foster
              overall system evolution and adaptability through ongoing
              examination and refinement
            </span>{" "}
            . Just as GDS and DEFRA found inspiration in this project,
            recognizing deficiencies in current government policy communication
            and initiating plans for innovative approaches to engage with the
            public, they can also utilize these future scenarios to proactively
            devise strategies - establishing systems to address potential
            challenges before they arise. This adaptability helps mitigate the
            scale of impacts and may lead to unexpected advantages.s
          </p>

          <p className="font-bold text-[24px] mt-12 hidden md:block">
            Collaborating with scientists will make the project more powerful.
          </p>
          <p className="text-content mt-2 font-light hidden md:block">
            In terms of the project limitations, I believe that collaboration
            with biologists and scientists can enrich policy design by
            incorporating realistic details. This includes considerations of
            ecological conditions and endangered species, ensuring that policies
            are both imaginative and grounded in reality. Such a collaborative
            approach will make the pilot policy more practical and vivid,
            fostering more powerful impact. <br />
            <br />
            Thanks to the GDS team and my teammates for their invaluable
            contributions. This enriching experience in policy design and
            communication has been a tremendous learning opportunity for me.
          </p>
          <div className="w-[254px] mx-auto text-center mt-4 pb-12 hidden md:block">
            <img src={img_crown} />
            <Link to="/project">
              <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-12 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
                Back To Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] block md:hidden">
        <div className="container mx-auto py-12">
          <p className="text-[20px] flex items-center mb-6">
            See other projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </p>

          <Link to="/project/epq">
            <ProjectPreviewCard
              imgURL={img_project_03}
              title="EPQ Learning Journey"
              subTitle="Social Design for Non-traditional Education"
              concept="Social Action for A-level Qualifications"
              content="How might universities offer motivating sessions for individuals with addiction and former offenders to complete A-level qualifications and reintegrate into the workforce smoothly?"
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
