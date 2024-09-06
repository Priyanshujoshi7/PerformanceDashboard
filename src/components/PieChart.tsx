import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: ['Delivered', 'In Transit', 'Pending'],
    datasets: [
        {
            label: 'Shipment Status',
            data: [40, 30, 30],
            backgroundColor: ['#FFD700', '#FF6347', '#87CEFA'],
        },
    ],
};

const PieChart: React.FC = () => {
    return <Pie data={data} />;
}

export default PieChart;
