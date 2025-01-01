import React from 'react';
import '../styles/ProjectTable.css'; // Import the CSS for styling

const ProjectTable = () => {
  const projects = [
    {
      name: 'iNext - One Page Responsive ...',
      created: '14 July, 2021',
      deadline: '22 Aug, 2021',
      progress: 70,
      lead: <img src="/avatar1.jpeg" alt="John Doe" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['Alice', 'Bob'],
      status: 'INACTIVE',
    },
    {
      name: 'InfiniO 4.1',
      created: '14 July, 2021',
      deadline: '8 Aug, 2021',
      progress: 50,
      lead: <img src="/avatar2.jpeg" alt="Jane Smith" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['Alice', 'Bob'],
      status: 'ACTIVE',
    },
    {
      name: 'HR Management System',
      created: '20 July, 2021',
      deadline: '15 Sept, 2021', 
      progress: 85,
      lead: <img src="/avatar3.jpeg" alt="Sarah Wilson" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['Charlie', 'Diana'],
      status: 'ACTIVE',
    },
    {
      name: 'E-Commerce Platform',
      created: '1 Aug, 2021',
      deadline: '30 Sept, 2021',
      progress: 30,
      lead: <img src="/avatar4.jpeg" alt="Mike Johnson" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['Eve', 'Frank'],
      status: 'ACTIVE',
    },
    {
      name: 'Mobile Banking App',
      created: '10 Aug, 2021', 
      deadline: '20 Oct, 2021',
      progress: 15,
      lead: <img src="/avatar5.jpeg" alt="Lisa Anderson" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['George', 'Helen'],
      status: 'INACTIVE',
    },
    {
      name: 'Customer Portal v2.0',
      created: '5 Aug, 2021',
      deadline: '25 Sept, 2021',
      progress: 60,
      lead: <img src="/avatar6.jpeg" alt="David Miller" style={{width: "30px", height: "30px", borderRadius: "50%"}} />,
      team: ['Isaac', 'Julia'],
      status: 'ACTIVE',
    }
  ];

  return (
    <div className="project-table-container">
      <div className="head">
        <h2>Projects</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="clear-button">Clear</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Created</th>
            <th>Deadline</th>
            <th>Progress</th>
            <th>Lead</th>
            <th>Team</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.created}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                Completion with: {project.progress}%
              </td>
              <td>{project.lead}</td>
              <td>{project.team.join(', ')}</td>
              <td className={`status ${project.status.toLowerCase()}`}>
                {project.status}
              </td>
              <td>
                <button className="action-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable; 