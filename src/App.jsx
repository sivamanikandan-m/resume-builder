import { useEffect, useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";
import SkillsForm from "./components/forms/SkillsForm";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import ProjectsForm from "./components/forms/ProjectsForm";
import OptionalSectionForm from "./components/forms/OptionalSectionForm";
import ResumePreview from "./components/preview/ResumePreview";
import DownloadButton from "./components/DownloadButton";
import { loadResume, saveResume } from "./utils/storage";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const [resume, setResume] = useState({
    personal: {
      name: "",
      role: "",
      email: "",
      phone: "",
      address: "",
      github: "",
      linkedin: "",
      summary: ""
    },
    skills: [],
    education: [],
    experience: [],
    projects: [],
    optionalSections: [],
    showExperience: false,
    showProjects: false
  });

  useEffect(() => {
    const data = loadResume();
    if (data) setResume(data);
  }, []);

  useEffect(() => {
    saveResume(resume);
  }, [resume]);

  return (
    <div className="app">
      <Header />

      <div className="forms-section">
        <PersonalForm resume={resume} setResume={setResume} />
        <SkillsForm resume={resume} setResume={setResume} />
        <EducationForm resume={resume} setResume={setResume} />
        <ExperienceForm resume={resume} setResume={setResume} />
        <ProjectsForm resume={resume} setResume={setResume} />
        <OptionalSectionForm resume={resume} setResume={setResume} />
      </div>

      <div className="preview-section">
        <ResumePreview resume={resume} />
      </div>

      <DownloadButton />

      <Footer />
    </div>
  );

};

export default App;
