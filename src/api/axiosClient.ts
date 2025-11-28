import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    let bearerToken = storedToken;
    try {
      const parsed = JSON.parse(storedToken);
      bearerToken =
        parsed?.token ||
        parsed?.accessToken ||
        parsed?.data?.token ||
        parsed?.data?.accessToken ||
        storedToken;
    } catch {
      bearerToken = storedToken;
    }

    if (bearerToken) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error", error.response.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
