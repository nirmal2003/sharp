import React from "react";
import ActionBar from "../../projects/project/navbar/action_bar";
import TaskLists from "../../projects/project/tasks/task_lists";

const MyTasks = () => {
    return (
        <div>
            <ActionBar />
            <TaskLists myTasks={true} />
        </div>
    )
}

export default MyTasks;