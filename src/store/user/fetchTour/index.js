import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_TOUR } from "../../../constants/index";

export const fetchTour = createAsyncThunk("tour/fetchTour", async () => {
  const res = await axios
    .get(URL_TOUR)
    .then((result) => {
      console.log("get ~ result", result);
      return result.data;
    })
    .catch((error) => {
      console.log("get ~ error", error);
    });
  return res;
});

const tourSlice = createSlice({
  name: "tour",
  initialState: { tours: [] },

  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchTour.pending, (state, action) => {
        console.log("fetchTour.pending", { state, action });
      })

      .addCase(fetchTour.fulfilled, (state, action) => {
        console.log("fetchTour.fulfilled ", { state, action });
        state.tours = action.payload;
      })
      .addCase(fetchTour.rejected, (state, action) => {
        console.log("fetchTour.rejected", { state, action });
      });
  },
});

const { reducer: fetchTourReducer } = tourSlice;

export default fetchTourReducer;
