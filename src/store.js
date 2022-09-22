import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./slices/tourSlice";

const store = configureStore({
  reducer: {
    tour: tourSlice.reducer,
  },
});

export default store;
