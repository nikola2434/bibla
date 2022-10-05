import { FC, ReactNode } from "react";
import style from "./layout.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      <div className={style.center}>{children}</div>
      <Sidebar />
    </div>
  );
};
