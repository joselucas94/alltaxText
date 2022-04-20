import React, { Component, forceUpdate } from "react";
import Chart from "react-apexcharts";

export default function Charte(props) {

        let state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["January", "February", "March", "April"]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: props.data
                }
            ]
        };
    
    
    
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            width="700"
                        />
                    </div>
                </div>
            </div>
        );
}
