import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/user";
import projectsReducer from "./reducers/project";
import projectReducer from "./reducers/project/project";
import taskOptionsReducer from "./reducers/project/task/options";
import colorsReducer from "./reducers/colors";
import employeesRoleReducer from "./reducers/employees/roles";
import employeeInvitesReducer from "./reducers/employees/user_invites";
import employeeUsersReducer from "./reducers/employees/users";
import taskDetailsReducer from "./reducers/project/task/details";

const store = configureStore({
    reducer: {
        user: userReducer,
        projects: projectsReducer,
        project: projectReducer,
        taskOptions: taskOptionsReducer,
        colors: colorsReducer,
        employees_roles: employeesRoleReducer,
        employee_invites: employeeInvitesReducer,
        employee_users: employeeUsersReducer,
        task_details: taskDetailsReducer
    }
});

export default store;