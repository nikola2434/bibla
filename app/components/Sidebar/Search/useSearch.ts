import { ChangeEvent, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useGetAllBooksQuery } from "../../../../services/booksApi";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const { data, isSuccess } = useGetAllBooksQuery(
    { search: debouncedSearch },
    {
      skip: !debouncedSearch,
    }
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return { data, isSuccess, handleSearch, debouncedSearch, searchTerm };
};
