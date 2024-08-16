import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../futures/auth/authSlice'
export const store = configureStore({
  reducer: {
    auth : authReducer
  },
});
