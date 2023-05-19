import React from "react";
import { Chart } from "react-google-charts";
import '../stylesheets/style.css';
import '../stylesheets/dataVisualizer.css';

export const options = {
    legend: 'below',
    pieStartAngle: -120,
    slices: {
        1: { color: 'orange' },
        2: { color: 'red' }
    },
    legend: {
        position: 'bottom',
        alignment: 'center',
        maxLines: 4,
        textStyle: { 
            fontName: 'Open Sans',
            fontSize: 20 }
    },
    chartArea: {
        left: 0,
        top: 0,
        width:'100%',
        height:'90%'},
    fontSize: 20
};

export function Piechart(props) {

    console.log(props.ideal);

    const data = [
        ["Activity", "Hours per Day"],
        ["Sleep", (8 - Math.min(8, Math.max(0, ((props.actual * 24) - 16))))],
        ["Productive social media usage", Math.max(0, (Math.min((props.ideal * 24), (props.actual * 24))))],
        ["Overtime social media usage", Math.min(24, ((Math.max(0, props.actual - props.ideal)) * 24))],
        ["Remaining awaking time", (24 - 8 - (Math.min(props.actual, (2/3))) * 24)],
      ];

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"clamp(10vh, 70vh, 100vw)"}
        />
    );

}