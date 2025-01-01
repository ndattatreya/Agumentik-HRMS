import React from 'react';
import PropTypes from 'prop-types';
import '../styles/allemp.css';
import Sidebar from './sidebar';
import { FaEdit, FaTrash } from "react-icons/fa";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="employee-table-container">
    <Sidebar />
      <h1>All Employees</h1>
      <div className="actions">
        <button className="add-new">Add New</button>
        <div>
        <input type="text" className="search-input" placeholder="Search here..." />
        <button className="clear">Clear</button>
        </div>
      </div>
      <table className="employee-tables">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Phone</th>
            <th>Join Date</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>
                  <img src={employee.avatar} alt="Avatar" className="avatar" />
                  {employee.name}
                </td>
                <td>{employee.email}</td>
                <td>{employee.employeeId}</td>
                <td>{employee.phone}</td>
                <td>{employee.joinDate}</td>
                <td>{employee.role}</td>
                <td>
                  <button className="edit"><FaEdit /></button>
                  <button className="delete"><FaTrash /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Define PropTypes for the EmployeeTable component
EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      employeeId: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      joinDate: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};

EmployeeTable.defaultProps = {
  employees: []
};

// Sample employee data
const employeesData = [
  {
    name: 'Marshall Nichols',
    email: 'marshall-n@gmail.com',
    employeeId: 'LA-0215',
    phone: '+264-625-2583',
    joinDate: '24 Jun, 2015',
    role: 'Web Designer',
    avatar: "/avatar1.jpeg"
  },
  {
    name: 'Susie Willis',
    email: 'susie-w@gmail.com',
    employeeId: 'LA-0216',
    phone: '+264-625-2583',
    joinDate: '28 Jun, 2015',
    role: 'Web Developer',
    avatar: "/avatar2.jpeg"
  },
  {
    name: 'Debra Stewart',
    email: 'debra@gmail.com',
    employeeId: 'LA-0218',
    phone: '+264-625-2583',
    joinDate: '21 July, 2015',
    role: 'Web Developer',
    avatar: 'avatar3.jpeg'
  },
  {
    name: 'Francisco Vasquez',
    email: 'francis-v@gmail.com',
    employeeId: 'LA-0222',
    phone: '+264-625-2583',
    joinDate: '18 Jan, 2016',
    role: 'Team Leader',
    avatar: 'avatar4.jpeg'
  },
  {
    name: 'Jane Hunt',
    email: 'jane-hunt@gmail.com',
    employeeId: 'LA-0232',
    phone: '+264-625-2583',
    joinDate: '08 Mar, 2016',
    role: 'Android Developer',
    avatar: 'avatar5.jpeg'
  },
  {
    name: 'Darryl Day',
    email: 'darryl.day@gmail.com',
    employeeId: 'LA-0233',
    phone: '+264-625-2583',
    joinDate: '13 Nov, 2016',
    role: 'iOS Developer',
    avatar: 'avatar6.jpeg'
  }
];

// Example usage of EmployeeTable with sample data
const App = () => {
  return (
    <EmployeeTable employees={employeesData} />
  );
};

export default App;
