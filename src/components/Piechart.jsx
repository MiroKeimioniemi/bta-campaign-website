import React from "react";
import { Chart } from "react-google-charts";

export const options = {
};

export function Piechart(props) {

    console.log(props.ideal);

    const data = [
        ["Activity", "Hours per Day"],
        ["Recommended hours of sleep", 8],
        ["Overtime social media usage", ((Math.max(0, props.actual - props.ideal)) * 24)],
        ["Productive social media usage", (Math.min((props.ideal * 24), (props.actual * 24)))],
        ["Remaining awaking time", (24 - 8 - (props.actual) * 24)],
      ];

    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />
    );

}