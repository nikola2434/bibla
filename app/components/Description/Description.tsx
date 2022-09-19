import { FC } from "react";
import style from "./Description.module.scss";
import parse from "html-react-parser";

const Description: FC<{ description: string }> = ({ description }) => {
  return <div className={style.description}>{parse(description)}</div>;
};

export default Description;
