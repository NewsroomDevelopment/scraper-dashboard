import React from 'react';
import styled from 'styled-components';
import ScatterPlot from '../components/scatterPlot'
import AreaChart from '../components/AreaChart'

const Vergil = () => {
    return (
        <div>Enrollment % in classes by time
            <ScatterPlot />
            Departments located in building over semesters
            <AreaChart />
        </div>
    );
};


export default Vergil;