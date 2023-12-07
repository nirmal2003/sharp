import React from "react";

const SubTaskListItem = () => {
    return (
        <li className="w-full flex items-center bg-light-board-transparent p-3 rounded mt-3">
            <img src="/images/icons/my_tasks.svg" alt="task" className="w-4 cursor-pointer hover:brightness-150" />
            <input className="w-full text-xs text-white ml-3" defaultValue="Sub Task one" />
        </li>
    )
}

export default SubTaskListItem;