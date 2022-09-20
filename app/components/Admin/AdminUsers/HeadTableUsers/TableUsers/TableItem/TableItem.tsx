import { FC } from "react";

import { Icons } from "../../../../../../UI/Icons";
import style from "./TableItem.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

interface ITableItem {
  characteristics: string[];
  setIdUserDelete: (id: string) => void;
  deleteUsers: (id: string) => void;
  refetch: () => void;
  id: string;
}

export const TableItem: FC<ITableItem> = ({
  characteristics,
  setIdUserDelete,
  deleteUsers,
  refetch,
  id,
}) => {
  const handleDeleteUsers = (id: string) => {
    deleteUsers(id);
    setIdUserDelete(id);
    refetch(); // Да, тут сделано через кастыль. Но если делать цивильно - через refetch, то запрос возращает data с удаленным элементом. Видимо json-server не обновляется, я хз
  };

  const { push, pathname } = useRouter();

  return (
    <div
      className={cn(style.item, {
        [style.item_admin]: characteristics.includes("true"),
      })}
    >
      {characteristics.map((item, index) => {
        if (item === "true" || item === "false") {
          return (
            <div className={style.email}>
              {item === "true" ? "Admin" : "User"}
            </div>
          );
        } else if (item.match(/null/)) {
          return <div className={style.email}>Неизвестно</div>;
        } else if (characteristics.length - 1 === index) {
          return null;
        } else return <div className={style.email}>{item}</div>;
      })}
      <div className={style.buttons}>
        <button onClick={() => push(`${pathname}/edit/${id}`)}>
          <Icons name="MdModeEdit" />
        </button>
        <button onClick={() => handleDeleteUsers(id)}>
          <Icons name="MdClose" />
        </button>
      </div>
    </div>
  );
};
