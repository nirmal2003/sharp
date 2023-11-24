import React from "react";
import {PieChart} from "@mui/x-charts";


// data: [
//     { id: 0, value: 10, label: 'series A' },
//     { id: 1, value: 15, label: 'series B' },
//     { id: 2, value: 20, label: 'series C' },
// ],

const Pie = ({data}) => {
    return (
        <div className="p-4 border border-border-color flex justify-center items-center rounded-lg py-8 bg-light-hover-transparent" style={{ width: '600px' }}>
            <PieChart
                series={[
                    {
                        data
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default Pie;