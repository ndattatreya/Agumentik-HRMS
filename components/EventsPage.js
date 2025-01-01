import React from 'react';
import Calendar from './Calender';
import Profile from './Profile';
import '../styles/EventsPage.css';
import Sidebar from './sidebar';

const EventsPage = () => {
  return (
    <div className="events-page">
      <Sidebar />
      <header className='events-page-header'>
        <h2 className='events-page-h2'>Events</h2>
        
      </header>
      <div className="content">
        <Calendar />
        <Profile />
      </div>
    </div>
  );
};

export default EventsPage;
