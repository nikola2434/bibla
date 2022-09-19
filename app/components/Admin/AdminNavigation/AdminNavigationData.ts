import { getAdminUrl } from "./../../../../config/url.config";
import { IAdminNavigationItem } from "./AdminNavigationInterface";
export const AdminNavigationData: IAdminNavigationItem[] = [
  {
    title: "Statistics",
    link: getAdminUrl("statistics"),
  },
  {
    title: "Users",
    link: getAdminUrl("users"),
  },
  {
    title: "Books",
    link: getAdminUrl("books"),
  },
  {
    title: "Authors",
    link: getAdminUrl("authors"),
  },
  {
    title: "Genres",
    link: getAdminUrl("genres"),
  },
];
