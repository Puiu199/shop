import axios from "axios";
import { refresh } from "./requests";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        const token = localStorage.getItem("refreshToken");
        if (token) {
          refresh()
            .then((response) => {
              localStorage.setItem("accessToken", response.data.accessToken);
              localStorage.setItem("refreshToken", response.data.refreshToken);
            })
            .catch((error) => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              window.location.pathname = "/logIn";
              return Promise.reject(error);
            });
        } else {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.pathname = "/logIn";
        }
      }
      if (error.response.status === 500) {
        console.log("server error");
      }
    }
    return Promise.reject(error);
  },
);

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosClient;
