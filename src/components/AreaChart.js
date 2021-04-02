import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    month: "2013",
    a: 4000,
    b: 2400,
    c: 2400
  },
  {
    month: "2014",
    a: 3000,
    b: 1398,
    c: 2210
  },
  {
    month: "2015",
    a: 2000,
    b: 9800,
    c: 2290
  },
  {
    month: "2016",
    a: 2780,
    b: 3908,
    c: 2000
  },
  {
    month: "2017",
    a: 1890,
    b: 4800,
    c: 2181
  },
  {
    month: "2018",
    a: 2390,
    b: 3800,
    c: 2500
  },
  {
    month: "2019",
    a: 3490,
    b: 4300,
    c: 2100
  },
  {
    month: "2020",
    a: 4021,
    b: 6023,
    c: 8000
  },
  {
    month: "2021",
    a: 3490,
    b: 4300,
    c: 9013
  }
];

const toPercent = (decimal: number, fixed: number = 0) =>
  `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o: any) => {
  const { payload = [], label } = o;
  const total = payload.reduce(
    (result: number, entry: any) => result + entry.value,
    0
  );

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <AreaChart
      width={600}
      height={400}
      data={data}
      stackOffset="expand"
      margin={{
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
    }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis tickFormatter={toPercent} />
      <Tooltip content={renderTooltipContent} />
      <Legend />
      <Area
        name='Finance'
        type="monotone"
        dataKey="a"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        name='Consulting'
        type="monotone"
        dataKey="b"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        name='Tech'
        type="monotone"
        dataKey="c"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
