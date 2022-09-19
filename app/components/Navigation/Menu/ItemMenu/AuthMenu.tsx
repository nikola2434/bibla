import { FC } from "react";

import { useAppSelector } from "../../../../../hooks/useAppSelector";
import ItemAuthMenu from "./ItemAuthMenu";
import LogoutButton from "./LogoutButton";
import style from "../Menu.module.scss";

const AuthMenu: FC = () => {
  const { user } = useAppSelector((state) => state.users);

  return (
    <>
      <div className={style.title_Menu}>Settings</div>
      <div className={style.container_items}>
        {user ? (
          <div>
            <ItemAuthMenu
              item={{
                icons: "MdSettings",
                title: "Profile",
                link: `/profile/${user._id}`,
              }}
            />

            <LogoutButton
              item={{ icons: "MdLogout", title: "Logout", link: "/auth" }}
            />
          </div>
        ) : (
          <ItemAuthMenu
            item={{ icons: "MdLogin", link: "/auth", title: "Login" }}
          />
        )}
        {user?.isAdmin && (
          <ItemAuthMenu
            item={{
              icons: "MdLock",
              title: "Admin panel",
              link: "/manage/statistics",
            }}
          />
        )}
      </div>
    </>
  );
};

export default AuthMenu;
