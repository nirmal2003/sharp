import React, {useEffect, useState} from "react";
import TaskList from "./task_list";
import axios_config from "../../../../utils/axios_config";
import {useSelector} from "react-redux";

const TaskLists = ({ myTasks, taskLists }) => {
    return (
        <div className="min-h-screen overflow-x-auto">
            {taskLists?.map(list => (
                <TaskList
                    key={list.id}
                    myTasks={myTasks}
                    columns={list.columns}
                    taskListId={list.id}
                    taskListName={list.name}
                />
            ))}
        </div>
    )
}

export default TaskLists;