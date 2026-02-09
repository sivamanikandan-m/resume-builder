import { useState } from "react";
import "../../styles/form.css";

const OptionalSectionForm = ({ resume, setResume }) => {
  const [heading, setHeading] = useState("");
  const [item, setItem] = useState("");

  const addSection = () => {
    if (!heading) return;

    setResume({
      ...resume,
      optionalSections: [...resume.optionalSections, { heading, items: [] }]
    });

    setHeading("");
  };

  const addItem = (index) => {
    if (!item) return;

    const updated = [...resume.optionalSections];
    updated[index].items.push(item);

    setResume({ ...resume, optionalSections: updated });
    setItem("");
  };

  return (
    <div className="form-card">
      <h2>Optional Sections</h2>

      <input placeholder="Section Title"
        value={heading}
        onChange={e => setHeading(e.target.value)} />

      <button onClick={addSection}>Add Section</button>

      {resume.optionalSections.map((sec, i) => (
        <div key={i} style={{ marginTop: 10 }}>
          <strong>{sec.heading}</strong>

          <input placeholder="Add item"
            value={item}
            onChange={e => setItem(e.target.value)} />

          <button onClick={() => addItem(i)}>Add Item</button>

          <ul>
            {sec.items.map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OptionalSectionForm;
