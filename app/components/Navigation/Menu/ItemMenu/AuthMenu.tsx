import { FC } from "react";

import { useAppSelector } from "../../../../../hooks/useAppSelector";
import ItemAuthMenu from "./ItemAuthMenu";
import LogoutButton from "./LogoutButton";
import style from "../Menu.module.scss";

const AuthMenu: FC<{ setIsOpen: () => void }> = ({ setIsOpen }) => {
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
                _id: "22",
                icons: "MdSettings",
                title: "Profile",
                link: `/profile/${user._id}`,
              }}
            />

            <LogoutButton
              item={{
                icons: "MdLogout",
                title: "Logout",
                link: "/auth",
                _id: "21",
              }}
            />
          </div>
        ) : (
          <ItemAuthMenu
            setIsOpen={setIsOpen}
            item={{
              icons: "MdLogin",
              link: "/auth",
              title: "Login",
              _id: "23",
            }}
          />
        )}
        {user?.isAdmin && (
          <ItemAuthMenu
            setIsOpen={setIsOpen}
            item={{
              icons: "MdLock",
              title: "Admin panel",
              link: "/manage/statistics",
              _id: "24",
            }}
          />
        )}
      </div>
    </>
  );
};

export default AuthMenu;
