import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../constans";

export const fetchTour = createAsyncThunk("tour/fetchTour", async () => {
  const res = await axios
    .get(URL)
    .then((result) => {
      console.log("await-axios.get ~ result", result);
      return result.data;
    })
    .catch((error) => {
      console.log("await-axios.get ~ error", error);
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
        console.log("fetchTour.fulfilled", { state, action });
        state.todos = action.payload;
      })
      .addCase(fetchTour.rejected, (state, action) => {
        console.log("fetchTour.rejected", { state, action });
      });
  },
});

export default tourSlice;
