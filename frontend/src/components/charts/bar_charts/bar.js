import React from "react";
import {BarChart} from "@mui/x-charts";

const Bar = () => {
    return (
        <div className="p-4 border border-border-color flex justify-center items-center rounded-lg py-8 bg-light-hover-transparent" style={{ width: '600px' }}>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
            />
        </div>
    )
}

export default Bar;