import React, {useState} from "react";

const NewTaskBoardList = ({ canAdd }) => {
    const [nameInputLength, setNameInputLength] = useState(100)

    const adjustInputWidth = (event) => {
        const inputContent = event.target.value;

        setNameInputLength(inputContent.length * 10);
    };

    return (
        <div className="w-72 flex flex-col items-center mr-20">
            <div className="w-72 flex justify-between items-center">
                <input style={{ width: nameInputLength }} onChange={adjustInputWidth} placeholder="task 01" defaultValue="Task List" className="w-fit bg-transparent ml-2 text-gray text-sm outline-0 border rounded border-transparent focus:border-gray p-1" />
                {/*<h3 className="text-white">Tasks List</h3>*/}
                <div className="flex items-center">
                    {canAdd && (
                        <img src="/images/icons/plus.svg" alt="plus" className="w-6 p-1 hover:bg-light-transparent cursor-pointer rounded" />
                    )}
                    {!canAdd && (
                        <img src="/images/icons/delete.svg" alt="plus" className="w-7 ml-4 p-1 hover:bg-light-transparent cursor-pointer rounded" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewTaskBoardList;