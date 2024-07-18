import { apiClient } from "./config"

export const apiAddProject = async (payload) => {
    return apiClient.post("/projects",payload)
};

export const apiGetProjects = async (payload) => {
    return apiClient.get("/projects")
};

export const apiGetProjectById = async (id) => {
    return apiClient.get(`/projects/${id}`,)
};

export const apiUdateProject = async (id) => {
    return apiClient.patch("/projects",)
};

export const apiDeleteProject = async (id) => {
    return apiClient.delete("/projects",)
};