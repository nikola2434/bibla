import { FC } from "react";
import style from "./HeadTableUsers.module.scss";

export const HeadTableUsers: FC<{ titles: string[] }> = ({ titles }) => {
  return (
    <div className={style.head_table}>
      {titles.map((value) => (
        <div key={value} className={style.item_head_table}>
          {value}
        </div>
      ))}
    </div>
  );
};
