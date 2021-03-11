// BarGraph.js
//generate a bar graph given the data and with and height restrictions
import { getDefaultNormalizer } from '@testing-library/dom';
import * as d3 from 'd3';
import React, {Component} from 'react';




const datas = [
    [[1,2,3,4],[10, 30, 40, 20]],
    [[1,2,3,4,5,6],[10, 40, 30, 20, 50, 10]],
    [[1,2,3,4,5],[60, 30, 40, 20, 30]]
]
var i = 0;
const data = datas[0];
class BarGraph extends Component{
    
    
    componentDidMount(){
        this.initBarGraph();

        //this.updateChart();
        //this.drawChart();
    }
    componentDidUpdate(){
        this.initBarGraph();
    }
    
    changeColor = () => {
        i++
        if(i === datas.length) i = 0;
        data = datas[i];
        this.initBarGraph();
        this.forceUpdate();
        
    }

    initBarGraph(){

        var data_x = data[0];
        var data_y = data[1];
        
        
        
        //intialize the graph
        const svg = d3.select("body")
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)

            .style("margin-left", 400);
            
       var selection = svg.selectAll("rect").data(data_y);
        
        //intialize the axis
        var xScale = d3.scaleBand()
                            .domain(data_x)
                            .range([0, this.props.width])
                            .padding(0.6);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data_y)])
                            .range([this.props.height, 100]);
        var ticks = [];
        for(var i = 10; i<d3.max(data_y)+10; i = i+10){
            ticks.push(i);
        }
        
        var g = svg.append("g");
        g.append("g")
            .attr("transform", "translate(" + 0 + "," + 360 + ")")
            .call(d3.axisBottom(xScale))
            .append("text")
                .attr("x", 310)
                .attr("y", 30)
                .attr("text-anchor", "end")
                .attr("stroke", "black")
                .text("Year");
    
        g.append("g")
            .attr("transform", "translate(" + 50 + "," + -40 + ")")
            .call(d3.axisLeft(yScale).tickValues(ticks))
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -200)
                .attr("y", -30)
                .attr("text-anchor", "end")
                .attr("stroke", "black")
                .text("#Of Students");    
                
    

        //update preexisting chart values
        selection
            .transition().duration(1000)
                .attr("height", (d,i) => this.props.height-yScale(d))
                .attr("y", (d,i) => yScale(d)-40)
                .attr("width", xScale.bandwidth())
                .attr("x", (d, i) => xScale(data_x[i]))

        //when adding a new bar
        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(data_x[i]))
            .attr("y", (d) => -40)
            .attr("width", xScale.bandwidth())
            .attr("height", this.props.height)
            .attr("fill", "rgba(135, 206, 235, 1)")
            .transition().duration(1000)
                .attr("height", (d,i) => this.props.height-yScale(d) )
                .attr("y", (d) => yScale(d)-40)
        
        //when removing a bar
        //must fix removing animation
        selection
            .exit()
            .transition().duration(1000)
                .attr("y", (d) => this.props.height)
                .attr("height", this.props.height)
            .remove()    
    
    }

    /*
    updateChart(){
        const data = this.props.data;

        var data_x = data[0];
        var data_y = data[1];
        
        var ticks = [];
        for(var i = 10; i<d3.max(data_y)+10; i = i+10){
            ticks.push(i);
        }

        var selection = d3.selectAll("rect").data(data_y);
        var g = d3.select("g");
        var xScale = d3.scaleBand()
                            .domain(data_x)
                            .range([0, this.props.width])
                            .padding(0.6);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data_y)])
                            .range([this.props.height, 100]);

        //update axis
        g.transition().duration(1000).call(d3.axisBottom(xScale));
        g.transition().duration(1000).call(d3.axisLeft(yScale).tickValues(ticks));
        

        //update preexisting chart values
        selection
            .transition().duration(1000)
                .attr("height", (d,i) => this.props.height-yScale(d))
                .attr("y", (d,i) => yScale(d)-40)
                .attr("width", xScale.bandwidth())
                .attr("x", (d, i) => xScale(data_x[i]))

        //when adding a new bar
        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(data_x[i]))
            .attr("y", (d) => -40)
            .attr("width", xScale.bandwidth())
            .attr("height", this.props.height)
            .attr("fill", "rgba(135, 206, 235, 1)")
            .transition().duration(1000)
                .attr("height", (d,i) => this.props.height-yScale(d) )
                .attr("y", (d) => yScale(d)-40)
        
        //when removing a bar
        //must fix removing animation
        selection
            .exit()
            .transition().duration(1000)
                .attr("y", (d) => this.props.height)
                .attr("height", this.props.height)
            .remove()    
    }
    */
    render(){
        return <div id={"#" + this.props.id}><button onClick={this.changeChart}>Change Data</button></div>
        
      }        
}

export default BarGraph;