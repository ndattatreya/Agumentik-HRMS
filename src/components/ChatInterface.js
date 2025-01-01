import React, { useState } from 'react';
import { 
  FaSearch, FaCamera, FaVideo, FaCog, FaSun,
  FaArrowLeft, FaHome, FaPaperPlane
} from 'react-icons/fa';
import '../styles/ChatInterface.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  
  const contacts = [
    { id: 1, name: 'Vincent Porter', status: 'left 7 mins ago', avatar: '/avatar3.jpeg', online: false },
    { id: 2, name: 'Aiden Chavez', status: 'online', avatar: '/avatar4.jpeg', online: true },
    { id: 3, name: 'Mike Thomas', status: 'online', avatar: '/avatar5.jpeg', online: true },
    { id: 4, name: 'Christian Kelly', status: 'left 10 hours ago', avatar: '/avatar6.jpeg', online: false },
    { id: 5, name: 'Monica Ward', status: 'online', avatar: '/avatar1.jpeg', online: true },
    { id: 6, name: 'Dean Henry', status: 'offline since Oct 28', avatar: '/avatar2.jpeg', online: false },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Christian Kelly',
      text: 'Hi Aiden, how are you? How is the project coming along?',
      time: '10:10 AM, Today',
      avatar: '/avatar6.jpeg'
    },
    {
      id: 2,
      sender: 'Aiden Chavez',
      text: 'Are we meeting today?',
      time: '10:12 AM, Today',
      avatar: '/avatar4.jpeg'
    },
    {
      id: 3,
      sender: 'Aiden Chavez',
      time: '10:15 AM, Today',
      avatar: '/avatar2.jpeg'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {/* Left Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-header">
          <FaArrowLeft />
          <h2>Chat</h2>
          <FaHome />
        </div>

        <div className="search-container">
          <FaSearch className="search-ico" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="contacts-list">
          {contacts.map(contact => (
            <div key={contact.id} className={`contact-item ${contact.id === 2 ? 'active' : ''}`}>
              <div className="contact-avatar">
                <img src={contact.avatar} alt={contact.name} />
                <span className={`status-indicator ${contact.online ? 'online' : 'offline'}`}></span>
              </div>
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p>{contact.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="current-contact">
            <img src="/avatars/aiden.jpg" alt="Aiden Chavez" />
            <div className="contact-info">
              <h3>Aiden Chavez</h3>
              <p>Last seen: 2 hours ago</p>
            </div>
          </div>
          <div className="chat-actions">
            <button><FaCamera /></button>
            <button><FaVideo /></button>
            <button><FaCog /></button>
            <button><FaSun /></button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender === 'Aiden Chavez' ? 'sent' : 'received'}`}>
              <img src={message.avatar} alt={message.sender} className="message-avatar" />
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Enter text here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface; 