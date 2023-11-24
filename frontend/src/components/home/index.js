import React from "react";
import BasicLineChart from "../charts/line_charts/home_basic";
import Pie from "../charts/pie_charts/pie";
import DoughnutPieChart from "../charts/pie_charts/doughnut_pie_chart";
import Bar from "../charts/bar_charts/bar";
import {PieChart} from "@mui/x-charts";


const Home = () => {
    return (
        <div className="pt-12">
            <div className="w-full px-10 flex justify-start">
                <div className="w-9/12 home-header rounded p-6">
                    <h1 className="text-2xl  font-semibold">Welcome</h1>
                    <h1 className="text-xl  mt-1 font-medium">Nirmal salinda</h1>
                    <p className="text">Plan with precision, lead with vision. Today's project success begins with <br /> your direction.</p>
                    <button className="px-12 py-2 text-white font-semibold rounded cursor-pointer">Blog</button>
                    <h2 className="font-semibold">S</h2>
                </div>
                <div className="home-header-user border border-border-color ml-10 bg-light-hover-transparent rounded flex justify-center items-center">
                </div>
            </div>
            {/*<div className=" flex justify-between mx-auto" style={{ maxWidth: '1500px' }}>*/}
            {/*    <BasicLineChart data={[*/}
            {/*        {*/}
            {/*            data: [2, 5.5, 2, 20.5, 1.5, 5, 10, 15],*/}
            {/*        },*/}
            {/*    ]} />*/}
            {/*    <Bar />*/}
            {/*</div>*/}
            {/*<div className="mt-12 w-full flex justify-between mx-auto" style={{ maxWidth: '1500px' }}>*/}
            {/*    <Pie data={[*/}
            {/*        { id: 0, value: 2, label: 'Completed' },*/}
            {/*        { id: 1, value: 5, label: 'Pending' },*/}
            {/*    ]} />*/}
            {/*    <DoughnutPieChart data={[*/}
            {/*        { id: 0, value: 2, label: 'Completed' },*/}
            {/*        { id: 1, value: 5, label: 'Pending' },*/}
            {/*    ]} />*/}
            {/*</div>*/}
        </div>
    )
}

export default Home;