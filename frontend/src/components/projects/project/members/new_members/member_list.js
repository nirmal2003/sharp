import React, {useEffect, useState} from "react";
import NewMemberListItem from "./member";
import axios_config from "../../../../../utils/axios_config";
import {useDispatch, useSelector} from "react-redux";
import {setEmployeeUsers} from "../../../../../store/reducers/employees/users";

const NewMemberList = ({setMember, memberList}) => {

    const dispatch = useDispatch();

    const project = useSelector(state => state.project);

    const employees = useSelector(state => state.employee_users);


    const get_members = async () => {
        try {
            const response = await axios_config.get(`/employees`);
            dispatch(setEmployeeUsers(response.data));
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
                {employees?.map(member =>  (
                    <>
                        {!memberList.some(item => item.userId === member.userId) && (
                            <NewMemberListItem memberList={memberList} setMember={setMember} key={member.id} data={member} />
                        )}
                    </>
                ))}
            </ul>
        </div>
    )
}

export default NewMemberList;