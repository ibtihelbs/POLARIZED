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
  },
});

export const { loginStart, loginFailure, loginSucess } = userSlice.actions;

export default userSlice.reducer;
