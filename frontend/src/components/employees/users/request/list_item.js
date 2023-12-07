import React from "react";

const EmployeesUserRequestListItem = ({data}) => {

    const copy_link = () => {
        navigator.clipboard.writeText(`http://localhost:3000/invite/${data.id}`);
    }


    return (
        <li onClick={copy_link} className="w-fit flex items-center justify-center bg-white px-3 py-1 mx-1 my-2 rounded-2xl shadow-2xl shadow-black cursor-pointer hover:opacity-80 border border-border-color" style={{ backgroundColor: data.color }}>
            <h3 className="text-sm text-white font-semibold">{data.roleName}</h3>
            <img src="/images/icons/close.svg" alt="close" className="w-6 ml-2" />
        </li>
    )
}

export default EmployeesUserRequestListItem;