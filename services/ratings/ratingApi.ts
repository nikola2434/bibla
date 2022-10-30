import { IBook } from "./../../app/UI/types";
import { baseQueryWithReauth } from "./../rtqInterceptor";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export interface IRatingResponse {
  _id: string;
  value: number;
}

export interface IRatingBooks {
  _id: string;
  bookId: IBook;
}

export const ratingApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "rantingApi",
  tagTypes: ["rating"],
  endpoints: (build) => ({
    getRating: build.query<IRatingResponse, string>({
      query: (bookId) => ({
        url: `rating/${bookId}`,
      }),
      providesTags: ["rating"],
    }),

    setRating: build.mutation<
      IRatingResponse,
      { bookId: string; value: number }
    >({
      query: (data) => ({
        url: "rating",
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["rating"],
    }),

    getEvaluatedBooks: build.query<IRatingBooks[], undefined>({
      query: () => ({
        url: "rating/evaluated",
      }),
    }),
  }),
});

export const {
  useGetRatingQuery,
  useSetRatingMutation,
  useGetEvaluatedBooksQuery,
} = ratingApi;
