import React from "react";
import DashboardWrapper from "../../../../components/wrappers/dashboard";
import ProjectNavbar from "../../../../components/projects/project/navbar";
import ProjectMemberProfile from "../../../../components/projects/project/members/profile";

const ProjectMemberProfilePage = () => {
    return (
        <DashboardWrapper>
            <ProjectNavbar />
            <ProjectMemberProfile />
        </DashboardWrapper>
    )
}

export default ProjectMemberProfilePage;