import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.token = `${token}`;
    }
    return config;
});

export default apiClient;
