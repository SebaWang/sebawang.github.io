import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectMBPage from "./pages/ProjectMBPage";
import ProjectFinancePage from "./pages/ProjectFinancePage";
import ProjectEPQPage from "./pages/ProjectEPQPage"
import ProjectMedicyPage from "./pages/ProjectMedicyPage"
import ProjectAdvantechPage from "./pages/ProjectAdvantechPage"
import ProjectUTechPage from "./pages/ProjectUTechPage"
import ContactPage from "./pages/ContactPage";

function App() {
  return (
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/mob" element={<ProjectMBPage />} />
        <Route path="/project/finance" element={<ProjectFinancePage />} />
        <Route path="/project/epq" element={<ProjectEPQPage />} />
        <Route path="/project/medicy" element={<ProjectMedicyPage />} />
        <Route path="/project/advantech" element={<ProjectAdvantechPage />} />
        <Route path="/project/utech" element={<ProjectUTechPage />} />
      </Routes>
  );
}

export default App;
