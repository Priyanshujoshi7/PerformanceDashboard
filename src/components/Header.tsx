import React from 'react';
import './Header.css';
import { FaUserCircle, FaCog } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button>Home</button>
        <button>Orders</button>
        <button>Integrations</button>
        
        {/* Dropdown for Tracking Page */}
        <div className="dropdown">
          <button>Tracking Page</button>
          <div className="dropdown-content">
            <a href="#track1">Track Order 1</a>
            <a href="#track2">Track Order 2</a>
            <a href="#track3">Track Order 3</a>
          </div>
        </div>
        
        <button>Partner with Us</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Icons for Account and Settings */}
      <div className="icons">
        <div className="icon">
          <FaUserCircle size={20} />
          <span>Account</span>
        </div>
        <div className="icon">
          <FaCog size={20} />
          <span>Settings</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
