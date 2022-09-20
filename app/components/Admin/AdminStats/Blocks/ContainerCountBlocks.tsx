import { FC } from "react";
import { useGetAllAuthorsQuery } from "../../../../../services/authorsApi";
import { useGetAllBooksQuery } from "../../../../../services/booksApi";
import { useGetGenresQuery } from "../../../../../services/genresApi";
import { useGetUsersQuery } from "../../../../../services/usersApi";
import { BlockUserCount } from "./BlockUserCount";

export const ContainerCountBlocks: FC = () => {
  const { countUser, isLoading: isLoadingUser } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      countUser: Number(data?.length),
      isLoading,
    }),
  });

  const { data: countBooks, isLoading: isLoadingBooks } = useGetAllBooksQuery({
    search: "",
  });

  const { data: countAuthors, isLoading: isLoadingAuthors } =
    useGetAllAuthorsQuery({ search: "" });

  const { data: countGenres, isLoading: isLoadingGenres } = useGetGenresQuery(
    {}
  );
  return (
    <>
      <BlockUserCount
        countUser={countUser}
        icon={"MdOutlineSupervisorAccount"}
        isLoading={isLoadingUser}
        title="Users"
      />
      <BlockUserCount
        countUser={countBooks ? countBooks.length : 0}
        icon={"MdBook"}
        isLoading={isLoadingBooks}
        title="Books"
      />
      <BlockUserCount
        countUser={countAuthors ? countAuthors.length : 0}
        icon={"MdAccountCircle"}
        isLoading={isLoadingAuthors}
        title="Authors"
      />
      <BlockUserCount
        countUser={countGenres ? countGenres.length : 0}
        icon={"MdBookmarks"}
        isLoading={isLoadingGenres}
        title="Genres"
      />
    </>
  );
};
