import React from 'react';
import './App.css';
import { AreaChart } from './AreaChart';
import { BarChart } from './BarChart';
import { BulletChart } from './BulletChart';

function App() {
  return <div style={{display:"flex", justifyContent:"space-between"}}>
    <div className="chart-container">
<AreaChart/>
    </div>
    <div className='chart-container'>
<BarChart></BarChart>
    </div>
    <div className="chart-container"> 
    <BulletChart></BulletChart></div>
    </div>
}

export default App;
