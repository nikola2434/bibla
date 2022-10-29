import { useRouter } from "next/router";

import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { getAdminUrl } from "../../../../config/url.config";
import { useGetAllGenresQuery } from "../../../../services/genres/genresApi";
import {
  useDeleteGenreMutation,
  useLazyCreateGenreQuery,
} from "../../../../services/genres/genresAdminApi";

export const useSearchAdminGenre = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const { push } = useRouter();

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const { data, isLoading, refetch } = useGetAllGenresQuery({
    searchTerm: debouncedSearch,
    page: page,
  });

  const [createGenreApi] = useLazyCreateGenreQuery();
  const [deleteGenre] = useDeleteGenreMutation();

  const createGenre = async () => {
    const response = await createGenreApi(undefined);
    push(getAdminUrl(`genres/edit/${response.data?.newId}`));
  };

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const deleteEntity = async (id: string) => {
    await deleteGenre(id).then(() => refetch());
  };

  return {
    data,
    isLoading,
    handleSearch,
    searchTerm,
    setPage,
    page,
    createGenre,
    deleteEntity,
  };
};
