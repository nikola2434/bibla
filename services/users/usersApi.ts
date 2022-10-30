import { IBook } from "./../../app/UI/types";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { IUser } from "../../app/UI/types";
import { IAuthResponse } from "../../store/user/userInterface";

import { baseQueryWithReauth } from "../rtqInterceptor";

export interface IUpdateUser {
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

export interface IUpdateImage {
  url: string;
}

export interface IResponseFavorite {
  _id: string;
  favoriteBooks: IBook[];
}

export const usersAdminApi = createApi({
  reducerPath: "usersAdminApi",
  tagTypes: ["Users", "Update"],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUsers: build.query<IUser[], { searchTerm?: string }>({
      query: ({ searchTerm }) => ({
        url: "user",
        params: {
          searchTerm,
        },
      }),
      providesTags: ["Users"],
    }),

    updateUser: build.mutation<IAuthResponse, { data: IUpdateUser }>({
      query: ({ data }) => ({
        url: `user/profile`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Update"],
    }),

    updateImage: build.mutation<IAuthResponse, { data: IUpdateImage }>({
      query: ({ data }) => ({
        url: "user/profile/image",
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Update"],
    }),

    getProfile: build.query<IUser, undefined>({
      query: () => ({
        url: `/user/profile`,
      }),
      providesTags: ["Update"],
    }),

    deleteUsers: build.mutation<IAuthResponse, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    getCountUsers: build.query<number, undefined>({
      query: () => ({
        url: "user/count",
      }),
    }),

    toggleFavorites: build.mutation<IAuthResponse, string>({
      query: (id) => ({
        url: `user/favorite/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Update"],
    }),

    getFavorite: build.query<IResponseFavorite, undefined>({
      query: () => ({
        url: "user/favorites",
      }),
      providesTags: ["Update"],
    }),

    getUserById: build.query<IUser, string>({
      query: (id) => ({
        url: `user/${id}`,
      }),
    }),

    updateAdminUser: build.mutation<IUser, { id: string; isAdmin: boolean }>({
      query: ({ id, isAdmin }) => ({
        url: `user/admin/${id}`,
        method: "PUT",
        body: { isAdmin },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useDeleteUsersMutation,
  useGetProfileQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetCountUsersQuery,
  useToggleFavoritesMutation,
  useGetFavoriteQuery,
  useGetUserByIdQuery,
  useUpdateAdminUserMutation,
  useUpdateImageMutation,
} = usersAdminApi;
