import React, { useState } from 'react';
import { 
  FaHome, FaInbox, FaUser, FaBookmark, FaPhone, 
  FaEnvelope, FaBell, FaFolder, FaClock,
  FaChevronLeft, FaChevronRight, 
  FaAngleDoubleLeft, FaAngleDoubleRight 
} from 'react-icons/fa';
import '../styles/dash.css';

const Dash = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { icon: <FaInbox />, text: 'Inbox', count: '64' },
    { icon: <FaUser />, text: 'Profile visits', count: '264' },
    { icon: <FaBookmark />, text: 'Bookmarks', count: '19' },
    { icon: <FaPhone />, text: 'Call', count: '12' },
    { icon: <FaEnvelope />, text: 'Message', count: '24' },
    { icon: <FaBell />, text: 'Notifications', count: '44' },
    { icon: <FaFolder />, text: 'New Project', count: '16' },
    { icon: <FaClock />, text: 'Watch', count: '29' }
  ];

    const teamMembers = [
    { name: 'Chris Fox', role: 'Designer, Blogger', avatar: '/path/to/chris.jpg' },
    { name: 'Joge Lucky', role: 'Java Developer', avatar: '/path/to/joge.jpg' },
    { name: 'Isabella', role: 'CEO, Lucid', avatar: '/path/to/isabella.jpg' },
    { name: 'Folisise Chosielie', role: 'Art director, Movie Cut', avatar: '/path/to/folisise.jpg' },
    { name: 'Alexander', role: 'Writer, Mag Editor', avatar: '/path/to/alexander.jpg' }
  ];

  const projects = [
    {
      id: 1,
      name: 'Alpino 4.1',
      team: ['/avatar1.jpeg', '/avatar2.jpeg', '/avatar3.jpeg'],
      trend: 'up',
      sales: 11200,
      price: 83,
      total: 22520
    },
    {
      id: 2,
      name: 'Compass 2.0',
      team: ['/avatar1.jpeg', '/avatar2.jpeg'],
      trend: 'neutral',
      sales: 11200,
      price: 66,
      total: 13205
    },
    {
      id: 3,
      name: 'Nexa 1.1',
      team: ['/avatar5.jpeg', '/avatar6.jpeg'],
      trend: 'up',
      sales: 12080,
      price: 93,
      total: 17700
    },
    {
      id: 4,
      name: 'Oreo 2.2',
      team: ['/avatar2.jpeg', '/avatar4.jpeg', '/avatar6.jpeg', '/avatar5.jpeg'],
      trend: 'down',
      sales: 18200,
      price: 178,
      total: 17700
    }
  ];

  const todoList = [
    { title: 'Design Team Report', completed: true },
    { title: 'New Logo Design', completed: false },
    { title: 'Design PSD files', completed: false },
    { title: 'Deploy existing code', completed: false },
    { title: 'Report Panel Usage', completed: false }
  ];

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="dashb">
      <header className="dash-header">
        <h1>Project dash</h1>
        <div className="breadcrumb">
          <FaHome /> 
        </div>
      </header>

      <div className="stats-cards">
        <div className="stat-card green">
          <h2>19</h2>
          <p>Today Works</p>
        </div>
        <div className="stat-card yellow">
          <h2>15</h2>
          <p>Today Tasks</p>
        </div>
        <div className="stat-card gray">
          <h2>125</h2>
          <p>Statistics</p>
        </div>
        <div className="stat-card blue">
          <h2>318</h2>
          <p>Analytics</p>
        </div>
      </div>

      <div className="project-list">
        <div className="header">
          <h2 style={{margin: '0px'}}>Project List</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="clear-btn" onClick={handleClear}>Clear</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Application</th>
              <th>Team</th>
              <th>Change</th>
              <th>Sales</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>
                  <div className="team-avatars">
                    {project.team.map((avatar, index) => (
                      <img key={index} src={avatar} alt="team member" />
                    ))}
                  </div>
                </td>
                <td>
                  <div className={`trend-line ${project.trend}`}></div>
                </td>
                <td>{project.sales.toLocaleString()}</td>
                <td>${project.price}</td>
                <td>${project.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="rows-per-page">
            <span>Rows per page:</span>
            <select defaultValue="10">
              <option value="10">10</option>
            </select>
          </div>
          <span className="page-info">1-4 of 4</span>
          <div className="pagination-controls">
            <button disabled><FaAngleDoubleLeft /></button>
            <button disabled><FaChevronLeft /></button>
            <button disabled><FaChevronRight /></button>
            <button disabled><FaAngleDoubleRight /></button>
          </div>
        </div>
      </div>

      <div className="dash-content">
        <div className="menu-section">
          <h3>Quick Menu</h3>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-items">
              <div className="menu-items-left">
                {item.icon}
                <span>{item.text}</span>
              </div>
              <span className="count">{item.count}</span>
            </div>
          ))}
        </div>

        <div className="todo-section">
          <h3>To Do List</h3>
          <p>This Month task list</p>
          {todoList.map((item, index) => (
            <div key={index} className="todo-item">
              <input type="checkbox" checked={item.completed} readOnly />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dash;