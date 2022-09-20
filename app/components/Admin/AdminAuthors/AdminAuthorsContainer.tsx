import { FC } from "react";
import { useDeleteAuthorsMutation } from "../../../../services/authorsApi";
import { IAuthor } from "../../../UI/types";
import Button from "../../Elements/Button/Button";
import { Heading } from "../../Heading/Heading";
import { InputSearch } from "../../InputSearch/InputSearch";
import { SkeletonLoading } from "../../Skeleton/Skeleton";
import { HeadTableUsers } from "../AdminUsers/HeadTableUsers/HeadTableUsers";
import { TableUsers } from "../AdminUsers/HeadTableUsers/TableUsers/TableUsers";
import style from "./AdminAuthors.module.scss";
import { useSearchAdminAuthors } from "./useSearchAdminAuthors";

export const AdminAuthorsContainer: FC = () => {
  const {
    data,
    searchTerm,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    setPage,
    page,
    createAuthor,
  } = useSearchAdminAuthors();

  function getData(data: IAuthor[]) {
    const arrayBooks: string[][] = [];
    data.map((item) =>
      arrayBooks.push([
        item.nameAuthor,
        item.country,
        item.DateOfBirth,
        item.id,
      ])
    );
    return arrayBooks;
  }

  const [deleteAuthor] = useDeleteAuthorsMutation();

  return (
    <div className={style.admin_users}>
      <Heading title="Authors" />
      <div className={style.admin_head}>
        <div className={style.search}>
          <InputSearch handleSearch={handleSearch} value={searchTerm} />
        </div>
        <div className={style.add_new}>
          <Button buttonStyle={2} onClick={() => createAuthor()}>
            Add genre
          </Button>
        </div>
      </div>
      <div className={style.table}>
        <HeadTableUsers titles={["Author", "Country", "Born", "Actions"]} />
        {isLoading ? (
          <SkeletonLoading count={5} height={35} />
        ) : (
          <TableUsers
            data={data ? getData(data) : []}
            deleteUsers={deleteAuthor}
            refetch={refetch}
            setIdUserDelete={setIdUserDelete}
            title={"Authors"}
            setPage={setPage}
            page={page}
          />
        )}
      </div>
    </div>
  );
};
