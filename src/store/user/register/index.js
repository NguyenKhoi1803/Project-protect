import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_ACCOUNT } from "../../../constants";

export const addAccount = createAsyncThunk(
  "account/addAccount",
  async (payload, store) => {
    const res = await axios
      .post(URL_ACCOUNT, payload)
      .then((result) => {
        console.log("get ~ result ~ cart", result);
        store.dispatch(fetchAccount());
      })
      .catch((error) => {
        console.log("get ~ result ~ cart", error);
      });
    return res;
  }
);
export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const res = await axios
      .get(URL_ACCOUNT)
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

export const updateUser = createAsyncThunk(
  "account/updateUser",
  async (payload, store) => {
    const res = await axios
      .patch(`${URL_ACCOUNT}/${payload.id}`, {
        fullname: payload.fullname,
        email: payload.email,
        phone: payload.phone,
      })
      .then((result) => {
        console.log("get ~ result", result);
        store.dispatch(fetchAccount());
        return result.data;
      })
      .catch((error) => {
        console.log("get ~ error", error);
      });
    return res;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: { accounts: [] },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(addAccount.pending, (state, action) => {
        console.log("addAccount.pending", { state, action });
      })

      .addCase(addAccount.fulfilled, (state, action) => {
        console.log("addAccount.fulfilled ", { state, action });
        state.accounts = action.payload;
      })
      .addCase(addAccount.rejected, (state, action) => {
        console.log("addAccount.rejected", { state, action });
      })
      .addCase(fetchAccount.pending, (state, action) => {
        console.log("fetchAccount.pending", { state, action });
      })

      .addCase(fetchAccount.fulfilled, (state, action) => {
        console.log("fetchAccount.fulfilled ", { state, action });
        state.accounts = action.payload;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        console.log("fetchAccount.rejected", { state, action });
      })
      .addCase(updateUser.pending, (state, action) => {
        console.log("updateUser.pending", { state, action });
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("updateUser.fulfilled ", { state, action });
        state.accounts = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log("updateUser.rejected", { state, action });
      });
  },
});

const { reducer: accountReducer } = accountSlice;

export default accountReducer;
