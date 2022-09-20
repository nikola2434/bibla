import { FC } from "react";
import { IAdminNavigationItem } from "./AdminNavigationInterface";
import style from "./AdminNavigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

export const ItemAdminNav: FC<{ item: IAdminNavigationItem }> = ({
  item: { title, link },
}) => {
  const { pathname } = useRouter();

  return (
    <Link href={link}>
      <a className={cn(style.default, { [style.active]: link === pathname })}>
        {title}
      </a>
    </Link>
  );
};
