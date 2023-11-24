import React, {useEffect, useState} from "react";
import Task from "./index";
import axios_config from "../../../../../utils/axios_config";

const TaskBoardList = ({canAdd, taskList}) => {

    const [name, setName] = useState("");
    const [nameInputLength, setNameInputLength] = useState(100);

    const [tasks, setTasks] = useState([]);

    const adjustInputWidth = (event) => {
        setName(event.target.value);
        const inputContent = event.target.value;

        setNameInputLength(inputContent.length * 10);
    };

    const get_tasks = async () => {
        try {
            const response = await axios_config.get(`/project/tasks/${taskList?.id}`);
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setName(taskList?.name)

        get_tasks();
    }, [taskList]);


    return (
        <div className="w-72 flex flex-col items-center mr-20">
            <div className="w-72 flex justify-between items-center">
                <input
                    style={{width: nameInputLength}}
                    onChange={adjustInputWidth}
                    placeholder="task 01"
                    value={name}
                    className="w-fit bg-transparent ml-2 text-gray text-sm outline-0 border rounded border-transparent focus:border-gray p-1"
                />
                {/*<h3 className="text-white">Tasks List</h3>*/}
                <div className="flex items-center">
                    {canAdd && (
                        <img src="/images/icons/plus.svg" alt="plus"
                             className="w-6 p-1 hover:bg-light-transparent cursor-pointer rounded"/>
                    )}
                    {!canAdd && (
                        <img src="/images/icons/delete.svg" alt="plus"
                             className="w-7 ml-4 p-1 hover:bg-light-transparent cursor-pointer rounded"/>
                    )}
                </div>
            </div>
            {tasks.map(task => (
                <Task key={task.task?.id} data={task} />
            ))}
            {/*<Task />*/}
            {/*<Task />*/}
            {/*<Task />*/}
            {/*<Task />*/}
        </div>
    )
}

export default TaskBoardList;