/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import { TbHexagonLetterC } from "react-icons/tb";
import "../styles/navbar.css";

const Navbar = () => {
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevents default behavior of anchor tags
    // Implement any custom logic you need
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing localStorage, etc.)
    navigate('/login'); // Navigate to login page
  };

  return (
    <div>
      <nav className="navbar" id="nav">
        <div className="navbar-container">
          <div className="navbar-left">
            <div onClick={() => navigate('/')} className="logo-main">
              <TbHexagonLetterC size={25} />
              <span>redly</span>
            </div>
          </div>
          <div className="navbar-center">
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
            />
            <FaSearch size={15} className="search-icon" />
          </div>
          <div className="navbar-right">
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
