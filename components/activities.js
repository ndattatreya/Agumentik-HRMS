import React from 'react';
import '../styles/activities.css';
import Sidebar from './sidebar';

const activities = [
  {
    time: 'Just Now',
    title: 'Add New Task',
    description: "Web by far While that's mock-ups and this is politics. Lorem card.",
    team: ['/avatar1.jpeg', '/avatar4.jpeg'],
    status: 'new'
  },
  {
    time: '6 mins ago',
    title: 'Lucid Admin Code Upload on Github',
    description: "Web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.",
    team: [],
    status: 'error',
    error: 'I am getting an error when trying to push to github. It will not let me push'
  },
  {
    time: '15 mins ago',
    title: 'Assigning a project team',
    leader: 'Jessica Doe',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    team: ['/avatar2.jpeg', '/avatar5.jpeg', '/avatar6.jpeg'],
    status: 'normal'
  },
  {
    time: '1 day ago',
    title: 'Send email to all Employee salary slip',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    team: [],
    status: 'normal'
  },
  {
    time: '16 June, 2021',
    title: 'Id-Ul-Fitr Function in Office',
    description: 'Katherine Lumaad Oakland, CA',
    team: [],
    status: 'normal'
  }
];

const ActivitiesPage = () => {
  return (
    <div >
      <Sidebar />
      <div className="activities-page">
        <h2 >Activities</h2><br></br>
        <ul className="activities-list">
          {activities.map((activity, index) => (
            <li key={index} className={`activity ${activity.status}`}>
              <div className="time">{activity.time}</div>
              <div className="details">
                <h3>{activity.title}</h3>
                {activity.leader && <p>Team Leader: <span>{activity.leader}</span></p>}
                <p>{activity.description}</p>
                {activity.error && <div className="error">{activity.error}</div>}
                <div className="team">
                  {activity.team.map((avatar, i) => (
                    <img key={i} src={avatar} alt={`team-member-${i}`} className="avatar" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivitiesPage;
