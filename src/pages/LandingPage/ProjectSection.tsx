import ProjectCard from "../../Components/Component/ProjectCard";
import img_mobility_card from "../../assets/img/img_project_mobility_card.jpg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_social.svg";
import ButtonNext from "../../Components/Component/ButtonNext";
import { Link, useNavigate } from "react-router-dom";
import useProjectLock from "../../Components/Component/useProjectLock";

export default function ProjectSection() {
  const { isLocked, openLock, passwordModal } = useProjectLock();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#e8e8e8]  hidden md:block">
        <div className="container mx-auto pt-24">
          <div className="grid md:grid-cols-2 gap-x-24">
            <div className="text-left">
              <p className="tracking-widest text-[#EA5514] text-subtitle">
                WORKS
              </p>
              <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
                &nbsp;
              </div>
            </div>
            <div className="text-[#6F6F6F] text-[18px] leading-[30px] font-light">
              <p>
                I am passionate about these projects, helping services progress
                to the next level while prioritising accessibility and
                inclusivity.
              </p>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
                <DecoBubble />
              </div>
              {/* Password-protected: clicking opens the password prompt */}
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  isLocked("mobility")
                    ? openLock("mobility")
                    : navigate("/project/mobility")
                }
              >
                <ProjectCard
                  imgURL={img_mobility_card}
                  title="Future Mobility Service and Strategy Transformation"
                  subTitle="Foresight & Scenario Planning"
                  concept=""
                  type="Foresight, Scenario Planning, Service Design"
                  content="How might mobility services keep creating value when demand, infrastructure, and governing rules change in the post-AI era?"
                />
              </div>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
                <DecoBubble />
              </div>
              <Link to="/project/finance">
                <ProjectCard
                  imgURL={img_project_02}
                  title="Co-designed Service for ADHD Financial Inclusion"
                  subTitle="Inclusive Service Design"
                  concept=""
                  type="Inclusive Design, Co-design, Research through Design"
                  content="How might an evidence-based toolkit and course empower young ADHD adults to enhance financial management?"
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
      {passwordModal}
    </>
  );
}
