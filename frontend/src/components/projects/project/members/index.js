import React, {useEffect, useState} from "react";
import ActionBar from "../navbar/action_bar";
import MemberList from "./member_list";
import NewMembers from "./new_members";
import {useSelector} from "react-redux";
import axios_config from "../../../../utils/axios_config";

const ProjectMembers = () => {
    const [openNewMembers, setOpenNewMembers] = useState(false);

    const [memberList, setMemberList] = useState([]);

    const project = useSelector(state => state.project);


    const get_members = async () => {
        try {
            const response = await axios_config.get(`/project/members/${project?.id}`);
            setMemberList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handle_new_members = (member) => {
        setMemberList([member, ...memberList]);
    }

    useEffect(() => {
        get_members();
    }, []);


    return (
        <>
            <NewMembers open={openNewMembers} onClose={() => setOpenNewMembers(false)} setMember={handle_new_members} memberList={memberList} />
            <ActionBar newItem={true} onClick={() => setOpenNewMembers(true)} />
            <MemberList memberList={memberList} />
        </>
    )
}

export default ProjectMembers;