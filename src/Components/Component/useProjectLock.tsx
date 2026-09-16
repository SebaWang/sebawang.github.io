import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CORRECT_PASSWORD = "2024";
const DEFAULT_LOCKED = ["medicy", "advantech", "utech"];

// Wrapper for a locked card: the overlay sits on top of the card, so the hover
// lift has to live here instead of on the card itself
export const lockedCardClass =
  "relative cursor-pointer rounded-md hover:scale-[1.05] hover:shadow-2xl duration-300";

// Shared password gate for locked projects: used by the /project page and the mobile list on the landing page
export default function useProjectLock() {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [lockedProjects, setLockedProjects] = useState(DEFAULT_LOCKED);
  const [selectedProject, setSelectedProject] = useState("");
  const navigate = useNavigate();

  const isLocked = (projectId: string) => lockedProjects.includes(projectId);

  const openLock = (projectId: string) => {
    setSelectedProject(projectId);
    setPasswordModalOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === CORRECT_PASSWORD) {
      setPasswordModalOpen(false);
      setLockedProjects((prev) => prev.filter((proj) => proj !== selectedProject));
      navigate(`/project/${selectedProject}`);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const lockOverlay: ReactElement = (
    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50 flex items-center justify-center">
      <FontAwesomeIcon icon={faLock} className="text-white text-3xl" />
    </div>
  );

  const passwordModal: ReactElement | null = isPasswordModalOpen ? (
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
  ) : null;

  return { isLocked, openLock, lockOverlay, passwordModal };
}
