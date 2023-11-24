import React from "react";
import DashboardWrapper from "../../../../components/wrappers/dashboard";
import Tasks from "../../../../components/projects/project/tasks";
import ProjectNavbar from "../../../../components/projects/project/navbar";
import ProjectWrapper from "../../../../components/wrappers/project_wrapper";

const TasksPage = () => {
    return (
        <DashboardWrapper>
            <ProjectNavbar />
            <ProjectWrapper>
                <Tasks />
            </ProjectWrapper>
        </DashboardWrapper>
    )
}

export default TasksPage;