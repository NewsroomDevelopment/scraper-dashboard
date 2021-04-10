import React from 'react';
import styled from 'styled-components';
import ScatterPlot from '../components/scatterPlot'
import AreaChart from '../components/AreaChart'
import BarGraph from '../components/BarGraph'

const Vergil = () => {
    return (
        <div>
            <h1>Most popular classes</h1>
            <BarGraph />
            <h1>Enrollment by class times</h1>
            <ScatterPlot/>
            <h1>Departments in each building</h1>
            <AreaChart/>
        </div>
    );
};


export default Vergil;