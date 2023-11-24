import React from "react";

const EmployeesRoleListItem = ({item}) => {
    return (
        <div className="flex items-center w-fit py-3 px-4 bg-light-transparent m-4 rounded-lg border border-border-color">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                <h3 className="text-xl font-semibold">{item.name.substr(0, 1)}</h3>
            </div>
            <h2 className="text-white text ml-4 hover:text-gray cursor-pointer">{item.name}</h2>
            <h2 className="text-gray text ml-8 hover:text-white cursor-pointer">3</h2>
        </div>
    )
}

export default EmployeesRoleListItem;