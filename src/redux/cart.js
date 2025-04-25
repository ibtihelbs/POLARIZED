import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], // Initialize products as an empty array
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let isFound = -1;
      if (Boolean(state.products)) {
        isFound = state.products.findIndex((v) => v._id === action.payload._id);
      }
      if (isFound === -1) {
        state.products.push(action.payload);
        if (action.payload.quantity) {
          state.quantity += action.payload.quantity;
          state.total += action.payload.price * action.payload.quantity;
        } else {
          state.quantity += 1;
          state.total += action.payload.price;
        }
      } else {
        state.products[isFound].quantity += action.payload.quantity;
        state.quantity += action.payload.quantity;
        state.total += Math.round(action.payload.price * state.quantity);
      }
    },

    deleteProduct: (state, action) => {
      const productId = action.payload._id;
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.quantity * action.payload.price;
      state.products = state.products.filter(
        (product) => product._id !== productId
      );
    },
    updateQuantity: (state, action) => {
      const isFound = state.products.findIndex(
        (v) => v._id === action.payload._id
      );
      state.products[isFound].quantity = action.payload.newQuantity;
      state.total = 0;
      state.quantity = 0;
      state.products.forEach((element) => {
        state.total += Math.round(element.price * element.quantity);
        state.quantity += element.quantity;
      });
    },
    validProduct: (state, action) => {
      state.products.splice(0);
      state.quantity = 0;
      state.total = 0;
    },
  },
});
export const { addProduct, deleteProduct, validProduct, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
