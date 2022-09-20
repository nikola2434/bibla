import { FC } from "react";
import style from "./ItemMenu.module.scss";
import { IMenuItems } from "../MenuInterface";
import Link from "next/link";
import { Icons } from "../../../../UI/Icons";
import { useRouter } from "next/router";
import cn from "classnames";

export const ItemMenu: FC<{ item: IMenuItems }> = ({ item }) => {
  const route = useRouter();
  return (

    <div
      className={cn(
        { [style.active]: route.asPath === item.link },
        style.default
      )}
    >
      <Link href={item.link}>
        <a className={style.item_menu}>
          <Icons name={item.icons} />
          <div className={style.title}>{item.title}</div>
        </a>
      </Link>
    </div>
  );
};
