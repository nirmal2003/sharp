import React, {useEffect, useState} from "react";
import EmployeesUserList from "./user_list";
import ActionBar from "../../projects/project/navbar/action_bar";
import NewUsersPopup from "./popup";
import axios_config from "../../../utils/axios_config";
import {useDispatch, useSelector} from "react-redux";
import {setEmployeeUsers} from "../../../store/reducers/employees/users";

const EmployeesUsers = () => {
    const [openNewUsers, setOpenNewUsers] = useState(false);


    const dispatch = useDispatch();

    const employees = useSelector(state => state.employee_users);


    const get_employees = async () => {
        try {
            const response  = await axios_config.get('/employees');
            dispatch(setEmployeeUsers(response.data));
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        get_employees();
    }, []);


    return (
        <div>
            {openNewUsers && <NewUsersPopup onClose={() => setOpenNewUsers(false)} />}
            <ActionBar newItem={true} onClick={() => setOpenNewUsers(true)} />
            <EmployeesUserList />
        </div>
    )
}

export default EmployeesUsers;