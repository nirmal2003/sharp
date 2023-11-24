import React, {useEffect} from "react";
import axios_config from "../../utils/axios_config";
import {setUser} from "../../store/reducers/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const AuthenticationWrapper = ({ children }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const get_user = async () => {
        try {
            const response = await axios_config.get('/user');
            dispatch(setUser(response.data));
            navigate("/")
        } catch (error) {
        }
    }

    useEffect(() => {
        get_user();
    }, []);

    return (
        <>{children}</>
    )
}

export default AuthenticationWrapper;