import { FC } from "react";
import ContainerSidebar from "./Search/ContainerSidebar/ContainerSidebar";
import { Search } from "./Search/Search";
import style from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
  return (
    <div className={style.sidebar}>
      <Search />
      <ContainerSidebar />
    </div>
  );
};
