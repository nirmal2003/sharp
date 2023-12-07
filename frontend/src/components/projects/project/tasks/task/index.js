import React, {useEffect, useState} from "react";
import PersonColumn from "./person";
import TextColumn from "./text_column";
import DateColumn from "./date_column";
import Options from "./options";
import axios_config from "../../../../../utils/axios_config";
import PriorityOptions from "./options/Priority";
import {useDispatch} from "react-redux";
import {setTaskId} from "../../../../../store/reducers/project/task/details";

const Task = ({ myTasks, task, values }) => {

    const [taskName, setTaskName] = useState(task.name);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    const dispatch = useDispatch();

    const update_task_name = async () => {
        try {
            await axios_config.put(`/project/tasks/name/${task.id}`, { name: taskName });
        } catch (error) {
            console.log(error);
        }
    }

    const complete_task = async () => {
        try {
            await axios_config.put(`/project/tasks/${task.id}/complete`);
            setIsCompleted(!isCompleted);
        } catch (error) {
            console.log(error);
        }
    }

    const handle_set_task_id = () => {
        dispatch(setTaskId(task));
    }



    return (
        <tr className="border-b border-b-border-color hover:bg-light-hover-transparent" style={{ borderLeft: isCompleted ? '2px solid rgba(0, 255, 8, 1)' : '2px solid transparent' }}>
            <td className="h-11" onClick={handle_set_task_id}>
                <TextColumn value={taskName} onChange={(event) => setTaskName(event.target.value)} onBlur={update_task_name} complete_task={complete_task} />
            </td>
            <td className="h-11">
                <PriorityOptions value={{name: task?.priority === 1 ? 'High' : task?.priority === 2 ? 'Medium' : 'Low' , number: task?.priority}} taskId={task?.id} />
            </td>
            {/*{!myTasks && (*/}
            {/* )}*/}

            {values?.map(item => (
                <td className="h-11 relative">
                    {item.type === 1 && (
                        <PersonColumn value={item.personValue} id={item.id} />
                    )}
                    {item.type === 2 && (
                        <DateColumn startDate={new Date(item.dateTimeStartValue)} endDate={new Date(item.dateTimeEndValue)} id={item.id} />
                    )}
                    {item.type === 3 && (
                        <Options value={item.optionValue} id={item.id} />
                    )}
                </td>
            ))}
            {/*<td className="h-11">*/}
            {/*    <DateColumn />*/}
            {/*</td>*/}
            {/*<td className="h-11">*/}
            {/*    <Options />*/}
            {/*</td>*/}
            <td className="h-11">
            </td>
        </tr>
    )
}

export default Task;