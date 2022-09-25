import { getCookies } from "./../../config/getCookies";
import { getRandomID } from "./../../config/getId";
import { IAuthResponse } from "./../../store/user/userInterface";
import Cookies from "js-cookie";

export const saveToken = (data: IAuthResponse) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const removeToken = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export const saveLocalStage = (data: IAuthResponse) => {
  saveToken(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const getNewUser = (email: string, password: string): IAuthResponse => {
  return {
    user: {
      _id: getRandomID(),
      login: email,
      password: password,
      isAdmin: false,
      favoriteBooks: [],
    },
    id: getRandomID(),
    accessToken: getCookies(),
    refreshToken: getCookies(),
  };
};
