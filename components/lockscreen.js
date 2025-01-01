import React, { useState } from 'react';
import '../styles/lockscreen.css';

const UserLogin = () => {
  const [password, setPassword] = useState('');
  const userData = {
    name: 'Alizee Thomas',
    email: 'info@example.com',
    avatar: '/avatar2.jpeg' 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt for:', userData.email);
  };

  return (
    <div className="user-login-container">
      
      <div className="user-login-right">
        <div className="user-login-form-container">
          <div className="user-profile">
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              className="user-avatar"
            />
            <h2 className="user-name">{userData.name}</h2>
            <p className="user-email">{userData.email}</p>
          </div>

          <form onSubmit={handleSubmit} className="user-login-form">
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter Your Password ..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin; 