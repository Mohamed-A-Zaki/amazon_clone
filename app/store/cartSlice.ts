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
    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.cart = state.cart.filter((ele) => ele._id !== payload);
    },
    increaseCount(state, { payload }: PayloadAction<number>) {
      const product = state.cart.find((ele) => ele._id === payload);
      if (product) {
        product.count++;
      }
    },
    decreaseCount(state, { payload }: PayloadAction<number>) {
      const product = state.cart.find((ele) => ele._id === payload);
      if (product && product.count > 1) {
        product.count--;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
