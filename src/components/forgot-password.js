import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/forgot-password.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      
      <div className="forgot-password-right">
        <div className="forgot-password-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="forgot-password-form">
              <h2>Recover my password</h2>
              
              <p className="instruction-text">
                Please enter your email address below to receive
                instructions for resetting password.
              </p>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="reset-btn">
                RESET PASSWORD
              </button>

              <div className="login-link">
                Know your password? <Link to="/login">Login</Link>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <h2>Check your email</h2>
              <p>We have sent password recovery instructions to your email.</p>
              <Link to="/login" className="back-to-login">
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 