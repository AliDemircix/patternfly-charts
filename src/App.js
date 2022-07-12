import React from 'react';
import './App.css';
import { AreaChart } from './AreaChart';
import { BarChart } from './BarChart';
import { BulletChart } from './BulletChart';
import { DonutChart } from './DonutChart';
import { DonutUtilization } from './DonutUtilization';
import { LineChart } from './LineChart';

function App() {
    return <div style={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap"}}>
        <div className="chart-container">
            <AreaChart />
        </div>
        <div className='chart-container'>
            <BarChart></BarChart>
        </div>
        <div className="chart-container">
            <BulletChart></BulletChart>
        </div>
        <div className='chart-container'>
            <DonutChart></DonutChart>
        </div>
        <div className='chart-container'>
            <DonutUtilization></DonutUtilization>
        </div>
        <div className='chart-container'>
            <LineChart></LineChart>
        </div>
    </div>
}

export default App;
