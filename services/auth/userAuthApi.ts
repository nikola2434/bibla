import { IAuthResponse } from "./../../store/user/userInterface";
import { classicAxios, getContentType } from "../axios/axios";
import { saveLocalStage } from "./authHelper";
import { removeToken } from "./authHelper";
import Cookies from "js-cookie";

export const userApi = {
  async login(email: string, password: string) {
    const response = await classicAxios.post<IAuthResponse>(`/auth/login`, {
      email,
      password,
    });
    if (response.data.assetToken) {
      saveLocalStage(response.data);
    }
    return response.data;
  },

  async register(email: string, password: string) {
    const response = await classicAxios.post<IAuthResponse>("auth/register", {
      email,
      password,
    });
    if (response.data.assetToken) {
      saveLocalStage(response.data);
    }

    return response.data;
  },

  logout() {
    removeToken();
    localStorage.removeItem("user");
  },

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const response = await classicAxios.post<IAuthResponse>(
      "/auth/access-token",
      {
        refreshToken: refreshToken,
      }
    );
    if (response.data.assetToken) {
      saveLocalStage(response.data);
    }
    return response.data;
  },
};
