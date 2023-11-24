import React from "react";
import DashboardWrapper from "../../../components/wrappers/dashboard";
import MyTasksNavbar from "../../../components/my_tasks/navbar";
import TaskBoard from "../../../components/projects/project/board";

const MyTasksBoardPage = () => {
    return (
        <DashboardWrapper>
            <MyTasksNavbar />
            <TaskBoard />
        </DashboardWrapper>
    )
}

export default MyTasksBoardPage;