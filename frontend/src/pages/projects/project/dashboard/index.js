import React from "react";
import ProjectNavbar from "../../../../components/projects/project/navbar";
import DashboardWrapper from "../../../../components/wrappers/dashboard";
import ProjectDashboard from "../../../../components/projects/project/dashboard";
import ProjectWrapper from "../../../../components/wrappers/project_wrapper";

const ProjectDashboardPage = () => {
    return (
        <DashboardWrapper>
            <ProjectNavbar />
            <ProjectWrapper>
                <ProjectDashboard />
            </ProjectWrapper>
        </DashboardWrapper>
    )
}

export default ProjectDashboardPage;