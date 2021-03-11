// App.js
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import BarGraph from './containers/BarGraph';

const datas = [
    [[1,2,3,4],[10, 30, 40, 20]],
    [[1,2,3,4,5,6],[10, 40, 30, 20, 50, 10]],
    [[1,2,3,4,5],[60, 30, 40, 20, 30]]
]
var i = 0;


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : datas[0],
            width : 600,
            height : 400,
            id : "root"
        }
    }

    changeColor = () => {
        i++
        if(i === datas.length) i = 0;
        this.setState({data: datas[i]});

    }

    render(){
        return (
        <div className="App" >
        
            <h2>Graphs with React</h2>
            <button onClick={this.changeChart}>Change Data</button>
        <BarGraph id = {this.state.id} data={this.state.data} width={this.state.width} height={this.state.height} />

        </div>

    );
    }
    
}

export default App;