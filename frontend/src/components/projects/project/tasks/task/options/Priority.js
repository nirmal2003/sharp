import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import axios_config from "../../../../../../utils/axios_config";


const PriorityOptions = ({value, taskId}) => {

    const [openOptions, setOpenOptions] = useState(false);
    const optionsRef = useRef(null);
    const [currentOption, setCurrentOption] = useState(value);

    const project = useSelector(state => state.project);


    const change_priority = async (selectedOption) => {
        try {
            const response = await axios_config.put(`/project/tasks/${taskId}/priority?priority=${selectedOption}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) setOpenOptions(false);
    }

    useEffect(() => {

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="value status relative cursor-pointer" ref={optionsRef}>
            <section onClick={() => setOpenOptions(!openOptions)}>
                {currentOption?.name}
            </section>
            {openOptions && (
                <div
                    className="absolute w-52 top-10 flex justify-center bg-dark p-1 shadow-lg rounded border border-border-color z-10">
                    <ul className="w-full flex flex-col items-center">
                        {[
                            {name: 'High', number: 1},
                            {name: 'Medium', number: 2},
                            {name: 'Low', number: 3}
                        ].map(option => (
                            <li key={option.number} onClick={() => {
                                setOpenOptions(false);
                                setCurrentOption(option);
                                change_priority(option.number);
                            }}
                                className="w-full px-1 py-2 mt-1 hover:bg-light-transparent flex justify-center cursor-pointer border-bottom-not-first-child">
                                <section className="w-fit" style={{backgroundColor: "#000"}}>{option.name}</section>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default PriorityOptions;