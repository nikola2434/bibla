import { FC, useState } from "react";

import Button from "../../../../Elements/Button/Button";
import { TableItem } from "./TableItem/TableItem";
import style from "./TableUsers.module.scss";

interface ITableUsersProps {
  data: string[][];
  title: string;
  page: number;
  deleteUsers: (id: string) => void;
  refetch: () => void;
  setIdUserDelete: (id: string) => void;
  setPage: (page: number) => void;
}

export const TableUsers: FC<ITableUsersProps> = ({
  data,
  page,
  deleteUsers,
  refetch,
  title,
  setIdUserDelete,
  setPage,
}) => {
  function handleBackPage() {
    setPage(page - 1);
    refetch;
  }

  function handleNextPage() {
    setPage(page + 1);
    refetch();
  }

  return (
    <>
      {data.length !== 0 ? (
        <div className={style.container_items}>
          {data.map((item) => (
            <TableItem
              key={item[item.length - 1]}
              characteristics={[...item]}
              setIdUserDelete={setIdUserDelete}
              deleteUsers={deleteUsers}
              refetch={refetch}
              id={item[item.length - 1]}
            />
          ))}
        </div>
      ) : (
        <div className={style.error}>{title} not found!</div>
      )}
      <div className={style.buttons}>
        <Button buttonStyle={1} onClick={handleBackPage} disabled={page === 1}>
          back
        </Button>
        <Button
          buttonStyle={2}
          onClick={handleNextPage}
          disabled={data.length < 10}
        >
          Next
        </Button>
      </div>
    </>
  );
};
