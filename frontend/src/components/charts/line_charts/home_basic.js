import React from "react";
import {LineChart} from "@mui/x-charts";

const BasicLineChart = ({ data }) => {
    return (
        <div className="p-4 border border-border-color flex justify-center items-center rounded-lg py-8 bg-light-hover-transparent" style={{maxWidth: '800px' }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 100] }]}
                series={data}
                width={800}
                height={400}
            />
        </div>
    )
}

export default BasicLineChart;