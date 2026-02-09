import { useState } from "react";
import "../../styles/form.css";

const SkillsForm = ({ resume, setResume }) => {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;
    setResume({ ...resume, skills: [...resume.skills, skill.trim()] });
    setSkill("");
  };

  return (
    <div className="form-card">
      <h2>Skills</h2>
      <input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Add skill" />
      <button onClick={addSkill}>Add</button>

      {resume.skills.map((s, i) => (
        <div key={i} className="list-item">
          {s}
          <button onClick={() => setResume({ ...resume, skills: resume.skills.filter((_, idx) => idx !== i) })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillsForm;
