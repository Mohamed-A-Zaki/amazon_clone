import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/app/types";

type InitialState = {
  cart: ProductType[];
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.cart.push(payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
