import { useRouter } from "next/router";
import { getRandomID } from "./../../../../config/getId";
import { IBook } from "./../../../UI/types";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import {
  useCreateBookMutation,
  useGetAllBooksQuery,
} from "../../../../services/booksApi";

export const useSearchAdminBooks = () => {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [idUserDelete, setIdUserDelete] = useState("");

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const { data, isLoading, refetch } = useGetAllBooksQuery({
    search: debouncedSearch,
    id_ne: idUserDelete,
    limit: 10,
    page: page,
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  const [createBookApi] = useCreateBookMutation();
  const createBook = async () => {
    const newBook: IBook = {
      id: getRandomID(),
      author: "",
      description: "",
      genre: "Novel",
      poster: "",
      rating: 0,
      title: "",
    };
    await createBookApi(newBook).then(() => push(`books/edit/${newBook.id}`));
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
    createBook,
  };
};
