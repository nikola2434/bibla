import { FC } from "react";
import style from "./Header.module.scss";

const SubTitle: FC<{ title: string }> = ({ title }) => {
  return <div className={style.subtitle}>{title}</div>;
};

export default SubTitle;
