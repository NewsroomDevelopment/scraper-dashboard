// BarGraph.js
//generate a bar graph given the data and with and height restrictions
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';





function BarGraph ({ width, height, data }){
    const ref = useRef();
    var data_x = data[0];
    var data_y = data[1];
    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
        var g = svg.append("g").attr("transform", "translate(" + 0 + "," + 360 + ")")
        
        var ticks = [];
        for(var i = 10; i<100; i = i+10){ //change 100 to d3.max(data_y)+10 when you figure out how to update y axis
            ticks.push(i);
        }

        var xScale = d3.scaleBand()
                            .domain(data[0])
                            .range([0, width])
                            .padding(0.6); 
        var yScale = d3.scaleLinear()
                            .domain([0, 100])//change to [0,d3.max(data_y)] if you figure out how to update y axis
                            .range([height, 100]);
        g.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")")
        .call(d3.axisBottom(xScale)).append("text")
                .attr("x", 310)
                .attr("y", 30)
                .attr("text-anchor", "end")
                .attr("stroke", "black")
                .text("Year");
    
        svg.append("g")
            .attr("transform", "translate(" + 50 + "," + -40 + ")")
            .call(d3.axisLeft(yScale).tickValues(ticks))
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -200)
                .attr("y", -30)
                .attr("text-anchor", "end")
                .attr("stroke", "black")
                .text("#Of Students");
    }, []);
    
    useEffect(() => {
        draw();
    }, [data]);



    const draw = () => {


        //intialize the graph
        const svg = d3.select(ref.current);
            
       var selection = svg.selectAll("rect").data(data_y);
        
        //intialize the axis
        var xScale = d3.scaleBand()
                            .domain(data_x)
                            .range([0, width])
                            .padding(0.6);
        var yScale = d3.scaleLinear()
                            .domain([0, 100])//change to [0,d3.max(data_y)] if you figure out how to update y axis
                            .range([height, 100]);
        var ticks = [];
        for(var i = 10; i<d3.max(data_y)+10; i = i+10){
            ticks.push(i);
        }
        
        var g = svg.select("g");
        g.transition().duration(1000).call(d3.axisBottom(xScale));
        //g.transition().duration(1000)..call(d3.axisLeft(yScale).tickValues(ticks))
                
    

        //update preexisting chart values
        selection
            .transition().duration(1000)
                .attr("height", (d,i) => height-yScale(d))
                .attr("y", (d,i) => yScale(d)-40)
                .attr("width", xScale.bandwidth())
                .attr("x", (d, i) => xScale(data_x[i]))

        //when adding a new bar
        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(data_x[i]))
            .attr("y", (d) => height)
            .attr("width", xScale.bandwidth())
            .attr("height", height)
            .attr("fill", "rgba(135, 206, 235, 1)")
            .transition().duration(1000)
                .attr("height", (d,i) => height-yScale(d) )
                .attr("y", (d) => yScale(d)-40)
        
        //when removing a bar
        //must fix removing animation
        selection
            .exit()
            .transition().duration(1000)
                .attr("y", (d) => height)
                .attr("height", height)
            .remove()    
    
    }

    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )
    
}

export default BarGraph;