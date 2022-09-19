import { getAuthorUrl } from "./../../../../../config/url.config";
import { useEffect } from "react";
import { IAuthor } from "./../../../../UI/types";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import {
  useAuthorByIdQuery,
  useAuthorUpdateMutation,
} from "../../../../../services/authorsApi";

export const useUpdateAuthor = (setValue: UseFormSetValue<IAuthor>) => {
  const { push, query } = useRouter();

  const AuthorId = String(query.id);
  const { data, isSuccess, isLoading } = useAuthorByIdQuery(AuthorId, {
    skip: !AuthorId,
  });

  useEffect(() => {
    if (data) {
      setValue("nameAuthor", data.nameAuthor);
      setValue("country", data.country);
      setValue("avatar", data.avatar);
      setValue("DateOfBirth", data.DateOfBirth);
      setValue("BooksWritten", data.BooksWritten);
    }
  }, [isSuccess]);

  const [updateAuthor] = useAuthorUpdateMutation();

  const onSubmit: SubmitHandler<IAuthor> = async (data) => {
    await updateAuthor({ data, id: AuthorId });
    push(getAuthorUrl(AuthorId));
  };

  return { onSubmit, isLoading };
};
