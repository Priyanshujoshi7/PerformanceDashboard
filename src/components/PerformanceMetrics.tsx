import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PerformanceMetrics.css';

// Register the required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceMetrics: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('Delivered');

  const pieData = {
    labels: ['Delivered', 'Out for Delivery', 'In Transit', 'Pending'],
    datasets: [
      {
        data: [100, 80, 50, 40],
        backgroundColor: ['#8B4513', '#A0522D', '#D2B48C', '#F5DEB3'],
        borderColor: ['#8B4513', '#A0522D', '#D2B48C', '#F5DEB3'],
        borderWidth: 1,
      },
    ],
  };

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div className="performance-metrics" style={{ backgroundColor: '#FFFDD0', padding: '20px', borderRadius: '8px' }}>
      <h2>Instant Dive Into Your Performance Metrics</h2>

      <div className="timeline-boxes">
        {['Lifetime', 'Last Week', 'Last Month', 'Last Year', 'Customize Timeline'].map((text, index) => (
          <div className="timeline-box" key={index}>
            <span>{text}</span>
            {text === 'Customize Timeline' && <FaCalendarAlt className="calendar-icon" />}
          </div>
        ))}
      </div>

      <div className="cards-container">
        {/* First Card */}
        <div className="card">
          <h3>Shipment Updates <span>Total Orders: 394</span></h3>
          <div className="status-boxes">
            {['Delivered', 'Out for Delivery', 'In Transit', 'Pending'].map((status) => (
              <div
                key={status}
                className={`status-box ${status === selectedStatus ? 'selected' : ''}`}
                onClick={() => handleStatusClick(status)}
              >
                {status}
              </div>
            ))}
          </div>
          <Pie data={pieData} />
        </div>

        {/* Second Card */}
        <div className="card special-card">
          <h3>Star Facts About Your Orders!!!</h3>
          <p>There are 8 shipments that have been out for delivery for more than 3 days.</p>
          <p>There are 5 shipments in exception right now.</p>
          <p>The maximum chargebacks are from Miami.</p>
          <button>Check Orders Page</button>
        </div>

        {/* Third Card */}
        <div className="card">
          <h3>Tracking Page Views vs Orders</h3>
          <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experience.</p>
          <div className="stat-box light-cream">
            <p>Orders</p>
            <h2>80</h2>
          </div>
          <div className="stat-box skin-brown">
            <p>Tracking Page Views</p>
            <h2>44</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
