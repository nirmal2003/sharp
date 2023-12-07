import React from "react";
import EmployeesUserListItem from "./user_list_item";
import {useSelector} from "react-redux";

const EmployeesUserList = () => {

    const employees = useSelector(state => state.employee_users);

    return (
        <div className="employee_user_list flex flex-wrap">
            {employees.map((item, index) => (
                <EmployeesUserListItem data={item} key={index} />
            ))}
        </div>
    )
}

export default EmployeesUserList;