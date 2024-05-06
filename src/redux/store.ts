import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    jdData: dataSlice, // Set up dataSlice reducer
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
