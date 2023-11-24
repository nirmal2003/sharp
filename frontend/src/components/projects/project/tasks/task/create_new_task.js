import React, {useState} from "react";
import axios_config from "../../../../../utils/axios_config";

const CreateNewTask = ({tableId, add_new_task_to_list}) => {
    const [nameInputLength, setNameInputLength] = useState();
    const [val, setVal] = useState("");

    const adjustInputWidth = (event) => {

        setVal(event.target.value);

        const inputContent = event.target.value;

        setNameInputLength(inputContent.length * 15);

        setVal(event.target.value);
    };

    const create_new_task = async () => {
        if (val.length > 0) {
            try {
                const response = await axios_config.post(`/project/tasks/${tableId}`, { name: val });
                add_new_task_to_list(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div className="w-full h-14 border-b border-b-border-color flex items-center">
            <input
                style={{width: nameInputLength, fontSize: '0.8rem'}}
                onChange={adjustInputWidth}
                placeholder="name"
                defaultValue={val}
                autoFocus={true}
                className="w-fit bg-transparent ml-2 text-gray outline-0 border rounded border-transparent focus:border-light-border-color px-2 py-1"
            />
            <img onClick={create_new_task} src="/images/icons/plus.svg" alt="plus" className="w-4 ml-3 cursor-pointer hover:brightness-125" />
        </div>
    )
}

export default CreateNewTask;