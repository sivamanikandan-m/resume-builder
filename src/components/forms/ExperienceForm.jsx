import { useState } from "react";
import "../../styles/form.css";

const ExperienceForm = ({ resume, setResume }) => {
  const [exp, setExp] = useState({
    role: "",
    company: "",
    duration: "",
    description: ""
  });

  const addExperience = () => {
    if (!exp.role || !exp.company) return;

    setResume({
      ...resume,
      experience: [...resume.experience, exp]
    });

    setExp({ role: "", company: "", duration: "", description: "" });
  };

  const removeExperience = (index) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-card">
      <div className="form-title">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={resume.showExperience}
            onChange={(e) =>
              setResume({ ...resume, showExperience: e.target.checked })
            }
          />
          <span>Experience</span>
        </label>
      </div>

      {resume.showExperience && (
        <>
          <div className="form-row">
            <div className="form-group">
              <input
                placeholder="Role"
                value={exp.role}
                onChange={(e) => setExp({ ...exp, role: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => setExp({ ...exp, company: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => setExp({ ...exp, duration: e.target.value })}
              />
            </div>

            <div className="form-group full-width">
              <textarea
                placeholder="Description"
                value={exp.description}
                onChange={(e) =>
                  setExp({ ...exp, description: e.target.value })
                }
              />
            </div>
          </div>

          <button onClick={addExperience}>Add Experience</button>

          {resume.experience.map((e, i) => (
            <div key={i} className="list-item">
              {e.role} – {e.company}
              <button className="secondary" onClick={() => removeExperience(i)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>

  );
};

export default ExperienceForm;
