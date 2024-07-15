import { apiClient } from "./config"


export const apiSignUp = async(payload) => {
    return apiClient.post("/auth/signup", payload);
}


export const apiSignIn = async(payload) => {
    return apiClient.post("/auth/login", payload);
}


export const apiCheckUserName = async(userName) => {
    return apiClient.get(`/auth/${userName}`);
}