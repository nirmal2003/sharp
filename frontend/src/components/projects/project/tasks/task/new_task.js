import React from "react";

const NewTask = ({onClick}) => {
    return (
        <tr className="border-b border-b-border-color">
            <td className="h-11" style={{ background: "transparent" }}>
                <img
                    src="/images/icons/plus.svg"
                    alt="plus"
                    className="hover:bg-light-transparent p-1 rounded cursor-pointer"
                    onClick={onClick}
                />
            </td>
        </tr>
    )
}

export default NewTask;