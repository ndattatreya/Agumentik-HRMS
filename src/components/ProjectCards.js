import React from 'react';
import '../styles/ProjectCards.css'; // Import the CSS for styling

const ProjectCards = () => {
  const projects = [
    {
      title: 'iNext - Responsive Template',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      progress: 70,
      team: ['Alice', 'Bob', 'Charlie'],
      image: '/avatar1.jpeg', // Replace with actual image paths
    },
    {
      title: 'Wordpress - Theme Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      progress: 50,
      team: ['Alice', 'Diana'],
      image: '/avatar2.jpeg',
    },
    {
      title: 'Logo Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      progress: 30,
      team: ['Eve'],
      image: '/avatar3.jpeg',
    },
    {
      title: 'iNext - Responsive Template',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      progress: 90,
      team: ['Alice', 'Bob', 'Charlie'],
      image: '/avatar4.jpeg',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="project-cards-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <p>Team: {project.team.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards; 