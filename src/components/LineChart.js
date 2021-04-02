import React, { PureComponent } from 'react';
import { LineChart, Label,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        year: 2013,
        month: 'January',
        yearAmt: 3908,
        moAmt: 104202,
    },
    {
        year: 2014,
        month: 'February',
        yearAmt: 5031,
    },
    {
        year: 2015,
        month: 'March',
        yearAmt: 12003,
    },
    {
        year: 2016,
        month: 'April',
        yearAmt: 53000,
    },
    {
        year: 2017,
        month: 'May',
        yearAmt: 64003,
    },
    {
        year: 2018,
        month: 'June',
        yearAmt: 78001,
    },
    {
        year: 2019,
        month: 'July',
        yearAmt: 80459,
    },
    {
        year: 2020,
        month: 'August',
        yearAmt: 90576,
    },
    {
        year: 2021,
        month: 'September',
        yearAmt: 107165,
    },
    {
        month: 'October',
        yearAmt: 107165,
    },
    {
        month: 'November',
        yearAmt: 100000,
    },
    {
        month: 'December',
        yearAmt: 107165,
    },
];



const LineChartRechart = ({ width, height }) => {

    return ( 
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 50,
                    left: 50,
                    bottom: 50,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="year" domain={['dataMin', 'dataMax']}>
                    <Label value="Year" position="bottom" />
                </XAxis>
                <YAxis type="number">
                    <Label value="Number of Entries" position="left" angle="-90" offset="20"/>
                </YAxis>
                <Tooltip />
                <Line type="monotone" name="Number of Entries" dataKey="yearAmt" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
    )
};

export default LineChartRechart;

