import React, { useState } from 'react';
import { 
  FaInbox, FaPaperPlane, FaFileAlt, FaSignOutAlt, 
  FaStar, FaTrash, FaPlus, FaSearch, FaSync, 
  FaArchive, FaTags, FaEllipsisH, FaChevronLeft, 
  FaChevronRight, FaPaperclip 
} from 'react-icons/fa';
import '../styles/EmailClient.css';

const EmailClient = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);

  const sidebarItems = [
    { icon: <FaInbox />, label: 'Inbox', count: 6 },
    { icon: <FaPaperPlane />, label: 'Sent' },
    { icon: <FaFileAlt />, label: 'Draft', count: 3 },
    { icon: <FaSignOutAlt />, label: 'Outbox' },
    { icon: <FaStar />, label: 'Starred', count: 6 },
    { icon: <FaTrash />, label: 'Trash', count: 9 }
  ];

  const labels = [
    { color: '#dc3545', label: 'Web Design', count: 5 },
    { color: '#20c997', label: 'Recharge' },
    { color: '#6c757d', label: 'Paypal' },
    { color: '#007bff', label: 'Family' }
  ];

  const emails = [
    {
      id: 1,
      sender: 'Herman Beck',
      tag: 'MARKETING',
      subject: '[ThemeForest] Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.',
      starred: true,
      date: '23 Jun'
    },
    {
      id: 2,
      sender: 'Mary Adams',
      subject: '[Support] There are many variations of passages of Lorem Ipsum available, but the majority',
      hasAttachment: true,
      date: '22 Jun'
    },
    {
      id: 3,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      hasAttachment: false,
      date: '21 Jun'
    }
  ];

  return (
    <div className="email-client">
      {/* Left sideba */}
      <div className="sideba">
        <button className="compose-btn">Compose</button>
        
        <div className="sideba-menu">
          {sidebarItems.map((item, index) => (
            <div key={index} className="sideba-item">
              <div className="sideba-item-left">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.count && <span className="count">{item.count}</span>}
            </div>
          ))}
        </div>

        <div className="labels-section">
          <div className="labels-header">
            <span>Labels</span>
            <FaPlus />
          </div>
          {labels.map((label, index) => (
            <div key={index} className="label-item">
              <div className="label-left">
                <span className="label-dot" style={{ backgroundColor: label.color }}></span>
                <span>{label.label}</span>
              </div>
              {label.count && <span className="count">{label.count}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="email-header">
          <h2>Inbox</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search Mail" />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className="email-toolbar">
          <div className="toolbar-left">
            <input type="checkbox" />
            <button><FaSync /></button>
            <button>Archive</button>
            <button>Trash</button>
            <button>Tags</button>
            <button>More</button>
          </div>
          <div className="toolbar-right">
            <span>1-50/295</span>
            <button><FaChevronLeft /></button>
            <button><FaChevronRight /></button>
          </div>
        </div>

        <div className="email-list">
          {emails.map((email) => (
            <div key={email.id} className="email-item">
              <input type="checkbox" />
              {email.starred ? <FaStar className="star active" /> : <FaStar className="star" />}
              <div className="email-content">
                <div className="sender">
                  {email.sender}
                  {email.tag && <span className="tag">{email.tag}</span>}
                </div>
                <div className="subject">{email.subject}</div>
              </div>
              <div className="email-right">
                {email.hasAttachment && <FaPaperclip />}
                <span className="date">{email.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailClient; 