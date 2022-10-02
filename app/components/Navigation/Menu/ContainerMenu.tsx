import { FC } from "react";
import AuthMenu from "./ItemMenu/AuthMenu";
import { ItemMenu } from "./ItemMenu/ItemMenu";
import style from "./Menu.module.scss";
import { IMenu } from "./MenuInterface";

export const ContainerMenu: FC<{
  MenuData: IMenu;
  setIsOpen: () => void;
}> = ({ MenuData, setIsOpen }) => {
  const { title, items } = MenuData;
  return (
    <>
      {title === "auth" ? (
        <div className={style.container}>
          <AuthMenu setIsOpen={setIsOpen} />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.title_Menu}>{title}</div>
          <div className={style.container_items}>
            {items?.map((item) => (
              <ItemMenu item={item} key={item.title} onClick={setIsOpen} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
