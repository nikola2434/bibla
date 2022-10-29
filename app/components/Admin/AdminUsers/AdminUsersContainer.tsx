import { FC } from "react";
import { useDeleteUsersMutation } from "../../../../services/users/usersApi";
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
    page,
    setPage,
    deleteEntity,
  } = useSearchAdmin();

  function getData(data: IUser[]) {
    const arrayUsers: string[][] = [];
    data.forEach((item) =>
      arrayUsers.push([item.email, String(item.isAdmin), item._id])
    );
    return arrayUsers;
  }

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
            title={"Users"}
            page={page}
            setPage={setPage}
            deleteEntity={deleteEntity}
          />
        )}
      </div>
    </div>
  );
};
