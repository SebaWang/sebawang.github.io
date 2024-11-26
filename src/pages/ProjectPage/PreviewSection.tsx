import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectPreviewCard from "./ProjectPreviewCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import img_project_03 from "../../assets/img/img_project_cover_03.jpg";
import img_project_04 from "../../assets/img/img_project_cover_04.png";
import img_project_05 from "../../assets/img/img_project_cover_06.jpg";
import img_project_06 from "../../assets/img/img_project_cover_05.png";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PreviewSection(): ReactElement {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [lockedProjects, setLockedProjects] = useState(["medicy", "advantech", "utech"]);
  const [selectedProject, setSelectedProject] = useState("");
  const navigate = useNavigate();

  const correctPassword = "2024";

  const handleLockedProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setPasswordModalOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      setPasswordModalOpen(false);
      setLockedProjects((prev) => prev.filter((proj) => proj !== selectedProject));
      navigate(`/project/${selectedProject}`);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  // Array of project data
  const projects = [
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
            const isLocked = lockedProjects.includes(project.id);

            return (
              <div key={project.id}>
                {isLocked ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleLockedProjectClick(project.id)}
                  >
                    <ProjectPreviewCard
                      imgURL={project.imgURL}
                      title={project.title}
                      subTitle={project.subTitle}
                      concept={project.concept}
                      content={project.content}
                    />
                    {/* Overlay with lock icon */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <FontAwesomeIcon icon={faLock} className="text-white text-3xl" />
                    </div>
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

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="mb-4 text-xl font-semibold">Enter Password</h3>
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded w-full mb-4"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              className="bg-[#EA5514] text-white px-4 py-2 rounded"
              onClick={handlePasswordSubmit}
            >
              Submit
            </button>
            <button
              className="ml-2 text-gray-600 underline"
              onClick={() => setPasswordModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
