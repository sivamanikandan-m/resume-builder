import { useState } from "react";
import "../../styles/form.css";

const ProjectsForm = ({ resume, setResume }) => {
  const [proj, setProj] = useState({
    title: "",
    tech: "",
    desc: "",
    link: ""
  });

  const addProject = () => {
    if (!proj.title) return;

    setResume({
      ...resume,
      projects: [...resume.projects, proj]
    });

    setProj({ title: "", tech: "", desc: "", link: "" });
  };

  const removeProject = (index) => {
    setResume({
      ...resume,
      projects: resume.projects.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-card">
      <div className="form-title">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={resume.showProjects}
            onChange={(e) =>
              setResume({ ...resume, showProjects: e.target.checked })
            }
          />
          <span>Projects</span>
        </label>
      </div>

      {resume.showProjects && (
        <>
          <div className="form-row">
            <div className="form-group">
              <input
                placeholder="Project Title"
                value={proj.title}
                onChange={(e) =>
                  setProj({ ...proj, title: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Tech Stack"
                value={proj.tech}
                onChange={(e) =>
                  setProj({ ...proj, tech: e.target.value })
                }
              />
            </div>

            <div className="form-group full-width">
              <textarea
                placeholder="Description"
                value={proj.desc}
                onChange={(e) =>
                  setProj({ ...proj, desc: e.target.value })
                }
              />
            </div>

            <div className="form-group full-width">
              <input
                placeholder="GitHub Link"
                value={proj.link}
                onChange={(e) =>
                  setProj({ ...proj, link: e.target.value })
                }
              />
            </div>
          </div>

          <button onClick={addProject}>Add Project</button>

          {resume.projects.map((p, i) => (
            <div key={i} className="list-item">
              {p.title}
              <button className="secondary" onClick={() => removeProject(i)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>

  );
};

export default ProjectsForm;
