import React, {PureComponent} from 'react';
import { ScatterChart, Scatter, Legend, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {hour: "12a", enrollment: 125, value: 125},
    {hour: "1a", enrollment: 100, value: 100},
    {hour: "8a", enrollment: 110, value: 110}
  ];

  const parseDomain = () => [
    0,
    Math.max(
      Math.max.apply(
        null,
        data.map((entry) => entry.value)
      ), 0
    )
  ];

const ScatterPlot = ({ width, height }) =>
{
    const domain = parseDomain();
    const range = [16, 225];
    return (
        <ScatterChart
        width={600}
        height={400}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        }}
        >
        <XAxis 
            type="category" 
            dataKey="time" 
            interval={0} 
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }} 
        />
        <YAxis
            type="number"
            dataKey="enrollment"
            height={100}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={true}
            label={{ value: "Enrollment %", position: "insideRight" }}
        />       
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
 
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
    );
}

export default ScatterPlot;