import React from 'react';
import '../styles/TeamCards.css'; // Import the CSS for styling

const TeamCards = () => {
  const teams = [
    {
      name: 'Web Development Team',
      lead: 'Susie Willis',
      role: 'Team Lead',
      skills: ['ReactJS', 'Angular', 'VueJS'],
      employees: ['/avatar1.jpeg', '/avatar2.jpeg', '/avatar3.jpeg'],
      image: '/avatar1.jpeg', // Replace with actual image paths
    },
    {
      name: 'Marketing Team',
      lead: 'Debra Stewart',
      role: 'Team Lead',
      skills: ['Social', 'HTML/CSS', 'Twitter'],
      employees: ['/avatar4 .jpeg', '/avatar2.jpeg', '/avatar6.jpeg'],
      image: '/avatar2.jpeg',
    },
    {
      name: 'Sales Team',
      lead: 'Erin Gonzales',
      role: 'Team Lead',
      skills: [],
      employees: ['/avatar4.jpeg', '/avatar1.jpeg', '/avatar6.jpeg' ],
      image: '/avatar3.jpeg',
    },
    {
      name: 'Web Designing Team',
      lead: 'Marshall Nichols',
      role: 'Team Lead',
      skills: [],
      employees: ['/avatar1.jpeg', '/avatar5.jpeg', '/avatar3.jpeg' ],
      image: '/avatar4.jpeg',
    },
    // Add more team objects as needed
  ];

  return (
    <div className="team-cards-container">
      {teams.map((team, index) => (
        <div className="team-card" key={index}>
          <img src={team.image} alt={team.lead} className="team-lead-image" />
          <h3>{team.name}</h3>
          <p>{team.lead}</p>
          <p>{team.role}</p>
          {team.skills.length > 0 && (
            <div className="skills">
              {team.skills.map((skill, idx) => (
                <span key={idx} className="skill">{skill}</span>
              ))}
            </div>
          )}
          {team.employees.length > 0 && (
            <p>Employees: {team.employees.join(', ')}</p>
          )}
          <p>{team.employees.length > 0 ? `1 Lead, ${team.employees.length} Employees` : '1 Lead'}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamCards; 