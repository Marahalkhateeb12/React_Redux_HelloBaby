import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const api = await fetch("http://127.0.0.1:8000/api/apiposts");
  const response = await api.json();
// console.log(response);
  return response;
});

export const getSinglePosts = createAsyncThunk("post/getSinglePosts", 
async (id) => {
  const api = await fetch(`http://127.0.0.1:8000/api/apiposts/${id}`);
  const response = await api.json();
// console.log(response);
  return response;
});



const postSlice = createSlice({
  name: "post",
  initialState: { singlepost: [], status: null, posts: [] },
  extraReducers: {
    //get item from api
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success fetch data";
      state.posts = action.payload;
    },
    [getPosts.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getPosts.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },

    // ///single post
    [getSinglePosts.fulfilled]: (state, action) => {
      state.status = "success fetch data";
      state.singlepost = action.payload;
    },
    [getSinglePosts.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getSinglePosts.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },


  },
});



export default postSlice.reducer;
