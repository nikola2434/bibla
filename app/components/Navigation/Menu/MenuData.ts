import { link } from "fs";
import { IMenu } from "./MenuInterface";
export const MenuData: IMenu = {
  title: "Menu",
  items: [
    { title: "Home", link: "/", icons: "MdHome" },
    {
      title: "My books",
      link: "/MyBooks",
      icons: "MdBook",
    },
    {
      title: "Trending now",
      link: "/trending",
      icons: "MdLocalFireDepartment",
    },
  ],
};

export const BookGenres: IMenu = {
  title: "Book genres",
  items: [
    { title: "Detective", link: "/detective", icons: "MdSearch" },
    { title: "Novel", link: "/novel", icons: "MdVolunteerActivism" },
    { title: "Adventure", link: "/adventure", icons: "MdOutlineHiking" },
    { title: "Thriller", link: "thriller", icons: "MdOutlineMoodBad" },
    { title: "Fantasy", link: "/fantasy", icons: "MdOutlineAutoFixHigh" },
  ],
};


