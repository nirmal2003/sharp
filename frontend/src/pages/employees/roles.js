import React from "react";
import DashboardWrapper from "../../components/wrappers/dashboard";
import EmployeeNavbar from "../../components/employees/navbar";
import EmployeesRoles from "../../components/employees/roles";

const EmployeesRolesPage = () => {
    return (
        <DashboardWrapper>
            <EmployeeNavbar />
            <EmployeesRoles />
        </DashboardWrapper>
    )
}

export default EmployeesRolesPage;