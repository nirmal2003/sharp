import React, {useState} from "react";
import TextArea from "react-textarea-autosize";


const AddTaskComments = () => {
    const [comment, setComment] = useState("");


    return (
        <div className="w-full p-3 bg-light-board-transparent rounded flex items-start">
            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <p className="font-semibold">N</p>
            </div>
            <div className="w-full flex flex-col items-end ml-3">
                <TextArea
                    className="w-full ml-3 bg-light-board-transparent resize-none rounded p-2 text-xs outline-0 border border-light-board-transparent focus:border-border-color text-white"
                    placeholder="comment"
                    onChange={(event) => setComment(event.target.value)}
                />
                {comment.length > 0 && (
                    <button className="outline-0 text-xs p-2 bg-purple text-white rounded mt-4 cursor-pointer">comment</button>
                )}
            </div>
        </div>
    )
}

export default AddTaskComments;