import { FC, ReactNode } from "react";
import { IAdminNavigationItem } from "./AdminNavigationInterface";
import style from "./AdminNavigation.module.scss";
import { ItemAdminNav } from "./ItemAdminNav";
import { AdminNavigationData } from "./AdminNavigationData";

export const AdminNavigation: FC = () => {
  return (
    <>
      <nav className={style.navigation}>
        {AdminNavigationData.map((item) => (
          <ItemAdminNav item={item} key={item.title} />
        ))}
      </nav>
    </>
  );
};
