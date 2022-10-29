import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useGetAllBooksQuery } from "../../../../services/books/booksApi";
import {
  useDeleteBookMutation,
  useLazyCreateBookQuery,
} from "../../../../services/books/booksAdminApi";

export const useSearchAdminBooks = () => {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const { data, isLoading, refetch } = useGetAllBooksQuery({
    searchTerm: debouncedSearch,
    page,
    limit: 10,
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  const [createBookApi] = useLazyCreateBookQuery();
  const [deleteBook] = useDeleteBookMutation();

  const createBook = async () => {
    const response = await createBookApi(undefined);
    push(`books/edit/${response.data}`);
  };

  const deleteEntity = async (id: string) => {
    await deleteBook(id).then(() => refetch());
  };

  return {
    data,
    isLoading,
    handleSearch,
    searchTerm,
    setPage,
    page,
    createBook,
    deleteEntity,
  };
};
