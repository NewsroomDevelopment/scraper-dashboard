import React from 'react';
import LineChart from '../components/LineChart';
import StackedBar from '../components/StackedBar';
import AreaChart from '../components/AreaChart'
import styled from 'styled-components';

const Handshake = () => {
    const myStyle = {
        marginLeft: "100px",
        padding: "50px",
    };
    const graphStyle = {
        padding: "200px"
    }
    return (
        <div width={1000} style={myStyle}>
            <h3>Number of Job Postings By Year</h3>
            <LineChart width={400} height={300} style={{graphStyle}}/> 
            <h3>Number of Job Postings by Industry </h3>
            <StackedBar width={400} height={300} style={{graphStyle}}/>
            <h3>Proportion of Job Postings by Industry</h3>
            <AreaChart width={400} height={300} style={{graphStyle}}/>
            <ol>
                <li># postings over time: time range, state, company size</li>
                <li># postings over time by industry: time range, industries to include</li>
                <li># postings by industry proportions: time range, industries to include </li>
                <li>remote vs in person over time</li>
                <li>sponsorships/work authorizations over time</li>
                <li>spring/fall/summer AND internship/part-time/full-time in one bar graph</li>
            </ol>
        </div>
        
    );
};
    

export default Handshake;