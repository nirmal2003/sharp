import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTaskId} from "../../../../../store/reducers/project/task/details";
import TaskDescription from "./description";
import SubTaskList from "./sub_tasks";
import TaskComments from "./comments";

const TaskDetails = ({setMember, memberList}) => {
    const dispatch = useDispatch();

    const task = useSelector(state => state.task_details);

    const onClose = () => {
        dispatch(setTaskId(null));
    }


    return (
        <div className="w-full h-screen bg-black-transparent fixed top-0 left-0 overflow-x-hidden" style={{ zIndex: task ? 50 : -1 }}>
            <div className="w-3/6 h-screen bg-dark absolute top-0 z-30 drop-shadow-xl window_box_shadow scrollbar_hide overflow-x-hidden transition-all" style={{ right: task ? '0' : '-51%' }}>
                <div className="flex items-center justify-between px-4 py-5 border-b border-border-color">
                    <h2 className="text-white text">{task?.name}</h2>
                    <img src="/images/icons/close.svg" alt="close" onClick={onClose} className="w-7 cursor-pointer hover:brightness-150" />
                </div>

                <TaskDescription />

                <SubTaskList />

                <TaskComments />

            </div>
        </div>
    )
}

export default TaskDetails;