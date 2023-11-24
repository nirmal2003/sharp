import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios_config from "../../utils/axios_config";
import {useDispatch} from "react-redux";
import {setProject} from "../../store/reducers/project/project";

const ProjectWrapper = ({ children }) => {

    const [project, setProject2] = useState(false);

    const { id } = useParams();


    const dispatch = useDispatch();

    const get_project =  async () => {
        try {
            const response = await axios_config.get(`/project/${id}`);
            dispatch(setProject(response.data));
            setProject2(true);
        } catch (error) {
            setProject2(false);
            dispatch(setProject(null));
        }
    }

    useEffect(() => {
        get_project();
    }, [id]);

    return (
        <>
            {project ? (
                <>
                    <>{children}</>
                </>
            ) : (
                <h3 className="w-full min-h-screen">Project not found</h3>
            )}
        </>
    )
}

export default ProjectWrapper;