import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/user";
import projectsReducer from "./reducers/project";
import projectReducer from "./reducers/project/project";
import taskOptionsReducer from "./reducers/project/task/options";
import colorsReducer from "./reducers/colors";
import employeesRoleReducer from "./reducers/employees/roles";
import employeeInvitesReducer from "./reducers/employees/user_invites";

const store = configureStore({
    reducer: {
        user: userReducer,
        projects: projectsReducer,
        project: projectReducer,
        taskOptions: taskOptionsReducer,
        colors: colorsReducer,
        employees_roles: employeesRoleReducer,
        employee_invites: employeeInvitesReducer
    }
});

export default store;