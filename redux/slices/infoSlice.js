import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isLogin: false,
  accessToken: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    updateCredentials: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;

      return state;
    },
    updateLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.accessToken = action.payload.token;

      return state;
    },
    resetToken: (state, action) => {
      state.accessToken = "";

      return state;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      state.isLogin = false;
      state.accessToken = "";

      return state;
    },
  },
});

export const { updateCredentials, updateLogin, resetToken, logout } =
  infoSlice.actions;
export default infoSlice.reducer;
