import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IMenuItems } from "../../app/components/Navigation/Menu/MenuInterface";

export const genresApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://bibla.site/api/" }),
  reducerPath: "genresApi",

  tagTypes: ["Genres"],
  endpoints: (build) => ({
    getAllGenres: build.query<
      IMenuItems[],
      { searchTerm?: string; page?: number; limit?: number }
    >({
      query: ({ searchTerm, page, limit }) => ({
        url: `genre/allGenres`,
        params: { searchTerm, page, limit },
      }),
      providesTags: ["Genres"],
    }),

    getByIdGenre: build.query<IMenuItems, string>({
      query: (id) => ({
        url: `genre/byId/${id}`,
      }),
    }),
  }),
});

export const { useGetAllGenresQuery, useGetByIdGenreQuery } = genresApi;
