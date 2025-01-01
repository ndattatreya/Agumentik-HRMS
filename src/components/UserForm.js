import React, { useState } from 'react';
import '../styles/UserForm.css'; // Import the CSS for styling

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    clientId: '',
    address: '',
    permissions: {
      projects: { read: true, write: true, delete: false },
      tasks: { read: true, write: true, delete: false },
      chat: { read: true, write: false, delete: false },
      estimates: { read: false, write: false, delete: false },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (module, permission) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [module]: {
          ...prev.permissions[module],
          [permission]: !prev.permissions[module][permission],
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-groups">
        <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username*" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email ID*" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password*" value={formData.confirmPassword} onChange={handleChange} required />
        <input type="text" name="mobileNo" placeholder="Mobile No" value={formData.mobileNo} onChange={handleChange} />
        <input type="text" name="clientId" placeholder="Client ID*" value={formData.clientId} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      </div>

      <div className="permissions-section">
        <h3>Module Permission</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>READ</th>
              <th>WRITE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(formData.permissions).map((module) => (
              <tr key={module}>
                <td>{module.charAt(0).toUpperCase() + module.slice(1)}</td>
                <td>
                  <input type="checkbox" checked={formData.permissions[module].read} onChange={() => handlePermissionChange(module, 'read')} />
                </td>
                <td>
                  <input type="checkbox" checked={formData.permissions[module].write} onChange={() => handlePermissionChange(module, 'write')} />
                </td>
                <td>
                  <input type="checkbox" checked={formData.permissions[module].delete} onChange={() => handlePermissionChange(module, 'delete')} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default UserForm; 