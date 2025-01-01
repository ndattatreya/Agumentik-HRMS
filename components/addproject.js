import React, { useState } from "react";
import "../styles/addproject.css";

const AddProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    startDate: "",
    endDate: "",
    rate: "",
    rateType: "",
    projectPriority: "",
    teamLead: "",
    team: "",
    projectDescription: "",
    projectImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, projectImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name*</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            placeholder="Project Name*"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select Client Name</label>
            <select
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
            >
              <option value="">-- Select Client Name --</option>
              <option value="Client1">Client 1</option>
              <option value="Client2">Client 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rate In Dollar*</label>
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleInputChange}
              placeholder="Rate In Dollar*"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Rate Type</label>
            <select
              name="rateType"
              value={formData.rateType}
              onChange={handleInputChange}
            >
              <option value="">-- Select Rate Type --</option>
              <option value="Hourly">Hourly</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select Project Priority</label>
            <select
              name="projectPriority"
              value={formData.projectPriority}
              onChange={handleInputChange}
            >
              <option value="">-- Select Project Priority --</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Team</label>
            <select
              name="team"
              value={formData.team}
              onChange={handleInputChange}
            >
              <option value="">-- Select Team --</option>
              <option value="Team1">Team 1</option>
              <option value="Team2">Team 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Team Lead</label>
            <select
              name="teamLead"
              value={formData.teamLead}
              onChange={handleInputChange}
            >
              <option value="">-- Select Team Lead --</option>
              <option value="Lead1">Lead 1</option>
              <option value="Lead2">Lead 2</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Project Image</label>
          <input
            type="file"
            name="projectImage"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label>Project Description</label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            placeholder="Enter project description here..."
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-create">Create</button>
          <button type="button" className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;