import { configureStore } from "@reduxjs/toolkit";
import addTourReducer from "./admin/addTourSlice";
import fetchTourReducer from "./user/fetchTour";
import addToCartReducer from "./user/addToCartSlice";
import fetchCommentReducer from "./user/commentSlice";

const store = configureStore({
  reducer: {
    addTourReducer,
    fetchTourReducer,
    addToCartReducer,
    fetchCommentReducer,
  },
});
export default store;
