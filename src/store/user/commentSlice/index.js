import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_COMMENT } from "../../../constants/index";

export const fetchComment = createAsyncThunk(
  "comment/fetchComment",
  async () => {
    const res = await axios
      .get(URL_COMMENT)
      .then((result) => {
        console.log("get ~ result", result);
        return result.data;
      })
      .catch((error) => {
        console.log("get ~ error", error);
      });
    return res;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: { comments: [] },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchComment.pending, (state, action) => {
        console.log("fetchComment.pending", { state, action });
      })

      .addCase(fetchComment.fulfilled, (state, action) => {
        console.log("fetchComment.fulfilled ", { state, action });
        state.comments = action.payload;
      })
      .addCase(fetchComment.rejected, (state, action) => {
        console.log("fetchComment.rejected", { state, action });
      });
  },
});

const { reducer: fetchCommentReducer } = commentSlice;

export default fetchCommentReducer;
