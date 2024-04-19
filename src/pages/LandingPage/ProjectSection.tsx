import ProjectCard from "../../Components/Component/ProjectCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_social.svg";
import ButtonNext from "../../Components/Component/ButtonNext";
import { Link } from "react-router-dom";

export default function ProjectSection() {
  return (
    <>
      <div className="bg-[#e8e8e8]">
        <div className="container mx-auto pt-24">
          <div className="grid md:grid-cols-2 gap-x-24">
            <div className="text-left">
              <p className="tracking-widest text-[#EA5514] text-subtitle">
                PROJECTS
              </p>
              <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
                &nbsp;
              </div>
            </div>
            <div className="text-[#6F6F6F] text-content font-light">
              <p>
                I am passionate about these projects, helping services progress
                to the next level while prioritizing accessibility and
                inclusivity.
              </p>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
                <DecoBubble />
              </div>
              <Link to="/project/finance">
                <ProjectCard
                  imgURL={img_project_02}
                  title="A+ In Finance"
                  subTitle="Inclusive Design for ADHD Financial Management"
                  concept="Financial Inclusion"
                  type="Inclusive Design, Co-design, Research through Design"
                  content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?"
                />
              </Link>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
                <DecoBubble />
              </div>
              <Link to="/project/mob">
                <ProjectCard
                  imgURL={img_project_01}
                  title="Ministry of Biodiversity"
                  subTitle="Strategy & Speculative Design for Policy with GDS"
                  concept="Agricultural Policy Communication"
                  type="Speculative Design, Participatory Design, Sustainable Design"
                  content="How might the government effectively engage the general public and communicate environmental policies ?"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-20 w-full mx-auto">
            <Link to="/project">
              <ButtonNext text="Show more" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
