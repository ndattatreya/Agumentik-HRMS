import React from 'react';
import '../styles/dash-items.css';

const DashboardItem = ({ icon, title, value }) => {
  return (
    <div className="dashboard-item">
      <div className="icon-container">
        {icon}
      </div>
      <div className="detail">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default DashboardItem;
