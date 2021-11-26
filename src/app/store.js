import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
// userSlice, userReducer

// export configureStore not the store so ...
// export const store = configureStore({
export const store = configureStore({
  reducer: {
    // counter to user
    user: userReducer,
    // change to userReducer
  },
});
