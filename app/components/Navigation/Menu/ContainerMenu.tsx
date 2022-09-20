import { FC } from "react";
import AuthMenu from "./ItemMenu/AuthMenu";
import { ItemMenu } from "./ItemMenu/ItemMenu";
import style from "./Menu.module.scss";
import { MenuData } from "./MenuData";
import { IMenu } from "./MenuInterface";

export const ContainerMenu: FC<{ MenuData: IMenu }> = ({ MenuData }) => {
  const { title, items } = MenuData;
  return (
    <>
      {title === "auth" ? (
        <div className={style.container}>
          <AuthMenu />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.title_Menu}>{title}</div>
          <div className={style.container_items}>
            {items?.map((item) => (
              <ItemMenu item={item} key={item.title} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
