import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode(_state) {
      const state = _state;
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(_state, action: PayloadAction<boolean>) {
      const state = _state;
      state.isDarkMode = action.payload;
    },
  },
});

export const themeActions = { ...themeSlice.actions };

export default themeSlice.reducer;
