import { usersAdminApi } from "./../services/users/usersApi";
import { uploadsFilesApi } from "./../services/files/uploadsFiles";
import { booksAdminApi } from "./../services/books/booksAdminApi";
import { booksApi } from "./../services/books/booksApi";
import { authorApi } from "./../services/authors/authorsApi";
import { genresApi } from "./../services/genres/genresApi";
import { genresAdminAPI } from "./../services/genres/genresAdminApi";
import { sliderApi } from "./../services/sliderAri";
import { userSliceReducer } from "./user/userSlice";

import { configureStore } from "@reduxjs/toolkit";
import { authorsAdminApi } from "../services/authors/authorsAdminApi";

export const store = configureStore({
  reducer: {
    [genresAdminAPI.reducerPath]: genresAdminAPI.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [authorsAdminApi.reducerPath]: authorsAdminApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [booksAdminApi.reducerPath]: booksAdminApi.reducer,
    [usersAdminApi.reducerPath]: usersAdminApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [uploadsFilesApi.reducerPath]: uploadsFilesApi.reducer,
    users: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersAdminApi.middleware,
      booksApi.middleware,
      booksAdminApi.middleware,
      authorApi.middleware,
      authorsAdminApi.middleware,
      genresApi.middleware,
      genresAdminAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
