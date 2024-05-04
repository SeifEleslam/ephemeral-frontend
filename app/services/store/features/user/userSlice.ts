"use client";
import { createSlice } from "@reduxjs/toolkit";

interface UserSliceType {
  username: string;
  email: string;
  token: string;
}
const initialState = (): Partial<UserSliceType> => ({
  username: undefined,
  email: undefined,
  token: undefined,
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const user = {
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    },
    signOut: (state, action) => {
      localStorage.removeItem("user");
      return {
        username: undefined,
        email: undefined,
        token: undefined,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
