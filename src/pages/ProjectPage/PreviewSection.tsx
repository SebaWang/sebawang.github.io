import { ReactElement } from "react";
import ProjectCard from "../../Components/Component/ProjectCard";
import ProjectPreviewCard from "./ProjectPreviewCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import img_project_03 from "../../assets/img/img_project_cover_03.jpg";
import img_project_04 from "../../assets/img/img_project_cover_04.png";
import img_project_05 from "../../assets/img/img_project_cover_06.jpg";
import img_project_06 from "../../assets/img/img_project_cover_05.png";
import { Link } from "react-router-dom";

export default function PreviewSection(): ReactElement {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="container mx-auto pt-48 text-center">
        <p className="tracking-[6px] text-[#EA5514] text-[24px] font-semibold">
          PROJECT
        </p>
        <div className="w-[22px] border-b-[6px] border-[#EA5514] h-[12px] mx-auto mt-2">
          &nbsp;
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20 pb-32">
          <div>
            <Link to="/project/finance">
              <ProjectPreviewCard
                imgURL={img_project_02}
                title="A+ In Finance"
                subTitle="Inclusive Design for ADHD Financial Management"
                concept="Financial Inclusion"
                content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?"
              />
            </Link>
          </div>
          <div>
            <Link to="/project/mob">
              <ProjectPreviewCard
                imgURL={img_project_01}
                title="Ministry of Biodiversity"
                subTitle="Strategy & Speculative Design for Policy with GDS"
                concept="Agricultural Policy Communication"
                content="How might the government effectively engage the general public and communicate environmental policies ?"
              />
            </Link>
          </div>
          <div>
            <Link to="/project/epq">
              <ProjectPreviewCard
                imgURL={img_project_03}
                title="EPQ Learning Journey"
                subTitle="Social Design for Non-traditional Education"
                concept="Social Action for A-level Qualifications"
                content="How might universities offer motivating sessions for individuals with addiction and former offenders to complete A-level qualifications and reintegrate into the workforce smoothly?"
              />
            </Link>
          </div>
          <div>
            <Link to="/project/medicy">
              <ProjectPreviewCard
                imgURL={img_project_04}
                title="MEDICY: NFT News Fantasy"
                subTitle="Strategy & Service Design for NFT Trading"
                concept="NFT Development Strategy"
                content="How might NFT traders simplify the process of NFT values evaluation without navigating multiple platforms and piecing together fragmented information?"
              />
            </Link>
          </div>
          <div>
            <Link to="/project/advantech">
              <ProjectPreviewCard
                imgURL={img_project_05}
                title="Integrated Tele-health Solution"
                subTitle="IoT Telemedicine Service Design"
                concept="Remote Medical Diagnosis Service"
                content="How might we seamlessly integrate the telemedical hardware and software to enable medical professionals to conduct more precise diagnoses and enhance communication experiences?"
              />
            </Link>
          </div>
          <div>
            <Link to="/project/utech">
              <ProjectPreviewCard
                imgURL={img_project_06}
                title="UTech"
                subTitle="Universal Design for Urine Analysis Toilet"
                concept="Operation Process for All-Age"
                content="How might we design a clear and intuitive user journey, enabling various users to operate the urine analysis toilet within 10 secs toileting time?"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
