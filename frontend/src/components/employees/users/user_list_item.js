import React from "react";

const EmployeesUserListItem = ({data}) => {
    return (
        <div className="employee_user_list_item flex flex-col items-center w-fit px-5 py-8 bg-light-transparent m-4 rounded-lg border border-border-color">
            <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center" style={{ borderColor: data.roleColor }}>
                <div className="w-16 h-16 rounded-full bg-purple flex justify-center items-center">
                    <h1 className="text-3xl text-white">{data.name?.substr(0, 1)}</h1>
                </div>
            </div>
            <h2 className="text text-white mt-4">{data.name}</h2>
            <h4 className="text-sm text-gray mt-2">{data.role}</h4>
            <h4 className="text-sm text-gray mt-2">Joined in 3 years ago</h4>
            <ul className="flex items-center mt-7">
                <li className="flex flex-col items-center">
                    <h4 className="text-sm text-white">Teams</h4>
                    <p className="text-sm text-gray mt-2 hover:text-white cursor-pointer">{data.teams}</p>
                </li>
                <li className="flex flex-col items-center">
                    <h4 className="text-sm text-white mx-8">Tasks</h4>
                    <p className="text-sm text-gray mt-2 hover:text-white cursor-pointer">{data.tasks}</p>
                </li>
                <li className="flex flex-col items-center">
                    <h4 className="text-sm text-white">Projects</h4>
                    <p className="text-sm text-gray mt-2 hover:text-white cursor-pointer">{data.projects}</p>
                </li>
            </ul>
        </div>
    )
}

export default EmployeesUserListItem;