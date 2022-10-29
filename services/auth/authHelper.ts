import { IAuthResponse } from "./../../store/user/userInterface";
import Cookies from "js-cookie";

export const saveToken = (data: IAuthResponse) => {
  Cookies.set("assetToken", data.assetToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const removeToken = () => {
  Cookies.remove("assetToken");
  Cookies.remove("refreshToken");
};

export const saveLocalStage = (data: IAuthResponse) => {
  saveToken(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};
