import React from "react";
import Navbar from "./components/navbar";
import TasksPage from "./pages/projects/project/tasks";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskBoardPage from "./pages/projects/project/board";
import ProjectDashboardPage from "./pages/projects/project/dashboard";
import ProjectMembersPage from "./pages/projects/project/members";
import ProjectMemberProfilePage from "./pages/projects/project/members/profile";
import MyTasksPage from "./pages/my_tasks/tasks";
import MyTasksBoardPage from "./pages/my_tasks/board";
import MyTasksDashboardPage from "./pages/my_tasks/dashboard";
import SignUpPage from "./pages/authentication/sign_up";
import SignInPage from "./pages/authentication/sign_in";
import HomePage from "./pages/home";
import EmployeesPage from "./pages/employees";
import EmployeesUsersPage from "./pages/employees/users";
import EmployeesRolesPage from "./pages/employees/roles";
import JoinDashboard from "./pages/invite/[id]";


const App = () => {
    return (
        <div className="bg-dark min-h-screen">
            <BrowserRouter>
                {/*<Navbar />*/}
                <Routes>
                    <Route element={<HomePage />} path="/" />

                    <Route element={<SignUpPage />} path="/signup" />
                    <Route element={<SignInPage />} path="/signin" />

                    <Route element={<TasksPage />} path="/project/:id" />
                    <Route element={<TaskBoardPage />} path="/project/:id/board" />
                    <Route element={<ProjectDashboardPage />} path="/project/:id/dashboard" />
                    <Route element={<ProjectMembersPage />} path="/project/:id/members" />
                    <Route element={<ProjectMemberProfilePage />} path="/project/:id/members/:user_id" />

                    <Route element={<MyTasksPage />} path="/my_tasks" />
                    <Route element={<MyTasksBoardPage />} path="/my_tasks/board" />
                    <Route element={<MyTasksDashboardPage />} path="/my_tasks/dashboard" />

                    <Route element={<EmployeesPage />} path="/employees" />
                    <Route element={<EmployeesUsersPage />} path="/employees/users" />
                    <Route element={<EmployeesRolesPage />} path="/employees/roles" />
                    <Route element={<JoinDashboard />} path="/invite/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;