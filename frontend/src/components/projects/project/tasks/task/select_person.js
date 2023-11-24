import React, {useEffect, useState} from "react";
import axios_config from "../../../../../utils/axios_config";
import {useSelector} from "react-redux";

const SelectPerson = ({ selectAssignee }) => {

    const [members, setMembers] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const user = useSelector(state => state.user);

    const project = useSelector(state => state.project);

    const get_members = async () => {
        setIsLoading(true);
        try {
            const response = await axios_config.get(`/project/members/${project?.id}`);
            setMembers(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_members();
    }, []);

    return (
        <div className="w-80 p-1 h-fit absolute bg-black border border-border-color rounded top-14 z-30">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {members?.length > 5 && (
                        <div className="p-1 mb-4">
                            <input className="w-full text-sm border border-border-color py-2 px-4 rounded text-light-gray tracking-wider" placeholder="username" />
                        </div>
                    )}
                    <ul className="h-fit max-h-80 overflow-y-auto scrollbar_hide">
                        {members?.map(member => (
                            <li key={member.id} onClick={() => selectAssignee(member.id)} className="flex items-center py-2 px-3 hover:bg-light-transparent cursor-pointer my-1 border-bottom-not-first-child">
                                <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url("${member.image}")` }}>
                                    {!member.image && (
                                        <p className="text-lg text-light-gray">{member.name.substr(0, 1)}</p>
                                    )}
                                </div>
                                <p className="text-gray text-sm ml-2">{member.name}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default SelectPerson;