import React from "react";

const Member = ({data}) => {
    return (
        <li className="w-fit flex items-center m-5 py-2 px-4 hover:bg-light-transparent rounded-lg cursor-pointer">
            <h3 className="w-12 h-12 rounded-full bg-purple flex justify-center items-center text-xl font-semibold text-gray">{data.name.substr(0, 1)}</h3>
            <p className="text-sm ml-4 text-gray">{data.name}</p>
        </li>
    )
}

export default Member;