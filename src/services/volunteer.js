import { apiClient } from "./config"

export const apiAddVolunteering = async(payload) => {
    return apiClient.post("/volunteering",payload)
};

export const apiGetVolunteering = async (payload) => {
    return apiClient.get("/volunteering")
};

export const apiVolunteeringById = async (id) => {
    return apiClient.get(`/volunteering/${id}`,)
};

export const apiUpdateVolunteering = async (id) => {
    return apiClient.patch("/volunteering",)
};

export const apiDeleteVolunteering = async (id) => {
    return apiClient.delete("/volunteering",)
};