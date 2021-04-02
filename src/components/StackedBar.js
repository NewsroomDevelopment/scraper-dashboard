import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend
} from "recharts";

const data = [
  {
    name: 2013,
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 2014,
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 2015,
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 2016,
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 2017,
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 2018,
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 2019,
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: 2020,
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: 2021,
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App() {
  return (
    <BarChart
      width={600}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
    }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
            <Label value="Year" offset="35" position="bottom" />
        </XAxis>
        <YAxis>
            <Label value="Number of Entries" position="left" angle="-90" offset="20"/>
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar name="Finance" dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar name="Consulting" dataKey="uv" stackId="a" fill="#82ca9d" />
        <Bar name="Tech" dataKey="amt" stackId="a" fill="#ffc658" />
    </BarChart>
  );
}
