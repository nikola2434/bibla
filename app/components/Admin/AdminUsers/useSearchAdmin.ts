import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import {
  useDeleteUsersMutation,
  useGetUsersQuery,
} from "../../../../services/users/usersApi";

export const useSearchAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);
  const { data, isLoading, refetch } = useGetUsersQuery({
    searchTerm: debouncedSearch,
  });
  const [deleteUsers] = useDeleteUsersMutation();

  const deleteEntity = async (id: string) => {
    await deleteUsers(id);
  };

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return {
    data,
    isLoading,
    handleSearch,
    searchTerm,
    page,
    setPage,
    deleteEntity,
  };
};
