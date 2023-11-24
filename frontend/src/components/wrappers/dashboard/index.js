import React, {useEffect} from "react";
import Sidebar from "./sidebar";
import {useDispatch, useSelector} from "react-redux";
import axios_config from "../../../utils/axios_config";
import {setUser} from "../../../store/reducers/user";
import {useNavigate} from "react-router-dom";
import {setProjects} from "../../../store/reducers/project";
import {setColors} from "../../../store/reducers/colors";

const DashboardWrapper = ({ children }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(state => state.user);

    const get_projects = async () => {
        try {
            const response = await axios_config.get("/project");
            dispatch(setProjects(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const get_user = async () => {
        try {
            const response = await axios_config.get('/user');
            get_projects();
            dispatch(setUser(response.data));
        } catch (error) {
            navigate('/signin');
        }
    }

    const get_colors = async () => {
        try {
            const response = await axios_config.get("/colors");
            dispatch(setColors(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_user();
        get_colors();
    }, []);

    useEffect(() => {
        console.log(user)
    }, [user])


    return (
        <div className="dashboard_wrapper">
            <Sidebar />
            <div className="dashboard_body" style={{ width: 'calc(100% - 80px)', marginLeft: '80px' }}>
                {children}
            </div>
        </div>
    )
}

export default DashboardWrapper;