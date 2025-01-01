import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import '../styles/AttendanceTable.css';

const AttendanceTable = () => {
  const attendanceData = [
    {
      employee: "John Doe",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, false, true, true, true, true, false, true, true],
    },
    {
      employee: "Tim Hank",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
      employee: "Frank Camly",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
      employee: "Gary Camara",
      days: [true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true,true,true],
    },
    {
      employee: "Fidel Tonn",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true,true,true],
    },
    {
      employee: "Maryam Amiri",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, false, true, true, true, true, false,true,true],
    },
    {
      employee: "Hossein Shams",
      days: [true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, false, true, true, true, true, false,true,true],
    },
  ];

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>
      <div className="breadcrumb">
        <a href="/employees">Employees</a> / <span>Attendance</span>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Employee</th>
            {Array.from({ length: 23 }, (_, i) => (
              <th key={i}>{i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((row, index) => (
            <tr key={index}>
              <td>{row.employee}</td>
              {row.days.map((present, dayIndex) => (
                <td key={dayIndex} className={present ? "present" : "absent"}>
                  {present ? <FaCheck /> : <FaTimes />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
