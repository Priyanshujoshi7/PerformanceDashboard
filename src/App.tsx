import React from 'react';
import Header from './components/Header.tsx';
import NotificationCard from './components/NotificationCard';
import PerformanceMetrics from './components/PerformanceMetrics';
import CustomizationSection from './components/CustomizationSection';
import './assets/styles.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
           
            <CustomizationSection />
               
            
            <PerformanceMetrics />
            <NotificationCard />
        </div>
    );
}

export default App;
