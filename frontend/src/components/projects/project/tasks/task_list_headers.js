import React, {useEffect, useRef, useState} from "react";
import ColumnTypes from "./task/column_types";

const TaskListHeaders = ({ myTasks, columns, createNewColumn }) => {

    const [openNewColumn, setOpenNewColumn] = useState(false);
    const newColumnRef = useRef(null);

    const handleClickOutside = (event) => {
        if (newColumnRef.current && !newColumnRef.current.contains(event.target)) setOpenNewColumn(false);
    }

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <thead>
        <tr className="border-y border-y-border-color">
            <th className="h-11">Name</th>
            <th className="h-11">Priority</th>
            {columns?.map(column => (
                <th className="h-11" key={column.id}>
                    <div className="flex items-center justify-center column_hover">
                        <p>{column.name}</p>
                        {/*<img src="/images/icons/delete.svg" alt="delete" className="w-5 ml-1 cursor-pointer opacity-0 hover:brightness-150" />*/}
                    </div>
                </th>
            ))}
            {/*{!myTasks && (*/}
            {/*    <th className="h-11">Assignee</th>*/}
            {/*)}*/}
            {/*<th className="h-11">Due</th>*/}
            {/*<th className="h-11">Status</th>*/}
            <th className="h-11 w-10 relative" ref={newColumnRef}>
                <img src="/images/icons/plus.svg" alt="plus" className="p-1 hover:bg-light-transparent cursor-pointer rounded z-0" onClick={() => setOpenNewColumn(true)} />
                {openNewColumn && (
                    <ColumnTypes createNewColumn={createNewColumn} onClose={() => setOpenNewColumn(false)} />
                )}
            </th>
        </tr>
        </thead>
    )
}

export default TaskListHeaders;