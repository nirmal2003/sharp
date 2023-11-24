import React, {useEffect, useState} from "react";
import axios_config from "../../../../utils/axios_config";
import {useDispatch, useSelector} from "react-redux";
import {setProjects} from "../../../../store/reducers/project";
import {Link} from "react-router-dom";

const SelectProject = ({ onClose }) => {

    const [openCreateProject, setOpenCreateProject] = useState(false);
    const [projectName, setProjectName] = useState("");

    const dispatch = useDispatch();

    const projects = useSelector(state => state.projects);

    const handle_create_project = async () => {
        if (projectName.length > 2) {
            setProjectName("");
            try {
                const response = await axios_config.post("/project", {name: projectName});
                dispatch(setProjects([response.data, ...projects]));
                setOpenCreateProject(false);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div
            className="absolute w-96 h-fit bg-dark left-16 z-50 shadow-2xl p-4 top-0 border border-border-color rounded-md cursor-default">
            <ul className="flex flex-col mb-2">
                {projects?.map(item => (
                    <li key={item.id} className="flex items-center py-1.5 px-2 hover:bg-light-transparent rounded-md mt-2 cursor-pointer">
                        <Link to={`/project/${item.id}`} className="flex items-center w-full" onClick={onClose}>
                            <h3 className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white">{item.name.substr(0, 2)}</h3>
                            <p className="ml-3 text-sm text-gray">{item.name}</p>
                        </Link>
                    </li>
                ))}
                <li className="flex items-center py-1.5 px-2 hover:bg-light-transparent rounded-md mt-2 cursor-pointer"
                    onClick={() => setOpenCreateProject(!openCreateProject)}>
                    {openCreateProject ? (
                        <img className="w-6 h-6 ml-1" src="/images/icons/expand.svg" alt="add"/>
                    ) : (
                        <img className="w-5 h-5 ml-1" src="/images/icons/plus.svg" alt="add"/>
                    )}
                    <p className="ml-3 text-sm text-gray">Project one</p>
                </li>
                {openCreateProject && (
                    <div className="flex items-center justify-between rounded-md mt-2 pl-2 border border-border-color">
                        <input className="text-sm w-full text-light-gray" placeholder="Project name"
                               onChange={(e) => setProjectName(e.target.value)}/>
                        <button className="bg-light-gray p-2 rounded-r-md" onClick={handle_create_project}>
                            <img className="w-6" src="/images/icons/save.svg" alt="save"/>
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default SelectProject;