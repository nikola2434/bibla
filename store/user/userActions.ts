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
    const AuthResponse = await userApi.login(data.login, data.password);
    return AuthResponse;
  } catch (error) {
    setError("login", { type: "custom", message: "Wrong login or password!" });
    setError("password", {
      type: "custom",
      message: "Wrong login or password!",
    });
    return thunkApi.rejectWithValue(error);
  }
});

/* register */
export const register = createAsyncThunk<
  IAuthResponse,
  { data: IEmailPassword; setError: UseFormSetError<IEmailPassword> }
>("auth/register", async ({ data, setError }, thunkApi) => {
  try {
    return await userApi.register(data.login, data.password);
  } catch (error) {
    setError("login", { type: "custom", message: "This email already exists" });
    return thunkApi.rejectWithValue(error);
  }
});

/* logout */
export const logout = createAsyncThunk("auth/logout", async () => {
  await userApi.logout();
});

/* getTokens */

export const getTokens = createAsyncThunk<IAuthResponse, undefined>(
  "auth/getTokens",
  async (_, thunkApi) => {
    try {
      const response = await userApi.getNewTokens();
      return response;
    } catch (error) {
      thunkApi.dispatch(logout());
      return thunkApi.rejectWithValue(error);
    }
  }
);
