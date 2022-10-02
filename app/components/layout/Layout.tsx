import { FC, ReactNode } from "react";
import style from "./layout.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { Sidebar } from "../Sidebar/Sidebar";
import { useElementWidth } from "./useElementWidth";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { ref, width } = useElementWidth();
  return (
    <div className={style.layout} ref={ref}>
      <Navigation widthWindow={width} />
      <div className={style.center}>{children}</div>
      <Sidebar />
    </div>
  );
};
