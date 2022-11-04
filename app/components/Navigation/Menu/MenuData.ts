import { link } from "fs";
import { IMenu } from "./MenuInterface";
export const MenuData: IMenu = {
  title: "Menu",
  items: [
    { title: "Home", link: "/", icons: "MdHome", _id: "" },
    {
      title: "My books",
      link: "/MyBooks",
      icons: "MdBook",
      _id: "",
    },
    {
      title: "Trending now",
      link: "/trending",
      icons: "MdLocalFireDepartment",
      _id: "",
    },
  ],
};
