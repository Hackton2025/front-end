const url = import.meta.env.VITE_URL_BACKEND;
import axios from "axios";
import router from "@/router";

const api = axios.create({
  baseURL: url,
});


api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("token");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.code === "token_not_valid" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      if (refresh) {
        try {
          const tokenResponse = await axios.post(`${url}/token/refresh/`, {
            refresh: refresh,
          });

          const newAccess = tokenResponse.data.access;
          localStorage.setItem("token", newAccess);

          originalRequest.headers.Authorization = `Bearer ${newAccess}`;

          return api(originalRequest); 
        } catch (refreshError) {
          console.error("Erro ao renovar token:", refreshError);
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          router.push('/')
        }
      } else {
        router.push('/');
      }
    }

    return Promise.reject(error);
  }
);

console.log("Axios instance created with base URL:", url);

export default api;
