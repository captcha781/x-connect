import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isLogin: false,
  token: "",
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        
    }
})