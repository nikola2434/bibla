import { FC } from "react";
import { IMenuItems } from "../MenuInterface";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./ItemMenu.module.scss";
import { Icons } from "../../../../UI/Icons";

const ItemAuthMenu: FC<{ item: IMenuItems }> = ({ item }) => {
  return (
    <div className={style.default}>
      <Link href={item.link}>
        <a className={style.item_menu}>
          <Icons name={item.icons} />
          <div className={style.title}>{item.title}</div>
        </a>
      </Link>
    </div>
  );
};

export default ItemAuthMenu;
