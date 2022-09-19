import { FC } from "react";
import { useDeleteBookMutation } from "../../../../services/booksApi";
import { IBook } from "../../../UI/types";
import Button from "../../Elements/Button/Button";
import { Heading } from "../../Heading/Heading";
import { InputSearch } from "../../InputSearch/InputSearch";
import { SkeletonLoading } from "../../Skeleton/Skeleton";
import { HeadTableUsers } from "../AdminUsers/HeadTableUsers/HeadTableUsers";
import { TableUsers } from "../AdminUsers/HeadTableUsers/TableUsers/TableUsers";
import style from "./AdminBooks.module.scss";
import { useSearchAdminBooks } from "./useSearchAdminBooks";

export const AdminBooksContainer: FC = () => {
  const {
    data,
    searchTerm,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    setPage,
    page,
    createBook,
  } = useSearchAdminBooks();

  function getData(data: IBook[]) {
    const arrayBooks: string[][] = [];
    data.map((item) =>
      arrayBooks.push([item.title, item.author, String(item.rating), item.id])
    );
    return arrayBooks;
  }

  const [deleteBook] = useDeleteBookMutation();

  return (
    <div className={style.admin_users}>
      <Heading title="Books" />
      <div className={style.admin_head}>
        <div className={style.search}>
          <InputSearch handleSearch={handleSearch} value={searchTerm} />
        </div>
        <div className={style.add_new}>
          <Button buttonStyle={2} onClick={() => createBook()}>
            Add book
          </Button>
        </div>
      </div>
      <div className={style.table}>
        <HeadTableUsers titles={["Title", "Author", "Rating", "Actions"]} />
        {isLoading ? (
          <SkeletonLoading count={5} height={35} />
        ) : (
          <TableUsers
            data={data ? getData(data) : []}
            deleteUsers={deleteBook}
            refetch={refetch}
            setIdUserDelete={setIdUserDelete}
            title={"Books"}
            setPage={setPage}
            page={page}
          />
        )}
      </div>
    </div>
  );
};
