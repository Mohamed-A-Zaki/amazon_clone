import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/app/types";

type InitialState = {
  favorite: ProductType[];
};

const initialState: InitialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavotite(state, { payload }) {
      state.favorite.push(payload);
    },
  },
});

export const { addToFavotite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
