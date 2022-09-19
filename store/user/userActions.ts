import { userApi } from "./../../services/auth/userAuthApi";
import { IAuthResponse, IEmailPassword } from "./userInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* login */
export const login = createAsyncThunk<IAuthResponse | Error, IEmailPassword>(
  "auth/login",
  async ({ login, password }, thunkApi) => {
    try {
      return await userApi.login(login, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  "auth/register",
  async ({ login, password }, thunkApi) => {
    try {
      return await userApi.register(login, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

/* logout */
export const logout = createAsyncThunk("auth/logout", async () => {
  await userApi.logout();
});

/* getTokens */

export const getTokens = createAsyncThunk<IAuthResponse, { id: string }>(
  "auth/getTokens",
  async ({ id }, thunkApi) => {
    try {
      const response = await userApi.getNewTokens(id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const update = createAsyncThunk<IAuthResponse, { id: string }>(
  "auth/update",
  async ({ id }, thunkApi) => {
    try {
      const response = await userApi.updateUser(id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
