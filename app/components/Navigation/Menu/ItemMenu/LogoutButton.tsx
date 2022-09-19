import { FC, MouseEvent } from "react";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import style from "./ItemMenu.module.scss";
import { Icons } from "../../../../UI/Icons";
import { IMenuItems } from "../MenuInterface";
import { useRouter } from "next/router";

const LogoutButton: FC<{ item: IMenuItems }> = ({ item }) => {
  const { replace } = useRouter();
  const { logout } = useAppDispatch();
  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
    replace("/auth");
  };
  return (
    <div className={style.default}>
      <a onClick={handleLogout} className={style.item_menu}>
        <Icons name={item.icons} />
        <div className={style.title}>{item.title}</div>
      </a>
    </div>
  );
};

export default LogoutButton;
