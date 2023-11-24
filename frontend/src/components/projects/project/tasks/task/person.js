import React, {useEffect, useRef, useState} from "react";
import SelectPerson from "./select_person";
import axios_config from "../../../../../utils/axios_config";
const PersonColumn = ({ value, id }) => {
    const [openPersonSelectList, setOpenPersonSelectList] = useState(false);
    const openPersonSelectListRef = useRef(null);
    const [selectedPerson, setSelectedPerson] = useState(value);


    const change_selected_person = async (personId) => {
        try {
            const response = await axios_config.put(`/project/tasks/value/assignee/${id}/${personId}`);
            setOpenPersonSelectList(false);
            setSelectedPerson(response.data);
        } catch (error) {
            setOpenPersonSelectList(false);
            console.log(error);
        }
    }

    const handleClickOutside = (event) => {
        if (openPersonSelectListRef.current && !openPersonSelectListRef.current.contains(event.target)) setOpenPersonSelectList(false);
    }

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div ref={openPersonSelectListRef}>
            <div className="value assignee" onClick={() => setOpenPersonSelectList(true)}>
                {selectedPerson ? (
                    <>
                        <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center bg-center bg-cover z-0" style={{ backgroundImage: `url("${selectedPerson.image}")` }}>
                            {!selectedPerson.image && (
                                <p className="text-lg text-light-gray">{selectedPerson.name.substr(0, 1)}</p>
                            )}
                        </div>
                        <h4>{selectedPerson.name}</h4>
                    </>
                ) : (
                    <p className="text-sm text-gray">Not set</p>
                )}
            </div>
            {openPersonSelectList && <SelectPerson selectAssignee={change_selected_person} />}
        </div>
    )
}

export default PersonColumn;