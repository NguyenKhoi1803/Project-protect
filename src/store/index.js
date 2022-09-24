import { configureStore } from "@reduxjs/toolkit";
import addTourReducer from "./admin/addTourSlice";
import tourSlice from "./user";

const store = configureStore({
    reducer: {
        addTourReducer,
        tour : tourSlice.reducer,
    },
});
export default store;