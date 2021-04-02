import React, { useEffect } from 'react';
import * as d3 from 'd3';

import './linechart.css';

function LineChart(props) {
  const { data, width, height } = props;

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // Remove the old chart
    d3.select('#container')
      .select('svg')
      .remove();

    // Remove the old tooltip
    d3.select('#container')
      .select('.tooltip')
      .remove();

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const yMinValue = d3.min(data, d => d.value);
    const yMaxValue = d3.max(data, d => d.value);

    const xMinValue = d3.min(data, d => d.label);
    const xMaxValue = d3.max(data, d => d.label);

    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, yMaxValue]);

    const line = d3
      .line()
      .x(d => xScale(d.label))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    const svg = d3
      .select('#container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Append the gridlines along the Y-axis
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3.axisBottom(xScale)
          .tickSize(-height)
          .tickFormat(''),
      );
      

    // Append the gridlines along the X-axis
    svg
      .append('g')
      .attr('class', 'grid')
      .call(
        d3.axisLeft(yScale)
          .tickSize(-width)
          .tickFormat(d3.format("d")),
      );
    

    // Append the X-axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15).tickFormat(d3.format("d")));
      

    // Append the Y-axis
    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));

    // Append the path going through the data points
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#f6c3d0')
      .attr('stroke-width', 4)
      .attr('class', 'line')
      .attr('d', line);


    // Circle marker
    const focus = svg
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none');

    focus.append('circle').attr('r', 5).attr('class', 'circle');

    // Append tooltip
    const tooltip = d3
      .select('#container')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);
      
    //append x axis and y axis
    svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width) 
      .attr("y", height + 45)
      .text("Year");
    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", -45)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("W/L Ratio");

    // Used for tracking events and positioning the marker and tooltip
    svg
      .append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .style('opacity', 0)
      .on('mouseover', () => {
        focus.style('display', null);
      })
      .on('mouseout', () => {
        tooltip
          .transition()
          .duration(300)
          .style('opacity', 0);
      })
      .on('mousemove', mousemove);

    function mousemove(event) {
      const bisect = d3.bisector(d => d.label).left;
      const xPos = d3.pointer(event, this)[0];
      const x0 = bisect(data, xScale.invert(xPos));
      const d0 = data[x0];

      focus.attr(
        'transform',
        `translate(${xScale(d0.label)},${yScale(d0.value)})`,
      );
      tooltip
        .transition()
        .duration(300)
        .style('opacity', 0.9);
      tooltip
        .html(d0.tooltipContent || d0.label)
        .style(
          'transform',
          `translate(${xScale(d0.label) + 30}px,${yScale(d0.value) - 30}px)`,
        );
    }
  }

  return <div id="container" />;
}

export default LineChart;