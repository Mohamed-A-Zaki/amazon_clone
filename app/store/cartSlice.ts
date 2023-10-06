import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "@/app/types";

type InitialState = {
  cart: CartProductType[];
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<ProductType>) {
      const index = state.cart.findIndex((ele) => ele._id === payload._id);
      if (index === -1) {
        state.cart.push({ ...payload, count: 1 });
      } else {
        state.cart[index].count++;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((ele) => ele._id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
