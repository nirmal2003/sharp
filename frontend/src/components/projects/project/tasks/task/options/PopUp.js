import React, {useEffect, useState} from "react";
import Popup from "../../../../../../modules/popup";
import {task_select_option_colors} from "../../../../../../data/project/task_select_option_colors";
import axios_config from "../../../../../../utils/axios_config";
import {useDispatch, useSelector} from "react-redux";
import {setOptions} from "../../../../../../store/reducers/project/task/options";

const EditeOptionsPopUp = ({ onClose }) => {
    const [isNew, setIsNew] = useState(true);
    const [name, setName] = useState("");
    const [selectedColor, setSelectedColor] = useState(1);
    const [isGlobal, setIsGlobal] = useState(true);

    const dispatch = useDispatch();

    const project = useSelector(state => state.project);
    const options = useSelector(state => state.taskOptions);
    const colors = useSelector(state => state.colors);

    const create_new_option = async () => {
        try {
            const response = await axios_config.post(`/project/values/options/${project.id}?global=${isGlobal}`, { name, colorId: selectedColor });
            dispatch(setOptions([...options, response.data]));
            onClose();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Popup onClose={onClose} title="Edite options">
            <div className="flex items-center mt-5 border-b border-b-popup-border-color">
                <p
                    style={{fontSize: '0.75rem'}}
                    className={isNew ? "text-light-gray ml-5 p-2 pb-1 bg-light-transparent cursor-pointer" : "text-light-gray ml-5 p-2 pb-1 hover:bg-light-transparent cursor-pointer"}
                    onClick={() => setIsNew(true)}
                >Add new</p>
                <p
                    style={{fontSize: '0.75rem'}}
                    className={!isNew ? "text-light-gray ml-5 p-2 pb-1 bg-light-transparent cursor-pointer" : "text-light-gray ml-5 p-2 pb-1 hover:bg-light-transparent cursor-pointer"}
                    onClick={() => setIsNew(false)}
                >Choose</p>
            </div>
            {isNew ? (
                <div className="flex p-3 flex-col mt-8">
                    <input
                        type="text"
                        placeholder="Option name"
                        className="w-full rounded text-very-sm font-light tracking-wider text-light-gray py-3 px-5 bg-popup-border-color"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                    <div className="flex flex-wrap mt-5">
                        {colors?.map(color => (
                            <div key={color.id} onClick={() => setSelectedColor(color.id)} className="w-7 h-7 m-1 rounded cursor-pointer" style={{ backgroundColor: color.color, border: '2px solid', borderColor: selectedColor === color.id ? "#ffffff" : "transparent" }}></div>
                        ))}
                    </div>
                    <label htmlFor="select_global" className="flex item-center mt-5 ml-1 text-very-sm text-light-gray">
                        <input onChange={(event) => setIsGlobal(event.target.checked)} defaultChecked={isGlobal} type="checkbox" className="mr-3" id="select_global"/>
                        save to dashboard
                    </label>
                    <button
                        className="w-full rounded text-very-sm font-light tracking-wider text-light-gray py-3 px-5 bg-popup-border-color mt-5 hover:bg-white hover:text-dark hover:font-semibold duration-300"
                        onClick={create_new_option}
                    >create
                    </button>
                </div>
            ) : (
                <div className="w-full flex p-3 mt-3 flex-wrap">
                    {[1,2,3,4,5,6,7,8,9,10,11].map(_ => (
                        <p className="m-2 text-sm py-1 px-3 bg-light-gray rounded-full cursor-pointer hover:brightness-75">Completed</p>
                    ))}
                </div>
            )}
        </Popup>
    )
}

export default EditeOptionsPopUp;