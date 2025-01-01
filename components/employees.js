import React, { useState } from 'react';
import { FaEnvelope, FaPencilAlt, FaTrash } from 'react-icons/fa';
import '../styles/employees.css';

const Employees = () => {
  const [employees] = useState([
    {
      id: 'LA-0215',
      avatar: '/avatar1.jpeg',
      name: 'Marshall Nichols',
      email: 'marshall-n@gmail.com',
      phone: '+ 264-625-2583',
      joinDate: '24 Jun, 2015',
      role: 'Web Designer',
      salary: 589
    },
    {
      id: 'LA-0216',
      avatar: '/avatar2.jpeg',
      name: 'Susie Willis',
      email: 'sussie-w@gmail.com',
      phone: '+ 264-625-2583',
      joinDate: '28 Jun, 2015',
      role: 'Web Developer',
      salary: 650
    },
    // ... add other employees data
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);

  return (
    <div className="employees-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="clear-btn" onClick={() => setSearchTerm('')}>
          Clear
        </button>
      </div>

      <table className="employees-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Phone</th>
            <th>Join Date</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.avatar} alt={employee.name} className="avatar" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.id}</td>
              <td>{employee.phone}</td>
              <td>{employee.joinDate}</td>
              <td>{employee.role}</td>
              <td>${employee.salary}</td>
              <td className="actions">
                <button className="action-btn email">
                  <FaEnvelope />
                </button>
                <button className="action-btn edit">
                  <FaPencilAlt />
                </button>
                <button className="action-btn delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Rows per page: </span>
        <select value={rowsPerPage}>
          <option value={10}>10</option>
        </select>
        <span>1-10 of 13</span>
        <div className="pagination-controls">
          <button disabled>&lt;&lt;</button>
          <button disabled>&lt;</button>
          <button>&gt;</button>
          <button>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Employees; 