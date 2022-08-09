import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface themeState {
  isDarkMode: boolean;
}

const initialState: themeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
  },
});

export const themeActions = { ...themeSlice.actions };

export default themeSlice.reducer;
