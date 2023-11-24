import React, {useEffect, useState} from "react";
import ProjectDashboardPieCharts from "./pie_charts";
import ProjectDashboardBarCharts from "./bar_charts";
import axios_config from "../../../../../utils/axios_config";
import {useSelector} from "react-redux";

const ProjectDashboardCharts = () => {
    const [charts, setCharts] = useState(null);

    const project = useSelector(state => state.project);

    const get_charts = async () => {
        try {
            const response = await axios_config.get(`/project/dashboard/${project?.id}/charts/default`);
            setCharts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_charts();
    }, [project]);


    return (
        <div className="flex flex-col pb-10">
            <ProjectDashboardPieCharts tasksPieChart={charts?.tasksPieChart} priorityPieChart={charts?.priorityPieChart} />
            <ProjectDashboardBarCharts />
        </div>
    )
}

export default ProjectDashboardCharts;