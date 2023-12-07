import React, {useEffect, useState} from "react";

const TextColumn = ({value, onChange, onBlur, complete_task}) => {
    const [nameInputLength, setNameInputLength] = useState(100);
    const [val, setVal] = useState(value);

    const adjustInputWidth = (event) => {

        setVal(event.target.value);

        const inputContent = event.target.value;

        setNameInputLength(inputContent.length * 10);

        if (onChange) onChange(event);
    };

    useEffect(() => {
        if (val) setNameInputLength(val?.length * 8);
    }, [val]);


    return (
        <div className="value name">
            <img src="/images/icons/my_tasks.svg" alt="task" onClick={complete_task} />
            <input
                style={{width: nameInputLength}}
                onChange={adjustInputWidth}
                placeholder="task 01"
                defaultValue={val}
                onBlur={onBlur}
                className="w-fit bg-transparent ml-2 text-gray text-xs outline-0 border rounded border-transparent focus:border-gray p-1"
            />
        </div>
    )
}

export default TextColumn;