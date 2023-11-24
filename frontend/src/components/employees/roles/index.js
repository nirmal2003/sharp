import React, {useEffect, useState} from "react";
import EmployeesRoleList from "./role_list";
import ActionBar from "../../projects/project/navbar/action_bar";
import NewEmployeesRolePopup from "./popup";
import axios_config from "../../../utils/axios_config";
import {setEmployeesRole} from "../../../store/reducers/employees/roles";
import {useDispatch} from "react-redux";

const EmployeesRoles = () => {
    const [openCreateRole, setOpenCreateRole] = useState(false);

    const dispatch = useDispatch();

    const get_roles = async () => {
        try {
            const response = await axios_config.get("/employees/roles");
            dispatch(setEmployeesRole(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_roles();
    }, []);


    return (
        <div>
            {openCreateRole && <NewEmployeesRolePopup onClose={() => setOpenCreateRole(false)} /> }
            <ActionBar newItem={true} onClick={() => setOpenCreateRole(true)} />
            <EmployeesRoleList />
        </div>
    )
}

export default EmployeesRoles;