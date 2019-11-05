import React from 'react';
import * as d3 from "d3";

class BarChart extends React.Component{

    componentDidMount(){
        this.drawChart();
    }
    drawChart() {
        const data = [12, 5, 19, 6, 3, 10];   
        const h = 500;
        const w = 600;
        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 50)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");
        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - (10 * d) - 3)
    }

    render(){
        return <div id={"#" + this.props.id}></div>
      }


}

export default BarChart;