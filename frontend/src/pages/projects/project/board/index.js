import React from "react";
import ProjectNavbar from "../../../../components/projects/project/navbar";
import DashboardWrapper from "../../../../components/wrappers/dashboard";
import TaskBoard from "../../../../components/projects/project/board";
import ProjectWrapper from "../../../../components/wrappers/project_wrapper";

const TaskBoardPage = () => {
    return (
        <DashboardWrapper>
            <ProjectNavbar />
            <ProjectWrapper>
                <TaskBoard />
            </ProjectWrapper>
        </DashboardWrapper>
    )
}

export default TaskBoardPage;