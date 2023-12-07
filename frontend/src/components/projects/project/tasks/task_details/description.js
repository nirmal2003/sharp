import React, {useState} from "react";
import Textarea from 'react-textarea-autosize';



const TaskDescription = () => {
    const [value, setValue] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries");

    return (
        <div className="w-full px-8">
            <Textarea
                value={value} onChange={(e) => setValue(e.target.value)}
                className="w-full mt-8 p-3 text-xs text-white bg-dark focus:bg-light-board-transparent outline-0 resize-none rounded-xl border-2 border-dark focus:border-border-color scrollbar_hide leading-5"
                placeholder="Task description"
            />
        </div>
    )
}

export default TaskDescription;