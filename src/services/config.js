import axios from 'axios';


export const apiClient = axios.create({baseURL: import.meta.env.VITE_BASE_URL});

const token = localStorage.getItem("accessToken");

if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}