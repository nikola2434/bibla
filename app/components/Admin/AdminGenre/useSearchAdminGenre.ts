import { useRouter } from "next/router";
import { IMenuItems } from "./../../Navigation/Menu/MenuInterface";
import { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

import {
  useCreateGenreMutation,
  useGetGenresQuery,
} from "../../../../services/genresApi";
import { getRandomID } from "../../../../config/getId";
import { getAdminUrl } from "../../../../config/url.config";

export const useSearchAdminGenre = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [idUserDelete, setIdUserDelete] = useState("");

  const [page, setPage] = useState(1);

  const { push } = useRouter();

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const { data, isLoading, refetch } = useGetGenresQuery({
    search: debouncedSearch,
    id_ne: idUserDelete,
    limit: 10,
    page: page,
  });

  const [createGenreApi] = useCreateGenreMutation();

  const createGenre = () => {
    const data: IMenuItems = {
      id: getRandomID(),
      books: [],
      title: "",
      link: "",
      icons: "MdBook",
      description:""
    };
    createGenreApi({ data }).then(() =>
      push(getAdminUrl(`genres/edit/${data.id}`))
    );
  };

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return {
    data,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    searchTerm,
    setPage,
    page,
    createGenre,
  };
};
