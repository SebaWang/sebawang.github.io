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
      id: "ev-maintenance",
      imgURL: img_project_placeholder,
      title: "EV VIP Maintenance Service",
      content:
        "How might a dealership deliver a VIP-level EV maintenance experience across online and offline touchpoints, with backstage operations that can actually support it?",
      placeholder: true,
    },
    {
      id: "futures-forums",
      imgURL: img_project_placeholder,
      title: "Foresight Forum and Workshops",
      content:
        "How might governments and industries rehearse long-term futures together, so that scenarios reshape organisational strategy and the services behind it?",
      placeholder: true,
    },
    {
      id: "robotics-analysis",
      imgURL: img_project_placeholder,
      title: "30-year Robotics Trends",
      content:
        "How might three decades of robotics news reveal the competing assumptions about autonomy, labour and care that shape how societies imagine robots?",
      placeholder: true,
    },
    {
      id: "nhs-jobs",
      imgURL: img_project_placeholder,
      title: "NHS Jobs Journey Improvement",
      content:
        "How might NHS Jobs make applying and recruiting simpler across online and offline touchpoints, with improvements tested against GDS service assessment?",
      placeholder: true,
    },
    {
      id: "staff-services",
      imgURL: img_project_placeholder,
      title: "Design with GDS Standards",
      content:
        "How might a university improve recruitment and training services for its research staff, and evaluate them against GDS service standards?",
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
      content:
        "How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?",
    },
    {
      id: "mob",
      imgURL: img_project_01,
      title: "Workshops & Strategy Design for Future Policy with GDS",
      content:
        "How can future storytelling give the public and farmers a voice in future environmental policy discussion?",
      highlights: [
        "Used foresight to build future services and artefacts that invite discussion.",
        "Offered an alternative engagement format for complex public policy research, lowering the barrier to understanding regulation.",
        "Empowered citizens and farmers to take part in early-stage policy and standards discussions.",
      ],
    },
    {
      id: "epq",
      imgURL: img_project_03,
      title: "EPQ Learning Journey",
      content:
        "How might universities offer motivating sessions for individuals with addiction and former offenders to complete A-level qualifications and reintegrate into the workforce smoothly?",
    },
    {
      id: "advantech",
      imgURL: img_project_05,
      title: "Integrated Tele-health Solution",
      content:
        "How might we seamlessly integrate the telemedical hardware and software to enable medical professionals to conduct more precise diagnoses and enhance communication experiences?",
    },
    {
      id: "medicy",
      imgURL: img_project_04,
      title: "MEDICY: NFT News Fantasy",
      content:
        "How might NFT traders simplify the process of NFT values evaluation without navigating multiple platforms and piecing together fragmented information?",
    },
    {
      id: "utech",
      imgURL: img_project_06,
      title: "UTech",
      content:
        "How might we design a clear and intuitive user journey, enabling various users to operate the urine analysis toilet within 10 secs toileting time?",
    },
  ];

  return (
    <div className="bg-[#D9D9D9]">
      <div className="container mx-auto pt-48 text-center">
        <p className="tracking-[6px] text-[#EA5514] text-[24px] font-semibold">
          WORKS
        </p>
        <div className="w-[22px] border-b-[6px] border-[#EA5514] h-[12px] mx-auto mt-2">
          &nbsp;
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20 pb-32">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {"placeholder" in project && project.placeholder ? (
                  <div className="h-full">
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
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
                      content={project.content}
                    />
                    {lockOverlay}
                  </div>
                ) : (
                  <Link to={`/project/${project.id}`} className="block h-full">
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      content={project.content}
                      highlights={
                        "highlights" in project ? project.highlights : undefined
                      }
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
