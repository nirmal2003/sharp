import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import DashboardWrapper from "../../components/wrappers/dashboard";
import axios_config from "../../utils/axios_config";

const JoinDashboard = () => {

    const { id } = useParams();

    const join_to_dashboard = async () => {
        try {
            const response = await axios_config.post(`/employees/${id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        join_to_dashboard();
    }, []);

    return (
        <DashboardWrapper></DashboardWrapper>
    )
}

export default JoinDashboard;