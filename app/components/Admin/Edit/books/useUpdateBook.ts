import { useEffect } from "react";
import { useRouter } from "next/router";
import { IBook } from "./../../../../UI/types";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";

import { getBookUrl } from "../../../../../config/url.config";
import { useGetByIdBookQuery } from "../../../../../services/books/booksApi";
import {
  updateBook,
  useUpdateBookMutation,
} from "../../../../../services/books/booksAdminApi";

export const useUpdateBook = (setValue: UseFormSetValue<IBook>) => {
  const { push, query } = useRouter();
  const bookId = String(query.id);
  const { data, isLoading, isSuccess } = useGetByIdBookQuery(bookId, {
    skip: !bookId,
  });

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("author", data.author);
      setValue("description", data.description);
      setValue("genre", data.genre);
      setValue("poster", data.poster);
      setValue("rating", data.rating);
    }
  }, [isSuccess]);

  const [updateBook] = useUpdateBookMutation();
  const onSubmit: SubmitHandler<updateBook> = async (data) => {
    await updateBook({ data, id: bookId });
    push(getBookUrl(bookId));
  };

  return { isLoading, onSubmit };
};
