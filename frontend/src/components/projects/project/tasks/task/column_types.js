import React, {useState} from "react";
import {column_types} from "../../../../../data/column_types";

const ColumnTypes = ({ createNewColumn, onClose }) => {

    const [openInput, setOpenInput] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState(3);

    const handle_create = () => {
        if (name.length > 1) {
            createNewColumn(name, type);
        }
    }

    return (
        <div className="absolute bg-black p-4 rounded shadow">
            {openInput && (
                <div className="flex items-center">
                    <input onChange={(event) => setName(event.target.value)} type="text" className="border border-border-color w-full px-3 py-1 rounded text-light-gray tracking-wider mb-1" />
                    <img src="/images/icons/done.svg" alt="done" className="w-5 hover:brightness-150 cursor-pointer ml-2 p-1 bg-light-board-transparent rounded-full" onClick={() => {
                        handle_create()
                        onClose()
                    }} />
                </div>
            )}
            <ul>
                {column_types.map((item, index) => (
                    <li key={index} className="flex items-center w-52 hover:bg-light-transparent py-2 my-1 rounded cursor-pointer" onClick={() => {
                        setOpenInput(!openInput)
                        setType(item.type)
                    }}>
                        <div className="w-7 h-7 bg-border-color border border-border-color flex items-center justify-center mx-3 rounded">
                            <img src={item.image} alt={item.name} className="w-4" />
                        </div>
                        <p className="ml-1">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColumnTypes;