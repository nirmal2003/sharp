import React from "react";
import EmployeesUserRequestListItem from "./list_item";

const EmployeesUserRequestList = ({list}) => {
    return (
        <ul className="mt-5 z-0 flex flex-wrap">
            {list.map((item, index) => (
                <EmployeesUserRequestListItem key={index} data={item} />
            ))}
        </ul>
    )
}

export default EmployeesUserRequestList;