import { FC } from "react";
import style from "./Header.module.scss";

export const Heading: FC<{ title: string }> = ({ title }) => {
  return <h1 className={style.heading}>{title}</h1>;
};
