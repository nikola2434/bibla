import { FC } from "react";
import { useGetCountAuthorsQuery } from "../../../../../services/authors/authorsAdminApi";
import { useGetCountBooksQuery } from "../../../../../services/books/booksAdminApi";
import { useGetCountGenresQuery } from "../../../../../services/genres/genresAdminApi";

import { useGetCountUsersQuery } from "../../../../../services/users/usersApi";
import { BlockUserCount } from "./BlockUserCount";

export const ContainerCountBlocks: FC = () => {
  const { data: countUsers, isLoading: isLoadingUser } =
    useGetCountUsersQuery(undefined);

  const { data: countBooks, isLoading: isLoadingBooks } =
    useGetCountBooksQuery(undefined);

  const { data: countAuthors, isLoading: isLoadingAuthors } =
    useGetCountAuthorsQuery(undefined);

  const { data: countGenres, isLoading: isLoadingGenres } =
    useGetCountGenresQuery(undefined);
  return (
    <>
      <BlockUserCount
        countUser={countUsers || 0}
        icon={"MdOutlineSupervisorAccount"}
        isLoading={isLoadingUser}
        title="Users"
      />
      <BlockUserCount
        countUser={countBooks || 0}
        icon={"MdBook"}
        isLoading={isLoadingBooks}
        title="Books"
      />
      <BlockUserCount
        countUser={countAuthors || 0}
        icon={"MdAccountCircle"}
        isLoading={isLoadingAuthors}
        title="Authors"
      />
      <BlockUserCount
        countUser={countGenres || 0}
        icon={"MdBookmarks"}
        isLoading={isLoadingGenres}
        title="Genres"
      />
    </>
  );
};
