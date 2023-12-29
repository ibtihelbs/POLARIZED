import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    register: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.register.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addUserStart, addUserSuccess, addUserFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
