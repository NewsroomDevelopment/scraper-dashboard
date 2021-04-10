import React, { useState, useEffect, PureComponent } from 'react';
import './index.css';
import BarGraph from '../components/BarGraph';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DepartmentsBubble from '../components/BubbleChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const datas = [
    [[1,2,3,4],[10, 30, 40, 20]],
    [[1,2,3,4,5,6],[10, 40, 30, 20, 50, 10]],
    [[1,2,3,4,5],[60, 30, 40, 20, 30]]
]
const dataLine = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
//test to fill in 
const dropdownStuff = ["Harambe", "Shrek", "Bob", "Dababy"];
var i = 0;

const Directory = () => {
    //dropdown stuff
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    //setting data stuff
    const [data, setData] = useState(datas[0]);

    useEffect(() => {
        changeData();
      }, []);

    //make this compatible with what they select in the dropdown
    function changeData(){
        i++
        if(i === datas.length) i = 0;
        setData(datas[i])

    }
    
    return (
        <div>

        <h1>Directory Scraper</h1>
        <h2>Undergrad Distribution Among Departments</h2>
        <div className = "Bubble" style={{position: 'relative', width: 800, height: 800,}} class = "center">
            <DepartmentsBubble> </DepartmentsBubble>
        </div>
        <div className="BarGraph" style={{position: 'relative', width: 800, height: 500,}}>
        

        <h2>Current Data</h2>
        <h3>Top 5 Populated Departments</h3>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{  position: 'relative', top: '20px', left: '10px'}}>
            <DropdownToggle caret>
            School
            </DropdownToggle>
            <DropdownMenu container="body">
                {dropdownStuff.map((item, index) => {
                        return <DropdownItem onClick={() => changeData()}>{item}</DropdownItem>;
                        })}
            </DropdownMenu>
        </Dropdown>
        
        <BarGraph id = {"bar"} data={data} width={500} height={300} xaxis ={'Year'} yaxis={'# of Students'}/>

        
        
        </div>
        <h2>Historical Data</h2>
        <h3>Attendance in each school</h3>
        <div>
        <LineChart width={500} height={300} data={dataLine}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        </div>
        </div>

    );
};


export default Directory;