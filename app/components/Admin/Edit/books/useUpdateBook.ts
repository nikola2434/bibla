import { useEffect } from "react";
import { useRouter } from "next/router";
import { IBook } from "./../../../../UI/types";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import {
  useBookByIdQuery,
  useUpdateBookMutation,
} from "../../../../../services/booksApi";
import { getBookUrl } from "../../../../../config/url.config";

export const useUpdateBook = (setValue: UseFormSetValue<IBook>) => {
  const { push, query } = useRouter();
  const bookId = String(query.id);
  const { data, isLoading, isSuccess } = useBookByIdQuery(bookId, {
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
  const onSubmit: SubmitHandler<IBook> = async (data) => {

    await updateBook({ data, id: bookId });
    push(getBookUrl(bookId));
  };

  return { isLoading, onSubmit };
};
