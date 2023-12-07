import React from "react";
import SpinLoader from "../../../../../elements/loaders/spinner";
import axios_config from "../../../../../utils/axios_config";
import {useSelector} from "react-redux";

const NewMemberListItem = ({data, setMember}) => {

    const project = useSelector(state => state.project);

    const handle_create_project_member = async () => {
        try {
            const response = await axios_config.post(`/project/members/${project?.id}/${data.userId}`);
            console.log(response);
            setMember(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <li className="w-fit flex items-center m-5 py-2 px-4 hover:bg-light-transparent rounded-lg cursor-pointer" onClick={handle_create_project_member}>
            <h3 className="w-12 h-12 rounded-full bg-purple flex justify-center items-center text-xl font-semibold text-gray">{data.name.substr(0, 1)}</h3>
            <p className="text-sm ml-4 text-gray">{data.name}</p>
        </li>
    )
}

export default NewMemberListItem;