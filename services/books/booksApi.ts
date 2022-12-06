import { IBook } from "./../../app/UI/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const booksApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://bibla.site/api/" }),
  reducerPath: "booksApi",
  tagTypes: ["Books"],
  endpoints: (build) => ({
    getAllBooks: build.query<
      IBook[],
      { searchTerm?: string; page?: number; limit?: number }
    >({
      query: ({ searchTerm, page, limit }) => ({
        url: `books/allBooks`,
        params: {
          searchTerm,
          page,
          limit,
        },
      }),
      providesTags: [{ type: "Books", id: "LIST" }],
    }),

    getByIdBook: build.query<IBook, string>({
      query: (id) => ({
        url: `books/byId/${id}`,
      }),
    }),

    getPopularBook: build.query<IBook, undefined>({
      query: () => ({
        url: "books/popular",
      }),
    }),

    getPopularBooks: build.query<IBook[], undefined>({
      query: () => ({
        url: "books/populars",
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetByIdBookQuery,
  useGetPopularBookQuery,
  useGetPopularBooksQuery,
} = booksApi;
