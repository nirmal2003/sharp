import React, {useEffect, useState} from "react";
import Popup from "../../../modules/popup";
import SelectTag from "../../../elements/input/SelectTag";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../elements/button";
import EmployeesUserRequestList from "./request/list";
import axios_config from "../../../utils/axios_config";
import {setEmployeesInvites} from "../../../store/reducers/employees/user_invites";


const NewUsersPopup = ({onClose}) => {
    const [role, setRole] = useState(null);

    const dispatch = useDispatch();

    const employee_roles = useSelector(state => state.employees_roles);
    const employee_invites = useSelector(state => state.employee_invites);


    const get_invites = async () => {
        try {
            const response = await axios_config.get('/employees/invites');
            dispatch(setEmployeesInvites(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const create_invite = async () => {
        try {
            const response = await axios_config.post(`/employees/invites/${role}`);
            dispatch(setEmployeesInvites([response.data, ...employee_invites]));
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        get_invites();
    }, []);


    return (
        <Popup title="Add users" onClose={onClose}>
            <div className="p-4">
                <SelectTag data={employee_roles} defaultName="Select role" _setRole={setRole} />
                <Button onClick={() => role && create_invite()} text="create request" />
                <EmployeesUserRequestList list={employee_invites} />
            </div>
        </Popup>
    )
}

export default NewUsersPopup;