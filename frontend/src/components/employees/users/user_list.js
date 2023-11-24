import React from "react";
import EmployeesUserListItem from "./user_list_item";

const EmployeesUserList = () => {
    return (
        <div className="employee_user_list flex flex-wrap">
            {[1,2,3,4,5,6,7,8,9,10].map((_, index) => (
                <EmployeesUserListItem key={index} />
            ))}
        </div>
    )
}

export default EmployeesUserList;