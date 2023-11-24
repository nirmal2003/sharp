import axios from "axios";

const axios_config = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
});

export default axios_config;