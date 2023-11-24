import React from "react";

const ActionBar = ({ newItem, onClick }) => {
    return (
        <ul className="flex items-center">
            {newItem && (
                <li className="flex items-center px-2 py-1.5 hover:bg-light-transparent m-2 rounded cursor-pointer border border-border-color" onClick={onClick}>
                    <img src="/images/icons/plus.svg" alt="add" />
                    <p className="ml-3 text-gray font-normal text-sm tracking-wide">new list</p>
                </li>
            )}
            <li className="flex items-center px-2 py-1.5 hover:bg-light-transparent m-2 rounded cursor-pointer">
                <img src="/images/icons/filter.svg" alt="add" />
                <p className="ml-3 text-gray font-normal text-sm tracking-wide">filter</p>
            </li>
            <li className="flex items-center px-2 py-1.5 hover:bg-light-transparent m-2 rounded cursor-pointer">
                <img src="/images/icons/hide.svg" alt="add" />
                <p className="ml-3 text-gray font-normal text-sm tracking-wide">hide</p>
            </li>
        </ul>
    )
}

export default ActionBar;