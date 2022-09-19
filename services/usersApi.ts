import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IUser } from "../app/UI/types";
import { IAuthResponse } from "../store/user/userInterface";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number | void>({
      query: (limit) => ({
        url: "users",
        params: {
          limit,
        },
      }),
    }),

    getSearchUsers: build.query<
      IUser[],
      { search: string; id_ne?: string; limit?: number; page?: number }
    >({
      query: ({ search, id_ne, limit, page }) => ({
        url: "users",
        params: {
          q: search,
          id_ne: id_ne,
          _imit: limit,
          _page: page,
        },
      }),
      transformResponse: (response: IAuthResponse[]) => {
        const data = response.map((user) => ({ ...user.user } as IUser));

        return data;
      },
    }),

    updateUser: build.mutation<
      IAuthResponse,
      { id: string; user: IAuthResponse }
    >({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        body: user,
        method: "PUT",
      }),
    }),

    getById: build.query<IAuthResponse, string>({
      query: (id) => ({
        url: `users/${id}`,
      }),
    }),

    deleteUsers: build.mutation<{}, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSearchUsersQuery,
  useDeleteUsersMutation,
  useUpdateUserMutation,
  useGetByIdQuery,
} = usersApi;
