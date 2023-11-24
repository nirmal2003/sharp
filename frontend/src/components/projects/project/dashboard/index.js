import React from "react";
import ActionBar from "../navbar/action_bar";
import ProjectDashboardNumbers from "./numbers";
import ProjectDashboardCharts from "./charts";

const ProjectDashboard = () => {
    return (
        <>
            <ActionBar newItem={true} />
            <div className="container mx-auto px-8 mt-14">
                <ProjectDashboardNumbers />
                <ProjectDashboardCharts />
            </div>
        </>
    )
}

export default ProjectDashboard;