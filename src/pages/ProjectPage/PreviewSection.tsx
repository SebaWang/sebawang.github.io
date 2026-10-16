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
import img_mobility_card from "../../assets/img/img_project_mobility_card.jpg";
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
        "How might we make the NHS Jobs journey simpler and more inclusive for both candidates and NHS employers?",
      tags: ["Service Design & GDS Compliance"],
      placeholder: true,
    },
  ];

  // Hidden for now; remove the id from this list to show a card again
  const hiddenIds = ["ev-maintenance", "robotics-analysis"];

  // Array of project data
  const projects = [
    ...placeholderProjects.filter((p) => !hiddenIds.includes(p.id)),
    {
      id: "UoL",
      imgURL: img_project_placeholder,
      title: "Services Evaluation Using GDS Service Standard",
      content:
        "How might a university improve and evaluate recruitment and training services against the GDS Service Standard?",
      tags: ["Service Design & Evaluation"],
      // Not linked yet: shown like the placeholder cards until the page is ready
      placeholder: true,
    },
    {
      id: "mobility",
      imgURL: img_mobility_card,
      title: "Future Mobility Service and Strategy Transformation",
      content:
        "How might mobility services keep creating value when demand, infrastructure, and governing rules change in the post-AI era?",
      tags: ["Foresight & Scenario Planning"],
      highlights: [
        "Applied scenario planning and design thinking to reframe mobility strategy and services beyond the technology roadmap.",
        "Translated long-term uncertainty into scenarios that could be used to stress-test current decisions and expose trade-offs.",
        "Used service design to translate macro trends and signals into tangible changes in stakeholder roles, service relationships and value creation.",
      ],
    },
    {
      id: "finance",
      imgURL: img_project_02,
      title: "Co-designed Service for ADHD Financial Inclusion",
      content:
        "How might an evidence-based toolkit and course empower young ADHD adults to enhance financial management?",
      tags: ["Inclusive Service Design"],
      highlights: [
        "Built a digital tool and a physical learning course, co-designed with 14 individuals with ADHD across different age groups.",
        "Developed an inclusive design guidebook for financial service design and research, going beyond accessibility to encourage greater empathy.",
        "Inspired a partner charity to launch new financial management courses, with 250+ students.",
      ],
    },
    {
      id: "mob",
      imgURL: img_project_01,
      title: "Workshops & Strategy Design for Future Environmental Policy",
      content:
        "How might future storytelling give the public and farmers a voice in future environmental policy discussion?",
      tags: ["Service Design with Gov"],
      highlights: [
        "Used foresight to build future services and artefacts that invite discussion with non-design audiences.",
        "Offered GDS an alternative engagement format, used as a case study for complex public policy research, lowering the barrier to understanding regulation.",
        "Empowered citizens and farmers to take part in early-stage policy and standards discussions.",
      ],
    },
    {
      id: "epq",
      imgURL: img_project_03,
      title: "Learning Journey Design with Sensitive Groups",
      content:
        "How might a participatory format provide greater trust and the confidence to shape an alternative learning journey?",
      tags: ["Social Service Design"],
      highlights: [
        "Developed an Extended Project Qualification course for learners with addiction, mental health challenges, or criminal justice backgrounds.",
        "Used participatory design to increase non-design stakeholders' ownership and confidence in mapping their as-is journeys and future expectations.",
        "Delivered a full A-level curriculum and a learning journal toolkit, giving learners a credentialed route back into education and work.",
      ],
    },
    {
      id: "advantech",
      imgURL: img_project_05,
      title: "Integrated Tele-health Solution",
      content:
        "How might we integrate telemedical devices and software into isolation inpatient and remote outpatient services?",
      tags: ["Medical IoT Service Design"],
      highlights: [
        "Worked with 20 medical experts to integrate telemedical hardware and software across dermatology, ophthalmology, otolaryngology and ICU services.",
        "Mapped stakeholder power and conflicting benefits to align executives, front-line staff, doctors and patients.",
        "Deployed to 6 hospitals and 300+ isolation wards across Taiwan in 2021.",
      ],
    },
    {
      id: "medicy",
      imgURL: img_project_04,
      title: "MEDICY: NFT News Platform",
      content:
        "How might we bring fragmented NFT trading information and communities into a hub that signposts traders?",
      tags: ["Web3 UX Design"],
      highlights: [
        "Shaped the Gen 2 roadmap for a leading Asian NFT project, with Medicy as its news and forum platform.",
        "Consolidated fragmented trading information into one trader-friendly platform to simplify NFT value evaluation.",
        "Attracted 20+ investors across Hong Kong, Singapore and Taiwan, with a 21% rise in quarterly transaction volume.",
      ],
    },
    {
      id: "utech",
      imgURL: img_project_06,
      title: "Hospital Urine Testing Solution",
      content:
        "How might we integrate urine testing into routine toilet use in hospitals to facilitate early detection and diagnosis?",
      tags: ["Medical Service Design"],
      highlights: [
        "Developed an innovative urine testing journey with physical and digital touchpoints, together with medical professionals.",
        "Designed a health management app for reviewing urine analysis results, rolled out with 3 teaching hospitals.",
        "Increased early detection of urinary tract infections and kidney stones by 16%.",
      ],
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
                      tags={"tags" in project ? project.tags : undefined}
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
                      tags={"tags" in project ? project.tags : undefined}
                      highlights={
                        "highlights" in project ? project.highlights : undefined
                      }
                    />
                    {lockOverlay}
                  </div>
                ) : (
                  <Link to={`/project/${project.id}`} className="block h-full">
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      content={project.content}
                      tags={"tags" in project ? project.tags : undefined}
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
