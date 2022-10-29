import { IMenuItems } from "../../app/components/Navigation/Menu/MenuInterface";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQueryWithReauth } from "../rtqInterceptor";

export type updateGenre = Omit<IMenuItems, "_id">;

export const genresAdminAPI = createApi({
  reducerPath: "genresAdminAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Genres"],
  endpoints: (build) => ({
    deleteGenre: build.mutation<IMenuItems, string>({
      query: (id) => ({
        url: `/genre/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Genres"],
    }),

    updateGenre: build.mutation<IMenuItems, { data: updateGenre; id: string }>({
      query: ({ data, id }) => ({
        url: `/genre/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createGenre: build.query<{ newId: string }, undefined>({
      query: () => ({
        url: "/genre/create",
      }),
    }),

    getCountGenres: build.query<number, undefined>({
      query: () => ({
        url: "/genre/count",
      }),
    }),
  }),
});

export const {
  useDeleteGenreMutation,
  useLazyCreateGenreQuery,
  useGetCountGenresQuery,

  useUpdateGenreMutation,
} = genresAdminAPI;
