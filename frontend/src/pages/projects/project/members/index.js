import React from "react";
import DashboardWrapper from "../../../../components/wrappers/dashboard";
import ProjectNavbar from "../../../../components/projects/project/navbar";
import ProjectMembers from "../../../../components/projects/project/members";
import ProjectWrapper from "../../../../components/wrappers/project_wrapper";

const ProjectMembersPage = () => {
    return (
        <DashboardWrapper>
            <ProjectNavbar/>
            <ProjectWrapper>
                <ProjectMembers/>
            </ProjectWrapper>
        </DashboardWrapper>
    )
}

export default ProjectMembersPage;