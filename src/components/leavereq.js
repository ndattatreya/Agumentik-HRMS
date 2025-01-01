import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "../styles/leavereq.css";

const LeaveRequest = () => {
  const employeeData = [
    {
      avatar: "/avatar1.jpeg",
      name: "Marshall Nichols",
      id: "LA-0215",
      leaveType: "Casual Leave",
      date: "24 July, 2021 to 26 July, 2021",
      reason: "Going to Family Function",
    },
    {
      avatar: "/avatar2.jpeg",
      name: "Susie Willis",
      id: "LA-0216",
      leaveType: "Casual Leave",
      date: "21 July, 2021 to 26 July, 2021",
      reason: "Attend Birthday party",
    },
    {
      avatar: "/avatar1.jpeg",
      name: "Marshall Nichols",
      id: "LA-0215",
      leaveType: "Medical Leave",
      date: "20 July, 2021 to 22 July, 2021",
      reason: "Going to Development Course",
    },
    {
      avatar: "/avatar3.jpeg",
      name: "Debra Stewart",
      id: "LA-0218",
      leaveType: "Casual Leave",
      date: "11 Aug, 2021 to 21 Aug, 2021",
      reason: "Going to Holiday",
    },
  ];

  return (
    <div className="leave-request-container">
      <h2>Leave Request</h2>
      <div className="header-actions">
        <button className="add-leave-btn">Add Leave</button>
        <div className="search-clear-container">
          <input type="text" placeholder="Search here..." />
          <button className="clear-btn">Clear</button>
        </div>
      </div>
      <table className="employee-list-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Leave Type</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index}>
              <td>
                <img src={employee.avatar} alt={employee.name} className="avatar" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.leaveType}</td>
              <td>{employee.date}</td>
              <td>{employee.reason}</td>
              <td>
                <button className="action-btn approve-btn">
                  <FaCheck />
                </button>
                <button className="action-btn reject-btn">
                  <FaTimes />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Rows per page:</span>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <span>1-4 of 4</span>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default LeaveRequest;
