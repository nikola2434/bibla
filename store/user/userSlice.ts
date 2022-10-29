import { getLocalStorage } from "../../hooks/local-storage";
import { IInitialState } from "./userInterface";

import { createSlice } from "@reduxjs/toolkit";

import { login, register, logout, getTokens } from "./userActions";

const initialState: IInitialState = {
  user: getLocalStorage("user"),
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getTokens.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
  },
});

export const userSliceReducer = userSlice.reducer;
