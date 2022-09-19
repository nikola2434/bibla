import { sliderApi } from "./../services/sliderAri";
import { userSliceReducer } from "./user/userSlice";
import { booksApi } from "./../services/booksApi";
import { genresAPI } from "./../services/genresApi";
import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import { authorsApi } from "../services/authorsApi";

export const store = configureStore({
  reducer: {
    [genresAPI.reducerPath]: genresAPI.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    users: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(genresAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
