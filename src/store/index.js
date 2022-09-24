import { configureStore } from "@reduxjs/toolkit";
import addTourReducer from "./admin/addTourSlice";
import fetchTourReducer from "./user/fetchTour";
import addToCartReducer from "./user/addToCartSlice";


const store = configureStore({
  reducer: {
    addTourReducer,
    fetchTourReducer,
    addToCartReducer,
    // searchReducer,
  },
});
export default store;
