import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    select: "",
    day: "",
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    selectFilterChange: (state, action) => {
      state.select = action.payload;
      console.log("selectFilterChange", { state, action });
    },
  },
});

export const { selectFilterChange, searchFilterChange } = filterSlice.actions;

const { reducer: filterReducer } = filterSlice;

export default filterReducer;
