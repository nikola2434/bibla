import { IAuthResponse } from "./../../store/user/userInterface";
import { classicAxios, getContentType } from "./../axios";
import { getNewUser, saveLocalStage } from "./authHelper";
import { removeToken } from "./authHelper";
import Cookies from "js-cookie";

export const userApi = {
  async login(email: string, password?: string) {
    const response = await classicAxios.get<IAuthResponse[]>(
      `users?q=${email}`
    );
    if (response.data.length === 0) {
      return new Error("Login or password is not correct!");
    } else if (response.data.length !== 0) {
      saveLocalStage(response.data[0]);
    }
    return response.data[0];
  },

  async register(email: string, password: string) {
    const newUser = getNewUser(email, password);
    const response = await classicAxios.post<IAuthResponse>("users", newUser, {
      headers: getContentType(),
    });

    if (response.data.accessToken) saveLocalStage(response.data);

    return response.data;
  },

  logout() {
    removeToken();
    localStorage.removeItem("user");
  },

  async getNewTokens(id: string) {
    const refreshToken = Cookies.get("refreshToken");
    const user = await classicAxios.get<IAuthResponse>(`users/${id}`);
    const response = await classicAxios.put<IAuthResponse>(
      `users/${id}`,
      {
        ...user,
        refreshToken,
      },
      { headers: getContentType() }
    );

    return response.data;
  },

  async updateUser(id: string) {
    const user = await classicAxios.get<IAuthResponse>(`users/${id}`);
    if (user.data.accessToken) {
      saveLocalStage(user.data);
    }
    return user.data;
  },
};
