import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_TOUR } from "../../../constants";

export const addTour = createAsyncThunk("tour/addTour", async (payload) => {
  console.log("addTour ~ payload", payload);
  const res = await axios
    .post(URL_TOUR, payload)
    .then((result) => {
      console.log("addTour ~ result", result);
    })
    .catch((error) => {
      console.log("addTour ~ error", error);
    });
  return res;
});

const addTourSlice = createSlice({
  name: "tour",
  initialState: { tours: [] },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(addTour.pending, (state, action) => {
        console.log("addTour.pending", { state, action });
      })
      .addCase(addTour.fulfilled, (state, action) => {
        console.log("addTour.fulfilled", { state, action });
        state.tours = action.payload;
      })
      .addCase(addTour.rejected, (state, action) => {
        console.log("addTour.rejected", { state, action });
      });
  },
});

const { reducer: addTourReducer } = addTourSlice;
export default addTourReducer;
