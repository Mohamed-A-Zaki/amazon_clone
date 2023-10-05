import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
