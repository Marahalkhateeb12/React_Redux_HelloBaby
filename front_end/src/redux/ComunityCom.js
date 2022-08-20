import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComcomments = createAsyncThunk("comcomment/getComcomments", async () => {
  const api = await fetch('http://127.0.0.1:8000/api/apiCommunityComment');
  const response = await api.json();
  console.log('****')
  console.log(response);
  return response;
});



const comSlice = createSlice({
  name: "comcomment",
  initialState: { status: null, comcomments: [] },
  extraReducers: {
    //get item from api
      [getComcomments.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success fetch data";
      state.comcomments = action.payload;
    },
    [getComcomments.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getComcomments.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },
  },
});

export default comSlice.reducer;
