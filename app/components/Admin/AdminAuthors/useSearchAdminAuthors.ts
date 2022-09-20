import { getAdminUrl } from "./../../../../config/url.config";
import { useRouter } from "next/router";
import { IAuthor } from "./../../../UI/types";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import {
  useCreateAuthorMutation,
  useGetAllAuthorsQuery,
} from "../../../../services/authorsApi";

import { getRandomID } from "../../../../config/getId";

export const useSearchAdminAuthors = () => {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [idUserDelete, setIdUserDelete] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const [createAuthorApi] = useCreateAuthorMutation();

  const { data, isLoading, refetch } = useGetAllAuthorsQuery({
    search: debouncedSearch,
    id_ne: idUserDelete,
    limit: 10,
    page: page,
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const createAuthor = async () => {
    const newAuthor: IAuthor = {
      avatar: "",
      BooksWritten: [],
      country: "",
      DateOfBirth: "",
      id: getRandomID(),
      nameAuthor: "",
    };
    createAuthorApi(newAuthor).then(() =>
      push(getAdminUrl(`authors/edit/${newAuthor.id}`))
    );
  };

  return {
    data,
    isLoading,
    handleSearch,
    refetch,
    setIdUserDelete,
    searchTerm,
    setPage,
    page,
    createAuthor,
  };
};
