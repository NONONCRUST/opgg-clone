import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: '',
  email: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(_state, action: PayloadAction<{ name: string; email: string }>) {
      const state = _state;
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    logout(_state) {
      const state = _state;
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice.reducer;
