import { IRequest } from "./../app/UI/types";

import { IMenuItems } from "./../app/components/Navigation/Menu/MenuInterface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const genresAPI = createApi({
  reducerPath: "genresAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/bookGenres" }),
  endpoints: (build) => ({
    getGenres: build.query<IMenuItems[], IRequest>({
      query: ({ search = "", id_ne, page = 1, limit = 10 }) => ({
        url: "",
        params: {
          title_like: search,
          id_ne,
          _limit: limit,
          _page: page,
        },
      }),
    }),

    getByIdGenres: build.query<IMenuItems, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),

    deleteGenre: build.mutation<{}, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),

    updateGenre: build.mutation<IMenuItems, { data: IMenuItems; id: string }>({
      query: ({ data, id }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createGenre: build.mutation<IMenuItems, { data: IMenuItems }>({
      query: ({ data }) => ({
        url: "/",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetGenresQuery,
  useDeleteGenreMutation,
  useGetByIdGenresQuery,
  useUpdateGenreMutation,
  useCreateGenreMutation,
} = genresAPI;
