import { baseQueryWithReauth } from "./../rtqInterceptor";

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IUploadsFiles } from "../../app/UI/types";

export const uploadsFilesApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "uploadsFiles",
  endpoints: (build) => ({
    uploadsFiles: build.mutation<
      IUploadsFiles[],
      { folder?: string; file: FormData }
    >({
      query: ({ folder, file }) => ({
        url: "files",
        params: {
          folder,
        },
        body: file,
        method: "POST",
      }),
    }),
  }),
});

export const { useUploadsFilesMutation } = uploadsFilesApi;
