import React, { useState, useEffect } from 'react';

import BarGraph from '../components/BarGraph';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DepartmentsBubble from '../components/BubbleChart';


const datas = [
    [[1,2,3,4],[10, 30, 40, 20]],
    [[1,2,3,4,5,6],[10, 40, 30, 20, 50, 10]],
    [[1,2,3,4,5],[60, 30, 40, 20, 30]]
]

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
        <div className="BarGraph" style={{position: 'relative', width: 800, height: 500,}}>
        
        <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{  position: 'relative', top: '20px', left: '10px'}}>
            <DropdownToggle caret>
            Dropdown
            </DropdownToggle>
            <DropdownMenu container="body">
                {dropdownStuff.map((item, index) => {
                        return <DropdownItem onClick={() => changeData()}>{item}</DropdownItem>;
                        })}
            </DropdownMenu>
        </Dropdown>
        
        <BarGraph id = {"bar"} data={data} width={500} height={300} xaxis ={'Year'} yaxis={'# of Students'}/>

        
        
        </div>
        <div className = "Bubble" style={{position: 'relative', width: 800, height: 800,}}>
            <DepartmentsBubble> </DepartmentsBubble>
        </div>
        </div>

    );
};


export default Directory;