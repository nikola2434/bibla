import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQueryWithReauth } from "../rtqInterceptor";
import { IAuthor } from "../../app/UI/types";

export type updateAuthor = Omit<IAuthor, "_id" | "BooksWritten"> & {
  BooksWritten: string[];
};

export const authorsAdminApi = createApi({
  reducerPath: "authorsAdminApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Authors"],
  endpoints: (build) => ({
    deleteAuthors: build.mutation<IAuthor, string>({
      query: (id) => ({
        url: `authors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Authors"],
    }),

    authorUpdate: build.mutation<IAuthor, { data: updateAuthor; id: string }>({
      query: ({ data, id }) => ({
        url: `authors/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createAuthor: build.query<{ newId: string }, undefined>({
      query: () => ({
        url: "authors/create",
      }),
    }),

    getCountAuthors: build.query<number, undefined>({
      query: () => ({
        url: "authors/count",
      }),
    }),
  }),
});

export const {
  useDeleteAuthorsMutation,
  useAuthorUpdateMutation,
  useLazyCreateAuthorQuery,
  useGetCountAuthorsQuery,
} = authorsAdminApi;
