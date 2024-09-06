import React, { useState } from 'react';
import './NotificationCard.css';

const NotificationCard: React.FC = () => {
  const [accentColor, setAccentColor] = useState('#FF9898');
  const [textColor, setTextColor] = useState('#571010');
  const [bgColor, setBgColor] = useState('#FFEAEE');

  return (
    <div className="center-container">
      <div className="notification-card">
        <h2 className="title">Discover the Heart of Our Functionality</h2>

        <div className="card-grid">
          {/* Left Side - Color Customization */}
          <div className="card color-customization">
            <h3>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
            <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>

            <div className="color-inputs">
              <div>
                <label>Accent Color</label>
                <input type="text" value={accentColor} onChange={e => setAccentColor(e.target.value)} />
                <div className="color-box" style={{ backgroundColor: accentColor }}></div>
              </div>
              <div>
                <label>Text Color</label>
                <input type="text" value={textColor} onChange={e => setTextColor(e.target.value)} />
                <div className="color-box" style={{ backgroundColor: textColor }}></div>
              </div>
              <div>
                <label>Background Color</label>
                <input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} />
                <div className="color-box" style={{ backgroundColor: bgColor }}></div>
              </div>
            </div>

            <div className="buttons">
              <button className="preview-btn">Preview</button>
              <button className="apply-btn">Apply Colors</button>
            </div>
          </div>

          {/* Middle - Onboarding and Ecosystem */}
          <div className="card middle">
            <div className="onboarding">
              <h3>Exclusive Onboarding Support for High-Volume Brands</h3>
              <p>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
              <button className="schedule-btn">Schedule A Call</button>
            </div>

            <div className="ecosystem">
              <h3>Explore Our Integrated Ecosystem</h3>
              <p>Discover a variety of popular integrations tailored for your convenience.</p>
              <div className="icons">
                <img src="https://via.placeholder.com/40" alt="PayPal" />
                <img src="https://via.placeholder.com/40" alt="Integration 1" />
                <img src="https://via.placeholder.com/40" alt="Integration 2" />
                <img src="https://via.placeholder.com/40" alt="Integration 3" />
              </div>
              <button className="explore-btn">Explore Integrations</button>
            </div>
          </div>

          {/* Right Side - Custom HTML */}
          <div className="card custom-html">
            <h3>Seamlessly Integrate Custom HTML Elements</h3>
            <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
            <label>HTML Link</label>
            <textarea className="html-textarea" placeholder="Value"></textarea>
            <div className="buttons">
              <button className="preview-btn">Preview</button>
              <button className="apply-btn">Apply changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
