import { FC } from "react";
import { useDeleteUsersMutation } from "../../../../services/usersApi";
import { IUser } from "../../../UI/types";
import { Heading } from "../../Heading/Heading";
import { InputSearch } from "../../InputSearch/InputSearch";
import { SkeletonLoading } from "../../Skeleton/Skeleton";
import style from "./AdminUsers.module.scss";
import { HeadTableUsers } from "./HeadTableUsers/HeadTableUsers";
import { TableUsers } from "./HeadTableUsers/TableUsers/TableUsers";
import { useSearchAdmin } from "./useSearchAdmin";

export const AdminUsersContainer: FC = () => {
  const {
    data,
    searchTerm,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    page,
    setPage,
  } = useSearchAdmin();

  function getData(data: IUser[]) {
    const arrayUsers: string[][] = [];
    data.forEach((item) =>
      arrayUsers.push([item.login, String(item.isAdmin), item._id])
    );
    return arrayUsers;
  }

  const [deleteUsers] = useDeleteUsersMutation();
  console.log(data);
  return (
    <div className={style.admin_users}>
      <Heading title="Users" />
      <div className={style.search}>
        <InputSearch handleSearch={handleSearch} value={searchTerm} />
      </div>
      <div className={style.table}>
        <HeadTableUsers titles={["Email", "Access rights", "Actions"]} />
        {isLoading ? (
          <SkeletonLoading count={5} height={35} />
        ) : (
          <TableUsers
            data={data ? getData(data) : []} // в массиве последним элементом должен быть ID
            deleteUsers={deleteUsers}
            refetch={refetch}
            setIdUserDelete={setIdUserDelete}
            title={"Users"}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};
