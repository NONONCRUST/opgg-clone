import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface localState {
  searchHistory: string[];
  favoriteSummoner: string[];
}

const initialState: localState = {
  searchHistory: [],
  favoriteSummoner: [],
};

const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    setSearchHistory(state, action: PayloadAction<string[]>) {
      state.searchHistory = action.payload;
    },
    setFavoriteSummoner(state, action: PayloadAction<string[]>) {
      state.favoriteSummoner = action.payload;
    },
  },
});

export const localActions = { ...localSlice.actions };

export default localSlice.reducer;
