import React, {useEffect, useState} from "react";
import axios_config from "../../../../../utils/axios_config";
import {useSelector} from "react-redux";

const ProjectDashboardNumbers = () => {
    const [numbers, setNumbers] = useState(null);

    const project = useSelector(state => state.project);

    const get_numbers = async () => {
        try {
            const response = await axios_config.get(`/project/dashboard/${project?.id}/numbers`);
            setNumbers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_numbers();
    }, [project]);

    return (
        <ul className="flex flex-wrap justify-between">
            <li className="w-60 h-32 border border-border-color rounded-lg flex flex-col items-center justify-center bg-light-hover-transparent">
                <p className="text text-gray">Completed Tasks</p>
                <h2 className="text text-xl mt-3 text-white">{numbers?.completedTasks}</h2>
            </li>
            <li className="w-60 h-32 border border-border-color rounded-lg flex flex-col items-center justify-center bg-light-hover-transparent">
                <p className="text text-gray">Time Left</p>
                <h2 className="text text-xl mt-3 text-white">1 mon, 2wk</h2>
            </li>
            <li className="w-60 h-32 border border-border-color rounded-lg flex flex-col items-center justify-center bg-light-hover-transparent">
                <p className="text text-gray">Overdue Tasks</p>
                <h2 className="text text-xl mt-3 text-white">1</h2>
            </li>
            <li className="w-60 h-32 border border-border-color rounded-lg flex flex-col items-center justify-center bg-light-hover-transparent">
                <p className="text text-gray">Incomplete Tasks</p>
                <h2 className="text text-xl mt-3 text-white">{numbers?.inCompletedTasks}</h2>
            </li>
        </ul>
    )
}

export default ProjectDashboardNumbers;