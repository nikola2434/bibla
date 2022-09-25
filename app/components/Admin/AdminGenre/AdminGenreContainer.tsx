import { FC } from "react";
import { useDeleteBookMutation } from "../../../../services/booksApi";
import { useDeleteGenreMutation } from "../../../../services/genresApi";
import Button from "../../Elements/Button/Button";
import { Heading } from "../../Heading/Heading";
import { InputSearch } from "../../InputSearch/InputSearch";
import { IMenuItems } from "../../Navigation/Menu/MenuInterface";
import { SkeletonLoading } from "../../Skeleton/Skeleton";
import { HeadTableUsers } from "../AdminUsers/HeadTableUsers/HeadTableUsers";
import { TableUsers } from "../AdminUsers/HeadTableUsers/TableUsers/TableUsers";
import style from "./AdminGenre.module.scss";
import { useSearchAdminGenre } from "./useSearchAdminGenre";

export const AdminGenreContainer: FC = () => {
  const {
    data,
    searchTerm,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    setPage,
    page,
    createGenre,
  } = useSearchAdminGenre();

  function getData(data: IMenuItems[]) {
    const arrayMenuItems: string[][] = [];
    data.forEach((item) =>
      arrayMenuItems.push([
        item.title,
        String(item.books?.length),
        String(item.id),
      ])
    );
    return arrayMenuItems;
  }

  const [deleteGenre] = useDeleteGenreMutation();

  return (
    <div className={style.admin_users}>
      <Heading title="Genres" />
      <div className={style.admin_head}>
        <div className={style.search}>
          <InputSearch handleSearch={handleSearch} value={searchTerm} />
        </div>
        <div className={style.add_new}>
          <Button buttonStyle={2} onClick={() => createGenre()}>
            Add genre
          </Button>
        </div>
      </div>

      <div className={style.table}>
        <HeadTableUsers titles={["Genre", "Number of books", "Actions"]} />
        {isLoading ? (
          <SkeletonLoading count={5} height={35} />
        ) : (
          <TableUsers
            data={data ? getData(data) : []}
            deleteUsers={deleteGenre}
            refetch={refetch}
            setIdUserDelete={setIdUserDelete}
            title={"Genres"}
            setPage={setPage}
            page={page}
          />
        )}
      </div>
    </div>
  );
};
