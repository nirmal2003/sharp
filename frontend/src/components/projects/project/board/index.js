import React from "react";
import ActionBar from "../navbar/action_bar";
import TaskBoardLists from "./task/lists";

const TaskBoard = () => {
    return (
        <>
            <ActionBar />
            <TaskBoardLists />
        </>
    )
}

export default TaskBoard;