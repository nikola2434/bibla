import { FC } from "react";

import { useAppSelector } from "../../../../../hooks/useAppSelector";
import ItemAuthMenu from "./ItemAuthMenu";
import LogoutButton from "./LogoutButton";
import style from "../Menu.module.scss";

const AuthMenu: FC<{ setIsOpen: () => void }> = ({
  setIsOpen,
}) => {
  const { user } = useAppSelector((state) => state.users);

  return (
    <>
      <div className={style.title_Menu}>Settings</div>
      <div className={style.container_items}>
        {user ? (
          <div>
            <ItemAuthMenu
              setIsOpen={setIsOpen}
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
            setIsOpen={setIsOpen}
            item={{ icons: "MdLogin", link: "/auth", title: "Login" }}
          />
        )}
        {user?.isAdmin && (
          <ItemAuthMenu
            setIsOpen={setIsOpen}
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
