import { useState } from "react";
import "../../styles/form.css";

const EducationForm = ({ resume, setResume }) => {
  const [edu, setEdu] = useState({
    degree: "",
    institute: "",
    year: ""
  });

  const addEducation = () => {
    if (!edu.degree || !edu.institute) return;

    setResume({
      ...resume,
      education: [...resume.education, edu]
    });

    setEdu({ degree: "", institute: "", year: "" });
  };

  const removeEducation = (index) => {
    setResume({
      ...resume,
      education: resume.education.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-card">
      <h2>Education</h2>

      <div className="form-row">
        <div className="form-group">
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Institute"
            value={edu.institute}
            onChange={(e) => setEdu({ ...edu, institute: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) => setEdu({ ...edu, year: e.target.value })}
          />
        </div>
      </div>

      <button onClick={addEducation}>Add</button>

      {/* ✅ Prefilled items shown HERE */}
      {resume.education.map((e, i) => (
        <div key={i} className="list-item">
          {e.degree} – {e.institute} ({e.year})
          <button className="secondary" onClick={() => removeEducation(i)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;
