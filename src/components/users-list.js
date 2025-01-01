import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import '../styles/users-list.css';

const UsersList = () => {
  const [users] = useState([
    {
      id: 1,
      avatar: '/avatar1.jpeg',
      name: 'Marshall Nichols',
      email: 'marshall-n@gmail.com',
      status: 'SUPER ADMIN',
      createdDate: '24 Jun, 2015',
      role: 'CEO and Founder'
    },
    {
      id: 2,
      avatar: '/avatar2.jpeg',
      name: 'Susie Willis',
      email: 'sussie-w@gmail.com',
      status: 'ADMIN',
      createdDate: '28 Jun, 2015',
      role: 'Team Lead'
    },
    {
      id: 3,
      avatar: '/avatar1.jpeg',
      name: 'Marshall Nichols',
      email: 'marshall-n@gmail.com',
      status: 'ADMIN',
      createdDate: '24 Jun, 2015',
      role: 'Team Lead'
    },
    {
      id: 4,
      avatar: '/avatar3.jpeg',
      name: 'Erin Gonzales',
      email: 'Erinonzales@gmail.com',
      status: 'EMPLOYEE',
      createdDate: '21 July, 2015',
      role: 'Web Developer'
    },
    {
      id: 5,
      avatar: '/avatar4.jpeg',
      name: 'Ava Alexander',
      email: 'alexander@gmail.com',
      status: 'HR ADMIN',
      createdDate: '21 July, 2015',
      role: 'HR'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'SUPER ADMIN': return 'super-admin';
      case 'ADMIN': return 'admin';
      case 'EMPLOYEE': return 'employee';
      case 'HR ADMIN': return 'hr-admin';
      default: return '';
    }
  };

  return (
    <div className="users-list-container">
      <div className="heade">
        <h2>Users List</h2>
        <button className="add-user-btn">Add User</button>
      </div>

      <div className="s-bar">
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

      <table className="users-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} alt={user.name} className="avatar" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`status-badge ${getStatusBadgeClass(user.status)}`}>
                  {user.status}
                </span>
              </td>
              <td>{user.createdDate}</td>
              <td>{user.role}</td>
              <td className="actions">
                {user.status !== 'SUPER ADMIN' && (
                  <>
                    <button className="action-btn edit">
                      <FaPencilAlt />
                    </button>
                    <button className="action-btn delete">
                      <FaTrash />
                    </button>
                  </>
                )}
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

export default UsersList; 