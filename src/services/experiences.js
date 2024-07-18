import { apiClient } from "./config"

export const apiAddExperience = async(payload) => {
    return apiClient.post("/experience", payload)
};

export const apiGetExperiences = async(payload) => {
    return apiClient.get("/experience",)
};

export const apiGetExperienceById = async (id) => {
    return apiClient.get(`/experience/${id}`,)
};

export const apiUdateExperience = async (id) => {
    return apiClient.patch("/experience",)
};

export const apiDeleteExperience = async (id) => {
    return apiClient.delete("/experience",)
};