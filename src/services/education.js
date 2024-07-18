import { apiClient } from "./config"

export const apiAddEducation = async () => {
    return apiClient.post("/education",)
};

export const apiGetEducation = async (payload) => {
    return apiClient.get("/education",)
};

export const apiGetEducationById = async (id) => {
    return apiClient.get(`/education/${id}`,)
};

export const apiUdateEducation = async (id) => {
    return apiClient.patch("/education",)
};

export const apiDeleteEducation = async (id) => {
    return apiClient.delete("/education",)
};