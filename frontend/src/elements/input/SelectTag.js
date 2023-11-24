import React, {useEffect, useRef, useState} from "react";

const SelectTag = ({ data, defaultName, _setRole }) => {
    const [openOptions, setOpenOptions] = useState(false);
    const [value, setValue] = useState(null);
    const [valueIndex, setValueIndex] = useState(null);
    const optionsPopUpRef = useRef(null);


    const handle_role_change = (val, index) => {
        setValue(val);
        _setRole(val);
        setValueIndex(index);
    }

    useEffect(() => {

        const handle_click_outside = (event) => {
            if (optionsPopUpRef.current && !optionsPopUpRef.current.contains(event.target)) setOpenOptions(false);
        }

        document.addEventListener("click", handle_click_outside);

        return () => document.removeEventListener("click", handle_click_outside);

    }, []);


    return (
        <div ref={optionsPopUpRef} className="relative z-20">
            <div onClick={() => setOpenOptions(!openOptions)} className="w-full py-1 px-4 border border-border-color rounded-lg flex items-center justify-between max-w-sm cursor-pointer hover:bg-light-hover-transparent">
                <h3 className="text-gray text-xs">
                    {valueIndex !== null ? data[valueIndex].name : defaultName}
                </h3>
                <img src="/images/icons/expand.svg" alt="expand" />
            </div>
            {openOptions && (
                <div className="border border-border-color rounded-lg mt-2 max-w-sm absolute bg-popup-background-color shadow-lg">
                    <ul className="flex flex-col overflow-y-auto max-h-64 scrollbar_hide">
                        {data?.map((item, index) => (
                            <li key={index} onClick={() => {
                                handle_role_change(item.id, index);
                                setOpenOptions(false);
                            }} className="flex items-center p-2 hover:bg-light-transparent border-b border-b-border-color cursor-pointer" style={{ minWidth: '350px' }}>
                                {item.color && (
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center" style={{ backgroundColor: item.color }}>
                                        <h3>{item.name.substr(0, 1)}</h3>
                                    </div>
                                )}
                                <h3 className="ml-4 text-white text-xs">{item.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    )
}

export default SelectTag;