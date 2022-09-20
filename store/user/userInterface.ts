import { IUser } from "./../../app/UI/types";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  id: string;
}

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  login: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
