import React from "react";
import DashboardWrapper from "../../../components/wrappers/dashboard";
import MyTasksNavbar from "../../../components/my_tasks/navbar";
import ProjectDashboard from "../../../components/projects/project/dashboard";

const MyTasksDashboardPage = () => {
    return (
        <DashboardWrapper>
            <MyTasksNavbar />
            <ProjectDashboard />
        </DashboardWrapper>
    )
}

export default MyTasksDashboardPage;