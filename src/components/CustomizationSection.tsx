import React from 'react';
import './CustomizationSection.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Welcome Text */}
      <div className="welcome-text">Welcome, John Matthew!!</div>

      {/* Card Container */}
      <div className="card-container">
        {/* First Card */}
        <div className="card">
          <h3>Order Sync Successful!</h3>
          <p>
            Your orders from the last 30 days have been successfully synced. 
            Check them out now!
          </p>
          <button className="button">Explore Your Orders</button>
        </div>

        {/* Second Card */}
        <div className="card yellow">
          <h3>Customize Customer Notification</h3>
          <p>
            Tailor your email experience: Set the sender email and choose 
            notification triggers. Check them out now!
          </p>
          <button className="button">Configure Notification</button>
        </div>

        {/* Third Card */}
        <div className="card blue">
          <h3>Your Tracking Link has been generated</h3>
          <p>
            Include the <span className="link">link</span> to your store's 
            navigation menu.
          </p>
          <div className="button-container">
            <button className="buttonDiff">Copy Link</button>
            <button className="button">Go To Navigation Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
