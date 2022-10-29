import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQueryWithReauth } from "../rtqInterceptor";
import { IBook } from "../../app/UI/types";

export type updateBook = Omit<IBook, "_id" | "rating">;

export const booksAdminApi = createApi({
  reducerPath: "booksAdminApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Books"],
  endpoints: (build) => ({
    deleteBook: build.mutation<IBook, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),

    updateBook: build.mutation<IBook, { data: updateBook; id: string }>({
      query: ({ data, id }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createBook: build.query<string, undefined>({
      query: () => ({
        url: `books/create`,
      }),
    }),

    getCountBooks: build.query<number, undefined>({
      query: () => ({
        url: "books/count",
      }),
    }),
  }),
});

export const {
  useDeleteBookMutation,
  useUpdateBookMutation,
  useLazyCreateBookQuery,
  useGetCountBooksQuery,
} = booksAdminApi;
