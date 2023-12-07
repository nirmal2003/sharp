import React from "react";
import AddTaskComments from "./comment";
import CommentList from "./comments";

const TaskComments = () => {
    return (
        <div className="w-full px-8 mt-8">
            <AddTaskComments />
            <CommentList />
        </div>
    )
}

export default TaskComments;