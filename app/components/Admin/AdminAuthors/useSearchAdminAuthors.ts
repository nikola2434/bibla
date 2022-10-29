import { getAdminUrl } from "./../../../../config/url.config";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

import { useGetAllAuthorsQuery } from "../../../../services/authors/authorsApi";
import {
  useDeleteAuthorsMutation,
  useLazyCreateAuthorQuery,
} from "../../../../services/authors/authorsAdminApi";

export const useSearchAdminAuthors = () => {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const [createAuthorApi] = useLazyCreateAuthorQuery();
  const [deleteAuthor] = useDeleteAuthorsMutation();

  const { data, isLoading, refetch } = useGetAllAuthorsQuery({
    searchTerm: debouncedSearch,
    page,
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const createAuthor = async () => {
    const res = await createAuthorApi(undefined);

    push(getAdminUrl(`authors/edit/${res.data?.newId}`));
  };

  const deleteEntity = async (id: string) => {
    await deleteAuthor(id).then(() => refetch());
  };

  return {
    data,
    isLoading,
    handleSearch,
    searchTerm,
    setPage,
    page,
    createAuthor,
    deleteEntity,
  };
};
