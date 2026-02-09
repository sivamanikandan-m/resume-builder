import "../../styles/form.css";

const PersonalForm = ({ resume, setResume }) => {
  const { personal } = resume;

  const handleChange = (e) => {
    setResume({
      ...resume,
      personal: { ...personal, [e.target.name]: e.target.value }
    });
  };

  return (
    <div className="form-card">
      <h2>Personal Details</h2>

      <div className="form-row">
        <div className="form-group">
          <input name="name" placeholder="Full Name" value={personal.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input name="role" placeholder="Role" value={personal.role} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input name="email" placeholder="Email" value={personal.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input name="phone" placeholder="Phone" value={personal.phone} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <input name="address" placeholder="Address" value={personal.address} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <input name="github" placeholder="GitHub URL" value={personal.github} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <input name="linkedin" placeholder="LinkedIn URL" value={personal.linkedin} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <textarea name="summary" placeholder="Professional Summary" value={personal.summary} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
