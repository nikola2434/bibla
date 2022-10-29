import { removeToken } from "./../auth/authHelper";
import { userApi } from "./../auth/userAuthApi";
import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "./axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token && config.headers) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && err.config && !err.config._retry) {
      originalRequest._retry = true;
      try {
        await userApi.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        removeToken();
      }
    }
    throw err;
  }
);
