import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface searchState {
  championSearchFilter: string;
}

const initialState: searchState = {
  championSearchFilter: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setChampionSearchFilter(state, action: PayloadAction<string>) {
      state.championSearchFilter = action.payload;
    },
  },
});

export const searchActions = { ...searchSlice.actions };

export default searchSlice.reducer;
