import React, {useEffect, useRef, useState} from "react";
import EditeOptionsPopUp from "./PopUp";
import {useDispatch, useSelector} from "react-redux";
import axios_config from "../../../../../../utils/axios_config";
import {setOptions} from "../../../../../../store/reducers/project/task/options";

const Options = ({value, id}) => {

    const [openOptions, setOpenOptions] = useState(false);
    const optionsRef = useRef(null);
    const [openEditeOptions, setOpenEditeOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    const dispatch = useDispatch();

    const options = useSelector(state => state.taskOptions);
    const project = useSelector(state => state.project);


    const change_value = async (optionId) => {
        try {
            const response = await axios_config.put(`/project/tasks/value/option/${id}/${optionId}`);
            setSelectedOption(response.data);
            setOpenOptions(false);
        } catch (error) {
            console.log(error);
        }
    }

    const get_options = async () => {
        try {
            const response = await axios_config.get(`/project/values/options/project/${project.id}`);
            dispatch(setOptions(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) setOpenOptions(false);
    }

    useEffect(() => {

        get_options();

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="value status relative cursor-pointer" ref={optionsRef}>
            {openEditeOptions && (
                <EditeOptionsPopUp onClose={() => setOpenEditeOptions(false)} />
            )}
            {selectedOption ? (
                <section onClick={() => setOpenOptions(!openOptions)} style={{ backgroundColor: selectedOption.color }}>
                    {selectedOption.name}
                </section>
            ) : (
                <section onClick={() => setOpenOptions(!openOptions)}>
                    Not set
                </section>
            )}
            {openOptions && (
                <div className="absolute w-52 top-10 flex justify-center bg-dark p-1 shadow-lg rounded border border-border-color z-10">
                    <ul className="w-full flex flex-col items-center">
                        {options?.map(option => (
                            <li key={option.id} onClick={() => change_value(option.id)} className="w-full px-1 py-2 mt-1 hover:bg-light-transparent flex justify-center cursor-pointer border-bottom-not-first-child">
                                <section className="w-fit" style={{ backgroundColor: option.color }}>{option.name}</section>
                            </li>
                        ))}
                        <li className="w-full px-1 py-2 mt-1 hover:bg-light-transparent flex justify-center cursor-pointer border-bottom-not-first-child" onClick={() => setOpenEditeOptions(true)}>
                            <section className="flex" style={{ background: "transparent" }}>
                                <img src="/images/icons/pencil.svg" alt="pencil" className="w-5  mr-2" />
                                Add new options
                            </section>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Options;