import React from 'react';
import '../styles/UserCards.css'; // Import the CSS for styling

const UserCards = () => {
  const users = [   
    {
      name: 'John Smith',
      title: 'CEO',
      company: 'vPro Infoweb LLC.',
      image: '/avatar1.jpeg', // Replace with actual image paths
    },
    {
      name: 'Hossein Shams',
      title: 'CEO',
      company: 'BT Technology',
      image: '/avatar2.jpeg',
    },
    {
      name: 'Maryam Amiri',
      title: 'CEO',
      company: 'Core Infoweb Pvt.',
      image: '/avatar3.jpeg',
    },
    {
      name: 'Tim Hank',
      title: 'CEO',
      company: 'AUR Tech LLC.',
      image: '/avatar4.jpeg',
    },
    // Add more user objects as needed
  ];

  return (
    <div className="user-cards-container">
      {users.map((user, index) => (
        <div className="user-card" key={index}>
          <img src={user.image} alt={user.name} className="user-image" />
          <h3>{user.name}</h3>
          <p>{user.title}</p>
          <p>{user.company}</p>
          <div className="button-group">
            <button className="view-profile">View Profile</button>
            <button className="message">Message</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards; 