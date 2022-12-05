import { IAuthor } from "./../../app/UI/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const authorApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://77.223.98.116:5000/api/" }),
  reducerPath: "authorsApi",
  tagTypes: ["Authors"],
  endpoints: (build) => ({
    getAllAuthors: build.query<
      IAuthor[],
      { searchTerm?: string; page?: number; limit?: number }
    >({
      query: ({ searchTerm, page, limit }) => ({
        url: `authors`,
        params: {
          searchTerm,
          page,
          limit,
        },
      }),
      providesTags: ["Authors"],
    }),

    getByIdAuthor: build.query<IAuthor, string>({
      query: (id) => ({
        url: `authors/${id}`,
      }),
    }),
  }),
});

export const { useGetAllAuthorsQuery, useGetByIdAuthorQuery } = authorApi;
