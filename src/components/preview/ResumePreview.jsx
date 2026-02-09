import "../../styles/preview.css";

const ResumePreview = ({ resume }) => {
  const {
    personal,
    skills,
    education,
    experience,
    projects,
    optionalSections,
    showExperience,
    showProjects
  } = resume;

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: 10 }}>Preview</h2>
      <div className="pdf-wrapper">
        <div id="resume-preview" className="resume">
          <h1>{personal.name}</h1>
          <h3>{personal.role}</h3>

          <p>
            {personal.email} | {personal.phone}
          </p>

          <p>
            {personal.github && personal.github}
            {personal.linkedin && ` | ${personal.linkedin}`}
          </p>

          {personal.summary && (
            <section>
              <h2>Professional Summary</h2>
              <p>{personal.summary}</p>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2>Skills</h2>
              <ul>
                {skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2>Education</h2>
              {education.map((e, i) => (
                <p key={i}>
                  <strong>{e.degree}</strong> – {e.institute} ({e.year})
                </p>
              ))}
            </section>
          )}

          {/* ✅ EXPERIENCE ONLY IF ENABLED */}
          {showExperience && experience.length > 0 && (
            <section>
              <h2>Experience</h2>
              {experience.map((e, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <strong>{e.role}</strong> – {e.company} ({e.duration})
                  <p>{e.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* ✅ PROJECTS ONLY IF ENABLED */}
          {showProjects && projects.length > 0 && (
            <section>
              <h2>Projects</h2>
              {projects.map((p, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <strong>{p.title}</strong> – {p.tech}
                  <p>{p.desc}</p>
                  {p.link && <p>{p.link}</p>}
                </div>
              ))}
            </section>
          )}

          {optionalSections.map((sec, i) => (
            sec.items.length > 0 && (
              <section key={i}>
                <h2>{sec.heading}</h2>
                <ul>
                  {sec.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
