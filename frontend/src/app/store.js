import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import tickeReducer from "../features/ticket/ticketSlice"

export const store = configureStore({
  reducer: {
auth:authReducer,
tickets:tickeReducer
  },
});
