import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_CART } from "../../../constants";

export const addToCart = createAsyncThunk(
  "carts/addToCart",
  async (payload) => {
    const res = await axios
      .post(URL_CART, payload)
      .then((result) => {
        console.log("get ~ result", result);
      })
      .catch((error) => {
        console.log("get ~ error", error);
      });
    return res;
  }
);

const addToCartSlice = createSlice({
  name: "carts",
  initialState: { carts: [] },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(addToCart.pending, (state, action) => {
        console.log("addToCart.pending", { state, action });
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("addToCart.fulfilled ", { state, action });
        state.carts = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.log("addToCart.rejected", { state, action });
      });
  },
});

const { reducer: addToCartReducer } = addToCartSlice;

export default addToCartReducer;
