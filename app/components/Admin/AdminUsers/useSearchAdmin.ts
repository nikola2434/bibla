import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import {
  useDeleteUsersMutation,
  useGetSearchUsersQuery,
} from "../../../../services/usersApi";

export const useSearchAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [idUserDelete, setIdUserDelete] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);
  const { data, isLoading, refetch } = useGetSearchUsersQuery({
    search: debouncedSearch,
    id_ne: idUserDelete,
    limit: 10,
    page: page,
  });

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
    page,
    setPage,
  };
};
