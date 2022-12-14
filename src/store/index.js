import { configureStore } from "@reduxjs/toolkit";
import fetchTourReducer from "./user/fetchTour";
import addToCartReducer from "./user/addToCartSlice";
import fetchCommentReducer from "./user/commentSlice";
import filterReducer from "./user/sortSlice";
import accountReducer from "./user/register";

const store = configureStore({
  reducer: {
    fetchTourReducer,
    addToCartReducer,
    fetchCommentReducer,
    filterReducer,
    accountReducer,
  },
});
export default store;
