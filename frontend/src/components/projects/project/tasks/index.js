import React, {useEffect, useState} from "react";
import ActionBar from "../navbar/action_bar";
import TaskLists from "./task_lists";
import {useSelector} from "react-redux";
import axios_config from "../../../../utils/axios_config";
import TaskDetails from "./task_details";

const Tasks = () => {

    const [taskLists, setTaskLists] = useState(null);

    const project = useSelector(state => state.project);

    const create_task_list = async () => {
        try {
            const response = await axios_config.post(`/project/tasks/table/${project.id}`, { name: "Next Task List" });
            console.log(response);
            setTaskLists([ ...taskLists, response.data?.table ]);
        } catch (error) {
            console.log(error);
        }
    }

    const get_task_lists = async () => {
        try {
            const response = await axios_config.get(`/project/tasks/table/${project.id}`)
            setTaskLists(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (project) {
            get_task_lists();
        }
    }, [project]);

    useEffect(() => {
        console.log({taskLists})
    }, [taskLists]);

    return (
        <>
            <ActionBar newItem={true} onClick={create_task_list} />
            <TaskDetails />
            <TaskLists myTasks={false} taskLists={taskLists} />
        </>
    )
}

export default Tasks;