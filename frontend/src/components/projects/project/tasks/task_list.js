import React, {useEffect, useState} from "react";
import Task from "./task";
import TaskListHeaders from "./task_list_headers";
import NewTask from "./task/new_task";
import axios_config from "../../../../utils/axios_config";
import CreateNewTask from "./task/create_new_task";
import Input from "../../../../modules/input";


const TaskList = ({myTasks, columns, taskListName, taskListId}) => {
    const [taskList, setTaskList] = useState([]);
    const [columnList, setColumnList] = useState();
    const [openNewTask, setOpenNewTask] = useState(false);



    const change_name = async (name) => {
        if (taskList.name !== name) {
            try {
                const response = await axios_config.put(`/project/tasks/table/name/${taskListId}`, {name});
            } catch (error) {
                console.log(error);
            }
        }
    }

    const get_tasks = async () => {
        try {
            const response = await axios_config.get(`/project/tasks/${taskListId}`)
            setTaskList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const create_new_column = async (name, type) => {
        try {
            const response = await axios_config.post(`/project/tasks/table/columns/${taskListId}?type=${type}`, { name });
            setColumnList([ ...columnList, response.data.column ]);

            const oldTaskList = [...taskList];

            const newTaskList = [];

            let i = 0;

            for (const task of oldTaskList) {
                if (response.data.taskValueList[i]?.taskId === task?.task?.id) {
                    task.taskValueList?.push(response.data.taskValueList[i])
                }
                i++;
                newTaskList.push(task);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const add_new_task_to_list = (task) => {
        setTaskList([...taskList, task]);
        setOpenNewTask(false);
    }

    useEffect(() => {
        get_tasks()
    }, [taskListId]);

    useEffect(() => {
        setColumnList(columns);
    }, [columns]);


    return (
        <div className="mt-10 pb-14 ml-5">
            <Input change_name={change_name} taskListName={taskListName} />
            <table className="mt-2 task-table">
                <TaskListHeaders myTasks={myTasks} columns={columnList} createNewColumn={create_new_column} />
                <tbody>
                    {taskList?.map(item => (
                        <Task key={item.task.id} myTasks={myTasks} task={item.task} values={item.taskValueList}  />
                    ))}
                    {!openNewTask && (
                        <NewTask myTasks={myTasks} onClick={() => setOpenNewTask(true)}/>
                    )}
                </tbody>
            </table>
            {openNewTask && (
                <CreateNewTask add_new_task_to_list={add_new_task_to_list} tableId={taskListId} />
            )}
        </div>
    )
}

export default TaskList;