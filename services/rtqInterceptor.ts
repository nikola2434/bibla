import Cookies from "js-cookie";
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/react";
import { getTokens, logout } from "../store/user/userActions";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://77.223.98.116:5000/api/",
  prepareHeaders(headers) {
    const token = Cookies.get("assetToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    try {
      api.dispatch(getTokens());
    } catch (error) {
      api.dispatch(logout());
    }
  }
  return result;
};
