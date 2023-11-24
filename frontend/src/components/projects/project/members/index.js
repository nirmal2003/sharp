import React from "react";
import ActionBar from "../navbar/action_bar";
import MemberList from "./member_list";

const ProjectMembers = () => {
    return (
        <>
            <ActionBar newItem={true} />
            <MemberList />
        </>
    )
}

export default ProjectMembers;