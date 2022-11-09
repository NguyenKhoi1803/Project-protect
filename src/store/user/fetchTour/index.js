import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_TOUR } from "../../../constants/index";

export const addTour = createAsyncThunk(
  "tour/addTour",
  async (payload, store) => {
    console.log("addTour ~ payload", payload);
    const res = await axios
      .post(URL_TOUR, payload)
      .then((result) => {
        console.log("addTour ~ result", result);
        store.dispatch(fetchTour());
      })
      .catch((error) => {
        console.log("addTour ~ error", error);
      });
    return res;
  }
);

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

export const patchQuantity = createAsyncThunk(
  "tour/patchQuantity",
  async (payload, store) => {
    const res = await axios
      .patch(`${URL_TOUR}/${payload.id}`, {
        quantity: payload.quantity,
      })
      .then((result) => {
        console.log("get ~ result", result);
        store.dispatch(fetchTour());
        return result.data;
      })
      .catch((error) => {
        console.log("get ~ error", error);
      });
    return res;
  }
);

const tourSlice = createSlice({
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
      })
      .addCase(fetchTour.pending, (state, action) => {
        console.log("fetchTour.pending", { state, action });
      })

      .addCase(fetchTour.fulfilled, (state, action) => {
        console.log("fetchTour.fulfilled ", { state, action });
        state.tours = action.payload;
      })
      .addCase(fetchTour.rejected, (state, action) => {
        console.log("fetchTour.rejected", { state, action });
      })

      .addCase(patchQuantity.pending, (state, action) => {
        console.log("patchQuantity.pending", { state, action });
      })

      .addCase(patchQuantity.fulfilled, (state, action) => {
        console.log("patchQuantity.fulfilled ", { state, action });
        state.tours = action.payload;
      })
      .addCase(patchQuantity.rejected, (state, action) => {
        console.log("patchQuantity.rejected", { state, action });
      });
  },
});

export const { update } = tourSlice.actions;

const { reducer: fetchTourReducer } = tourSlice;

export default fetchTourReducer;
