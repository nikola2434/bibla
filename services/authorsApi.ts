import { IAuthor } from "./../app/UI/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const authorsApi = createApi({
  reducerPath: "authorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getAllAuthors: build.query<
      IAuthor[],
      { search: string; id_ne?: string; page?: number; limit?: number }
    >({
      query: ({ search, id_ne, page, limit }) => ({
        url: "author",
        params: {
          nameAuthor_like: search,
          id_ne,
          _page: page,
          _limit: limit,
        },
      }),
    }),
    deleteAuthors: build.mutation<{}, string>({
      query: (id) => ({
        url: `author/${id}`,
        method: "DELETE",
      }),
    }),
    authorById: build.query<IAuthor, string>({
      query: (id) => ({
        url: `author/${id}`,
      }),
    }),

    authorUpdate: build.mutation<IAuthor, { data: IAuthor; id: string }>({
      query: ({ data, id }) => ({
        url: `author/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    createAuthor: build.mutation<IAuthor, IAuthor>({
      query: (data) => ({
        url: "author",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useDeleteAuthorsMutation,
  useGetAllAuthorsQuery,
  useAuthorByIdQuery,
  useAuthorUpdateMutation,
  useCreateAuthorMutation,
} = authorsApi;
