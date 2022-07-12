import React from 'react';
import './App.css';
import { AreaChart } from './AreaChart';
import { BarChart } from './BarChart';
import { BulletChart } from './BulletChart';
import { DonutChart } from './DonutChart';
import { DonutUtilization } from './DonutUtilization';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { StackChart } from './StackChart';
import { StackChartHorizontal } from './StackChartHorizontal';

function App() {
    return <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div className="chart-container">
            <AreaChart />
        </div>
        <div className='chart-container'>
            <BarChart/>
        </div>
        <div className="chart-container">
            <BulletChart/>
        </div>
        <div className='chart-container'>
            <DonutChart/>
        </div>
        <div className='chart-container'>
            <DonutUtilization/>
        </div>
        <div className='chart-container'>
            <LineChart />
        </div>
        <div className='chart-container'>
            <PieChart />
        </div>
        <div className='chart-container'>
            <StackChart/>
        </div>
        <div className='chart-container'>
            <StackChartHorizontal/>
        </div>
    </div>
}

export default App;
