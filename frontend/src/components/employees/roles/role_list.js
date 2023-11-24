import React from "react";
import EmployeesRoleListItem from "./roles_list_item";
import {useSelector} from "react-redux";


const EmployeesRoleList = () => {
    const employees_roles = useSelector(state => state.employees_roles);


    return (
        <div className="flex flex-wrap">
            {employees_roles.map((item, index) => (
                <EmployeesRoleListItem item={item} key={index} />
            ))}
        </div>
    )
}

export default EmployeesRoleList;