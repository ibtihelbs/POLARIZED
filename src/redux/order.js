import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    productOrder: [],
    userId: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    addOrderStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    addOrder: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.productOrder.push(action.payload);
      state.userId = action.payload.userId;
    },
    addOrderFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const { addOrder, addOrderStart, addOrderFailure } = orderSlice.actions;
export default orderSlice.reducer;
