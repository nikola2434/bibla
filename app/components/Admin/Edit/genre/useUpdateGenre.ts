import { useEffect } from "react";
import { useRouter } from "next/router";
import { IMenuItems } from "./../../../Navigation/Menu/MenuInterface";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";

import { getGenreUrl } from "../../../../../config/url.config";
import { useGetByIdGenreQuery } from "../../../../../services/genres/genresApi";
import {
  updateGenre,
  useUpdateGenreMutation,
} from "../../../../../services/genres/genresAdminApi";

export const useUpdateGenre = (setValue: UseFormSetValue<IMenuItems>) => {
  const { push, query } = useRouter();

  const genreId = String(query.id);
  const { data, isLoading, isSuccess } = useGetByIdGenreQuery(genreId, {
    skip: !genreId,
  });

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("icons", data.icons);
      setValue("link", data.link);
      setValue("books", data.books);
      setValue("description", data.description);
      setValue("books", data.books);
    }
  }, [isSuccess]);

  const [updateGenre] = useUpdateGenreMutation();

  const onSubmit: SubmitHandler<updateGenre> = async (data) => {
    await updateGenre({ data, id: genreId });
    push(getGenreUrl(data.link));
  };

  return { isLoading, onSubmit };
};
