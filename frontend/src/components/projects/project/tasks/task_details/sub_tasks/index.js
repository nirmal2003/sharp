import React from "react";
import SubTaskListItem from "./list_item";

const SubTaskList = () => {
    return (
        <ul className="w-full px-8">
            <SubTaskListItem />
            <SubTaskListItem />
            <SubTaskListItem />
            <SubTaskListItem />
            <SubTaskListItem />

            <li className="mt-3">
                <img
                    src="/images/icons/plus.svg"
                    alt="plus"
                    className="hover:bg-light-transparent p-1 rounded cursor-pointer"
                />
            </li>
        </ul>
    )
}

export default SubTaskList;