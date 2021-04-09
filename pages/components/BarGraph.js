// BarGraph.js
//generate a bar graph given the data and with and height restrictions
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';




const datas = [
    [[1,2,3,4],[10, 30, 40, 20]],
    [[1,2,3,4,5,6],[10, 40, 30, 20, 50, 10]],
    [[1,2,3,4,5],[60, 30, 40, 20, 30]]
]
var i = 0;

function CreateBarGraph ({ width, height, data, id }){
    const ref = useRef();
    var data_x = data[0];
    var data_y = data[1];

    //stuff that only runs once
    useEffect(() => {
        //create svg
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
        
        //intialize axis
        var ticks = [];
        for(var i = 10; i<d3.max(data_y)+20; i = i+10){ //change 100 to d3.max(data_y)+10 when you figure out how to update y axis
            ticks.push(i);
        }
        
        var xScale = d3.scaleBand()
                            .domain(data[0])
                            .range([0, width])
                            .padding(0.6); 
        var yScale = d3.scaleLinear()
                            .domain([0,d3.max(data_y)+10])//change to  if you figure out how to update y axis
                            .range([height, 100]);
    
        svg.append("g").attr("transform", "translate(" + 0 + "," + 360 + ")")
            .call(d3.axisBottom(xScale))
            .attr("id", "xaxis_" + id)
            .append("text")
                    .attr("x", 310)
                    .attr("y", 30)
                    .attr("text-anchor", "end")
                    .attr("stroke", "black")
                    .text("Year");
                
    
        svg.append("g")
            .attr("transform", "translate(" + 50 + "," + -40 + ")")
            .call(d3.axisLeft(yScale).tickValues(ticks))
            .attr("id", "yaxis_"+id)
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -200)
                .attr("y", -30)
                .attr("text-anchor", "end")
                .attr("stroke", "black")
                .text("#Of Students");
        
        //hidden tags for hovering over each bar
        svg.append("text")
            .attr("x", -200)
            .attr("y", -30)
            .attr("class", "tooltip-donut_"+id)
            .style("opacity", 0);
    }, []);
    
    useEffect(() => {
        draw();
    },[data]);



    const draw = () => {


        //ireference to the graph
        const svg = d3.select(ref.current);
            
        var selection = svg.selectAll("rect").data(data_y);
        
        //reference to axis and update the scale and ticks
        var xScale = d3.scaleBand()
                            .domain(data_x)
                            .range([0, width])
                            .padding(0.6);
        var yScale = d3.scaleLinear()
                            .domain([0,d3.max(data_y)+10])
                            .range([height, 100]);
        var ticks = [];
        for(var i = 10; i<d3.max(data_y)+20; i = i+10){
            ticks.push(i);
        }
        
        //update x and y axis
        var x = svg.select("#xaxis_"+id);
        x.transition().duration(1000).call(d3.axisBottom(xScale));
        
        var y = svg.select("#yaxis_"+id);
        y.transition().duration(1000).call(d3.axisLeft(yScale).tickValues(ticks))
                
    
        var hover_tag = svg.select(".tooltip-donut_"+id)
        //update preexisting chart values
        selection
            .on('mouseover', function (d, i) {
                d3.select(this).transition("color")
                    .duration('50')
                    .attr('opacity', '.85')
                hover_tag.transition("tag")
                    .duration(50)
                    .style("opacity", 1);
                hover_tag
                    .attr("x", Number(this.getAttribute("x"))+xScale.bandwidth())
                    .attr("y", yScale(i)-41)
                    .attr("text-anchor", "end")
                    .attr("stroke", "black")
                    .text(i);

            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition("color")
                    .duration('50')
                    .attr('opacity', '1')
                hover_tag.transition("tag")
                    .duration(50)
                    .style("opacity", 0)
                })
            .transition().duration(1000)
                .attr("height", (d,i) => height-yScale(d))
                .attr("y", (d,i) => yScale(d)-40)
                .attr("width", xScale.bandwidth())
                .attr("x", (d, i) => xScale(data_x[i]))
                

        //when adding a new bar
        selection
            .enter()
            .append("rect")
            .on('mouseover', function (d, i) {
                d3.select(this).transition("color")
                    .duration('50')
                    .attr('opacity', '.85')
                hover_tag.transition("tag")
                    .duration(50)
                    .style("opacity", 1);
                hover_tag
                    .attr("x", Number(this.getAttribute("x"))+xScale.bandwidth())
                    .attr("y", yScale(i)-41)
                    .attr("text-anchor", "end")
                    .attr("stroke", "black")
                    .text(i);

            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition("color")
                    .duration('50')
                    .attr('opacity', '1')
                hover_tag.transition("tag")
                    .duration(50)
                    .style("opacity", 0)
                })
            .attr("x", (d, i) => xScale(data_x[i]))
            .attr("y", (d) => height)
            .attr("width", xScale.bandwidth())
            .attr("height", height)
            .attr("fill", "rgba(135, 206, 235, 1)")
            .transition().duration(1000)
                .attr("height", (d,i) => height-yScale(d) )
                .attr("y", (d) => yScale(d)-40)
            
        
        //when removing a bar
        selection
            .exit()
            .transition().duration(1000)
                .attr("y", (d) => height)
                .attr("height", height)
            .remove()    
    
    }
    return (
        <div className="chart" id = {id}>
            <svg ref={ref}>
            </svg>
        </div>
        
    )
    
}

class BarGraph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : datas[0],
            width : 600,
            height : 400,
            id : "bar"
        }
    }


    changeChart = () => {
        i++
        if(i === datas.length) i = 0;
        this.setState({data: datas[i]});

    }

    render(){
        return (
        <div className="BarGraphs" >
        
            <h2>Graphs with React</h2>
            <button onClick={this.changeChart}>Change Data</button>
        <CreateBarGraph id = {this.state.id} data={this.state.data} width={this.state.width} height={this.state.height} />
        
        </div>

    );
    }
    
}

export default BarGraph;
