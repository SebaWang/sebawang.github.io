import { ReactElement } from "react";
import { Link } from "react-router-dom";
import ProjectPreviewCard from "./ProjectPreviewCard";
import useProjectLock, { lockedCardClass } from "../../Components/Component/useProjectLock";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import img_project_03 from "../../assets/img/img_project_cover_03.jpg";
import img_project_04 from "../../assets/img/img_project_cover_04.png";
import img_project_05 from "../../assets/img/img_project_cover_06.jpg";
import img_project_06 from "../../assets/img/img_project_cover_05.png";
import img_project_placeholder from "../../assets/img/img_project_cover_placeholder.svg";

export default function PreviewSection(): ReactElement {
  const { isLocked, openLock, lockOverlay, passwordModal } = useProjectLock();

  // Placeholder entries for upcoming projects: same card and hover effects, but not linked
  const placeholderProjects = [
    {
      id: "new-01",
      imgURL: img_project_placeholder,
      title: "New Project 01",
      subTitle: "Subtitle to be added",
      concept: "Concept to be added",
      content: "Project description to be added.",
      placeholder: true,
    },
    {
      id: "new-02",
      imgURL: img_project_placeholder,
      title: "New Project 02",
      subTitle: "Subtitle to be added",
      concept: "Concept to be added",
      content: "Project description to be added.",
      placeholder: true,
    },
    {
      id: "new-03",
      imgURL: img_project_placeholder,
      title: "New Project 03",
      subTitle: "Subtitle to be added",
      concept: "Concept to be added",
      content: "Project description to be added.",
      placeholder: true,
    },
  ];

  // Array of project data
  const projects = [
    ...placeholderProjects,
    {
      id: "finance",
      imgURL: img_project_02,
      title: "A+ In Finance",
      subTitle: "Inclusive Design for ADHD Financial Management",
      concept: "Financial Inclusion",
      content:
        "How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?",
    },
    {
      id: "mob",
      imgURL: img_project_01,
      title: "Ministry of Biodiversity",
      subTitle: "Strategy & Speculative Design for Policy with GDS",
      concept: "Agricultural Policy Communication",
      content:
        "How might the government effectively engage the general public and communicate environmental policies?",
    },
    {
      id: "epq",
      imgURL: img_project_03,
      title: "EPQ Learning Journey",
      subTitle: "Social Design for Non-traditional Education",
      concept: "Social Action for A-level Qualifications",
      content:
        "How might universities offer motivating sessions for individuals with addiction and former offenders to complete A-level qualifications and reintegrate into the workforce smoothly?",
    },
    {
      id: "medicy",
      imgURL: img_project_04,
      title: "MEDICY: NFT News Fantasy",
      subTitle: "Strategy & Service Design for NFT Trading",
      concept: "NFT Development Strategy",
      content:
        "How might NFT traders simplify the process of NFT values evaluation without navigating multiple platforms and piecing together fragmented information?",
    },
    {
      id: "advantech",
      imgURL: img_project_05,
      title: "Integrated Tele-health Solution",
      subTitle: "IoT Telemedicine Service Design",
      concept: "Remote Medical Diagnosis Service",
      content:
        "How might we seamlessly integrate the telemedical hardware and software to enable medical professionals to conduct more precise diagnoses and enhance communication experiences?",
    },
    {
      id: "utech",
      imgURL: img_project_06,
      title: "UTech",
      subTitle: "Universal Design for Urine Analysis Toilet",
      concept: "Operation Process for All-Age",
      content:
        "How might we design a clear and intuitive user journey, enabling various users to operate the urine analysis toilet within 10 secs toileting time?",
    },
  ];

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
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {"placeholder" in project && project.placeholder ? (
                  <div>
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      subTitle={project.subTitle}
                      concept={project.concept}
                      content={project.content}
                    />
                  </div>
                ) : isLocked(project.id) ? (
                  <div
                    className={lockedCardClass}
                    onClick={() => openLock(project.id)}
                  >
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      subTitle={project.subTitle}
                      concept={project.concept}
                      content={project.content}
                    />
                    {lockOverlay}
                  </div>
                ) : (
                  <Link to={`/project/${project.id}`}>
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      subTitle={project.subTitle}
                      concept={project.concept}
                      content={project.content}
                    />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {passwordModal}
    </div>
  );
}
