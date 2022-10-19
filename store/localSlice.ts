import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LocalState {
  searchHistory: string[];
  favoriteSummoner: string[];
}

const initialState: LocalState = {
  searchHistory: [],
  favoriteSummoner: [],
};

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setSearchHistory(_state, action: PayloadAction<string[]>) {
      const state = _state;
      state.searchHistory = action.payload;
    },
    setFavoriteSummoner(_state, action: PayloadAction<string[]>) {
      const state = _state;
      state.favoriteSummoner = action.payload;
    },
  },
});

export const localActions = { ...localSlice.actions };

export default localSlice.reducer;
