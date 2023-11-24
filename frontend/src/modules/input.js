import React, {useEffect, useState} from "react";

const Input = ({taskListName, change_name}) => {
    const [name, setName] = useState(taskListName);
    const [nameInputLength, setNameInputLength] = useState(100);
    const [isFocused, setIsFocused] = useState(false);


    const adjustInputWidth = (event) => {

        setName(event.target.value);

        const inputContent = event.target.value;

        setNameInputLength(inputContent.length);
    }

    useEffect(() => {
        if (taskListName !== name) setIsFocused(true);
    }, [taskListName, name]);


    return (
        <div className="flex items-center">
            {isFocused && (
                <img src="/images/icons/done.svg" alt="done" className="cursor-pointer" onClick={() => {
                    setIsFocused(false);
                    change_name(name)
                }} />
            )}
            <input placeholder="List name" onBlur={() => change_name(name)} defaultValue={name}
                   className="bg-transparent pl-2 text-sm text-white outline-0 rounded p-1"
                   onChange={adjustInputWidth} style={{ minWidth: '100%', width: `${nameInputLength}ch`}}/>
        </div>
    )
}

export default Input;