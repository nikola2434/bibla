import { IUser } from "../../../UI/types";

export interface IIntelligenceProps {
  user: IUser | null;
  characteristics?: string[];
}

export interface IChangePassword {
  login: string;
}
