import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants";

export const addTour = createAsyncThunk(
    "tour/addTour",
    async (payload) => {
        console.log("addTour ~ payload", payload);
        const res = await axios
            .post(URL, payload)
            .then((result) => {
                console.log("addTour ~ result", result);
            })
            .catch((error) => {
                console.log("addTour ~ error", error);
            });
        return res;
    }
);

const addTourSlice = createSlice({
    name: 'tour',
    initialState: { tour: [] },
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(addTour.pending, (state, action) => {
                console.log("addTour.pending", { state, action });
            })
            .addCase(addTour.fulfilled, (state, action) => {
                console.log("addTour.fulfilled", { state, action });
                state.todos = action.payload;
            })
            .addCase(addTour.rejected, (state, action) => {
                console.log("addTour.rejected", { state, action });
            })
    },
});

const { reducer: addTourReducer } = addTourSlice;
export default addTourReducer;

