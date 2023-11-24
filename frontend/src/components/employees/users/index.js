import React, {useState} from "react";
import EmployeesUserList from "./user_list";
import ActionBar from "../../projects/project/navbar/action_bar";
import NewUsersPopup from "./popup";

const EmployeesUsers = () => {
    const [openNewUsers, setOpenNewUsers] = useState(false);


    return (
        <div>
            {openNewUsers && <NewUsersPopup onClose={() => setOpenNewUsers(false)} />}
            <ActionBar newItem={true} onClick={() => setOpenNewUsers(true)} />
            <EmployeesUserList />
        </div>
    )
}

export default EmployeesUsers;