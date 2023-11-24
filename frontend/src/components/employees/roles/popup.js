import React, {useState} from "react";
import Popup from "../../../modules/popup";
import {useDispatch, useSelector} from "react-redux";
import axios_config from "../../../utils/axios_config";
import {setEmployeesRole} from "../../../store/reducers/employees/roles";
import TextInput from "../../../elements/input/TextInput";
import Button from "../../../elements/button";

const NewEmployeesRolePopup = ({ onClose }) => {
    const [name, setName] = useState("");
    const [selectedColor, setSelectedColor] = useState(1);

    const dispatch = useDispatch();

    const colors = useSelector(state => state.colors);
    const employees_roles = useSelector(state => state.employees_roles);

    const create_role = async () => {
        try {
            const response = await axios_config.post('/employees/roles', { name, color: selectedColor });
            dispatch(setEmployeesRole([response.data, ...employees_roles]));
            onClose();
        } catch (error) {
            console.log(error);
            onClose();
        }
    }

    return (
        <Popup title="Create roles" onClose={onClose}>
            <div className="p-4">
                <TextInput _setValue={setName} placeHolder="Role name" />
                <div className="flex flex-wrap mt-5">
                    {colors?.map(color => (
                        <div key={color.id} onClick={() => setSelectedColor(color.id)} className="w-7 h-7 m-1 rounded cursor-pointer" style={{ backgroundColor: color.color, border: '2px solid', borderColor: selectedColor === color.id ? "#ffffff" : "transparent" }}></div>
                    ))}
                </div>
                <Button
                    onClick={() => name.length > 2 && create_role()}
                    text={"create"}
                />
            </div>
        </Popup>
    )
}

export default NewEmployeesRolePopup;