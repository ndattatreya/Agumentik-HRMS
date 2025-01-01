import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/departments.css';

const Departments = () => {
  const [departments] = useState([
    { id: 1, name: 'Web Development', head: 'John Smith', employees: 305 },
    { id: 2, name: 'Marketing', head: 'Maryam Amiri', employees: 26 },
    { id: 3, name: 'App Development', head: 'Frank Camly', employees: 38 },
    { id: 4, name: 'Support', head: 'Gary Camara', employees: 45 },
    { id: 5, name: 'Accounts', head: 'Fidel Tonn', employees: 8 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);

  return (
    <div className="departments-container">
      <div className="header">
        <h2>Department List</h2>
        <button className="add-new">Add New</button>
      </div>

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

      <table className="departments-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Department Head</th>
            <th>Total Employee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>{dept.name}</td>
              <td>{dept.head}</td>
              <td>{dept.employees}</td>
              <td>
                <button className="edit-btn">
                  <FontAwesomeIcon icon={faEdit} />

                </button>
                <button className="delete-btn">
                <FontAwesomeIcon icon={faTrash} />
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
        <span>1-5 of 5</span>
        <div className="pagination-controls">
          <button disabled>&lt;&lt;</button>
          <button disabled>&lt;</button>
          <button disabled>&gt;</button>
          <button disabled>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Departments;
