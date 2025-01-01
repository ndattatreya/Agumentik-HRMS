import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/TicketDashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TicketDashboard = () => {
  const ticketStats = {
    total: 2078,
    resolved: 1278,
    pending: 521,
    responded: 978,
  };

  const ticketData = {
    labels: ['Resolved', 'Pending', 'Responded'],
    datasets: [
      {
        data: [ticketStats.resolved, ticketStats.pending, ticketStats.responded],
        backgroundColor: ['#4caf50', '#ff9800', '#2196F3'],
        hoverBackgroundColor: ['#45a049', '#ffb74d', '#42a5f5'],
      },
    ],
  };

  const ticketOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const tickets = [
    {
      id: 231,
      assignedBy: 'Airi Satou',
      assignedTo: 'Angelica Ramos', 
      email: 'airi@example.com',
      subject: 'New Code Update...',
      status: 'PENDING',
      date: '24-04-2021',
    },
    {
      id: 235,
      assignedBy: 'Brenden Wagner',
      assignedTo: 'Ashton Cox',
      email: 'brenden@example.com', 
      subject: 'New Code Update...',
      status: 'COMPLETE',
      date: '24-04-2021',
    },
    {
      id: 236,
      assignedBy: 'Cedric Kelly',
      assignedTo: 'Bradley Greer',
      email: 'cedric@example.com',
      subject: 'Bug Fix Required',
      status: 'PENDING',
      date: '25-04-2021',
    },
    {
      id: 237,
      assignedBy: 'Dai Rios',
      assignedTo: 'Cara Stevens',
      email: 'dai@example.com',
      subject: 'Feature Request',
      status: 'COMPLETE',
      date: '26-04-2021',
    },
    {
      id: 238,
      assignedBy: 'Finn Camacho',
      assignedTo: 'Caesar Vance',
      email: 'finn@example.com',
      subject: 'Database Issue',
      status: 'PENDING',
      date: '27-04-2021',
    }
  ];

  return (
    <div className="ticket-dashboard">
      <div className="charts-container">
        <div className="chart">
          <h3>Ticket Status Distribution (Pie Chart)</h3>
          <Pie data={ticketData} options={ticketOptions} />
        </div>
        <div className="chart">
          <h3>Ticket Status Distribution (Donut Chart)</h3>
          <Doughnut data={ticketData} options={ticketOptions} />
        </div>
      </div>

      <h3>Support & Ticket List</h3>
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <button className="clear-button">Clear</button>
      </div>

      <table className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Assign By</th>
            <th>Assign To</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.assignedBy}</td>
              <td>{ticket.assignedTo}</td>
              <td>{ticket.email}</td>
              <td>{ticket.subject}</td>
              <td className={ticket.status === 'PENDING' ? 'pending' : 'complete'}>
                {ticket.status}
              </td>
              <td>{ticket.date}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketDashboard; 