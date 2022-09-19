import { IBook } from "./../app/UI/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { url } from "inspector";
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getAllBooks: build.query<
      IBook[],
      { search: string; id_ne?: string; limit?: number; page?: number }
    >({
      query: ({ search, id_ne, limit, page }) => ({
        url: "books",
        params: {
          title_like: search,
          title_ne: id_ne,
          _limit: limit,
          _page: page,
        },
      }),
    }),
    getPopularBooks: build.query<IBook[], undefined>({
      query: () => ({
        url: "books",
      }),
      transformResponse: (response: IBook[]) => {
        const sortBooks = response.sort((a, b) => {
          return b.rating - a.rating;
        });
        return sortBooks;
      },
    }),

    deleteBook: build.mutation<{}, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),

    bookById: build.query<IBook, string>({
      query: (id) => ({
        url: `books/${id}`,
      }),
    }),

    updateBook: build.mutation<IBook, { data: IBook; id: string }>({
      query: ({ data, id }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createBook: build.mutation<IBook, IBook>({
      query: (data) => ({
        url: `books/`,
        method: "POST",
        body: data,
      }),
    }),


  }),
});

export const {
  useGetAllBooksQuery,
  useGetPopularBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBookByIdQuery,
  useCreateBookMutation,
  
} = booksApi;
