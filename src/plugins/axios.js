import axios from "axios";

const baseURL = "https://dummyjson.com";

const axiosInstance = createInstance();

function createInstance() {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
