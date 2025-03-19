import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://c70a-178-168-69-101.ngrok-free.app/",
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
        console.log("nu sunteti logat");
      }if(error.response.status === 500){
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
