import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state, actions) => {
      state.isFetching = true;
    },
    loginSucess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = actions.payload;
    },
    loginFailure: (state, actions) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginFailure, loginSucess, logoutSuccess } =
  userSlice.actions;

export default userSlice.reducer;
