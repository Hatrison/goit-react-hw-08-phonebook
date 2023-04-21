import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logoutUser,
  fetchCurrentUSer,
} from './operations';

const contactsInitialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUSer.fulfilled, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
