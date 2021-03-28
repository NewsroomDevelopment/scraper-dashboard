import React from 'react';
import styled from 'styled-components';
import BarGraph from '../components/BarGraph';
import ExportSection from '../components/ExportSection';

const Directory = () => {
    return (
        <div>
            <BarGraph />

            <ExportSection headers={["hi", "bye", "department"]} filters={{ "department": ["CS", "DS"] }} />
        </div>
    );
};


export default Directory;