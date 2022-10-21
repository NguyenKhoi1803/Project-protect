import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    select: "",
    day: "",
    button: ""
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    selectFilterChange: (state, action) => {
      state.select = action.payload;
      console.log("selectFilterChange", { state, action });
    },
    buttonFilterChange: (state, action) => {
      state.button = action.payload;
      console.log("selectFilterChange", { state, action });
    },
  },
});

export const { selectFilterChange, searchFilterChange, buttonFilterChange } = filterSlice.actions;

const { reducer: filterReducer } = filterSlice;

export default filterReducer;