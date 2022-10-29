import { IBook } from "./../../../UI/types";
import { TypeMaterialIcons } from "./../../../../shared/types/icons";
export interface IMenu {
  title: string;
  items?: IMenuItems[];
}

export interface IMenuItems {
  link: string;
  title: string;
  icons: TypeMaterialIcons;
  _id: string;
  books?: IBook[];
  description?: string;
}
