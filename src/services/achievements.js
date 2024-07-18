import { apiClient } from "./config"

export const apiAddAchievement = async (payload) => {
    return apiClient.post("/achievement", payload)
};

export const apiGetAchievements = async (payload) => {
    return apiClient.get("/achievement", )
};

export const apiGetAchievementById = async (id) => {
    return apiClient.get(`/achievement/${id}`,)
};

export const apiUpdateAchievement = async (id) => {
    return apiClient.patch("/achievement",)
};

export const apiDeleteAchievement = async (id) => {
    return apiClient.delete("/achievement",)
};