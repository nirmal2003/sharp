import React, {useEffect, useState} from "react";
import Member from "./member";
import axios_config from "../../../../utils/axios_config";
import {useSelector} from "react-redux";

const MemberList = () => {

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

    useEffect(() => {
        get_members();
    }, []);

    return (
        <div className="container mx-auto px-3 mt-9">
            <ul className="flex flex-wrap">
                {memberList?.map(member =>  (
                    <Member key={member.id} data={member} />
                ))}
            </ul>
        </div>
    )
}

export default MemberList;