import React, {useEffect, useState} from "react";
import TaskBoardList from "./task_list";
import NewTaskBoardList from "./new_list";
import axios_config from "../../../../../utils/axios_config";
import {useSelector} from "react-redux";

const TaskBoardLists = () => {

    const [taskLists, setTaskLists] = useState(null);

    const project = useSelector(state => state.project);

    const get_task_lists = async () => {
        try {
            const response = await axios_config.get(`/project/tasks/table/${project.id}`)
            setTaskLists(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_task_lists();
    }, []);

    return (
        <div className="mt-8 ml-8 flex overflow-x-auto pb-4 delay-75 scrollbar_hide">
            {taskLists?.map(taskList => (
                <TaskBoardList key={taskList.id} canAdd={true} taskList={taskList} />
            ))}
            {/*<TaskBoardList />*/}
            {/*<TaskBoardList />*/}
            {/*<TaskBoardList />*/}
            {/*<TaskBoardList />*/}
            <NewTaskBoardList canAdd={true} />
        </div>
    )
}

export default TaskBoardLists;