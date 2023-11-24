import React from "react";
import DashboardWrapper from "../../../components/wrappers/dashboard";
import MyTasksNavbar from "../../../components/my_tasks/navbar";
import MyTasks from "../../../components/my_tasks/tasks";

const MyTasksPage = () => {
    return (
        <DashboardWrapper>
            <MyTasksNavbar />
            <MyTasks />
        </DashboardWrapper>
    )
}

export default MyTasksPage;