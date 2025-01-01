import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/not-found.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      
      <div className="not-found-right">
        <div className="not-found-content">
          <h1>404 Oops!</h1>
          <h2>Page Not Found</h2>
          
          <p className="error-message">
            The page you were looking for could not be found,
            please <a href="mailto:support@example.com">contact us</a> to report this issue.
          </p>

          <div className="action-buttons">
            <button 
              className="go-back-btn"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <Link to="/" className="home-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 