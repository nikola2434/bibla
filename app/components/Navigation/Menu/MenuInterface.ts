import { TypeMaterialIcons } from "./../../../../shared/types/icons";
export interface IMenu {
  title: string;
  items?: IMenuItems[];
}

export interface IMenuItems {
  link: string;
  title: string;
  icons: TypeMaterialIcons;
  id?: string;
  books?: string[];
  description?: string;
}
