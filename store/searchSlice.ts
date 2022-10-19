import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  championSearchFilter: string;
}

const initialState: SearchState = {
  championSearchFilter: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setChampionSearchFilter(_state, action: PayloadAction<string>) {
      const state = _state;
      state.championSearchFilter = action.payload;
    },
  },
});

export const searchActions = { ...searchSlice.actions };

export default searchSlice.reducer;
