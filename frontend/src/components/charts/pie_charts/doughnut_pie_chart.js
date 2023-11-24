import React from "react";
import {PieChart} from "@mui/x-charts";

const DoughnutPieChart = ({data}) => {
    return (
        <div className="p-4 border border-border-color flex justify-center items-center rounded-lg py-8 bg-light-hover-transparent" style={{ width: '600px' }}>
            <PieChart
                series={[
                    {
                        data: data,
                        innerRadius: 100,
                        outerRadius: 70
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default DoughnutPieChart;