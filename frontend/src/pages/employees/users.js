import React from "react";
import DashboardWrapper from "../../components/wrappers/dashboard";
import EmployeesUsers from "../../components/employees/users";
import EmployeeNavbar from "../../components/employees/navbar";

const EmployeesUsersPage = () => {
    return (
        <DashboardWrapper>
            <EmployeeNavbar />
            <EmployeesUsers />
        </DashboardWrapper>
    )
}

export default EmployeesUsersPage;