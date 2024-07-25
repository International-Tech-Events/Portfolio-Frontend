import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = import.meta.env.VITE_BASE_URL;

// export const apiClient = axios.create({baseURL: import.meta.env.VITE_BASE_URL});
export const apiClient = axios.create({baseURL: baseURL});

// const token = localStorage.getItem("accessToken");

export const getToken = () => localStorage.getItem("accessToken");
export const clearToken  = () => localStorage.removeItem("accessToken");

apiClient.interceptors.request.use(
    (config) => {
      
      const token = getToken();
      if (token) {
        
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {

      return Promise.reject(error);
    }
  );
  
  
apiClient.interceptors.response.use(
    (response) => {
     
      return response;
    },
    (error) => {
      
      if (error.response.status === 401) {
       
        clearToken();
        
        window.location.replace("/signin");
      }
      if (error.response.status === 404) {
        toast.error("Not found");
      }
    
      return Promise.reject(error);
    }
  );

// if (token) {
//     apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }