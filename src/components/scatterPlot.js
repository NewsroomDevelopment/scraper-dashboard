import { Dropdown } from 'bootstrap';
import React, {PureComponent} from 'react';
import { ScatterChart, Scatter, Legend, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DropDownScatter from "./dropDownScatter"

const data = [
    {hour: "12a", enrolled: 125/400, students: 125, value: 400},
    {hour: "1a", enrolled: 100/100, students: 100, value: 100},
    {hour: "8a", enrolled: 110/110, students: 110, value: 110}
  ];

const renderTooltip = (props: any) => {
    const { active, payload } = props;
  
    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;
  
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10
          }}
        >
          <p>
              <span>enrolled: </span>
              {data.students}
            </p>
          <p>
            <span>class size: </span>
            {data.value}
          </p>
        </div>
      );
    }
  
    return null;
};

const parseDomain = () => [
    0,
    Math.max(
      Math.max.apply(
        null,
        data.map((entry) => entry.value)
      ), 0
    )
  ];

const ScatterPlot = () =>
{
    const domain = parseDomain();
    const range = [16, 225];
    return (
        <div>
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
            dataKey="hour" 
            label="time"
            interval={0} 
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }} 
        />
        <YAxis
            type="number"
            dataKey="enrolled"
            height={100}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={true}
            label={{ value: "Enrollment %", position: "insideRight" }}
        />       
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
 
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={renderTooltip}/>
        <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
        </div>
    );
}
export default ScatterPlot;