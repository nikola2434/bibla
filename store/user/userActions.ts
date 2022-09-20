import { userApi } from "./../../services/auth/userAuthApi";
import { IAuthResponse, IEmailPassword } from "./userInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseFormSetError } from "react-hook-form";

/* login */
export const login = createAsyncThunk<
  IAuthResponse,
  { data: IEmailPassword; setError: UseFormSetError<IEmailPassword> }
>("auth/login", async ({ setError, data }, thunkApi) => {
  try {
    const AuthResponse = await userApi.login(
      data.login,
      setError,
      data.password
    );
    if (AuthResponse.length === 0) {
      setError("login", { message: "Wrong password or email!" });
      setError("password", { message: "Wrong password or email!" });
      return thunkApi.rejectWithValue("");
    }
    return AuthResponse[0];
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

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
