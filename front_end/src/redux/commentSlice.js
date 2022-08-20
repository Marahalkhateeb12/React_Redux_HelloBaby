import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";


export const getComments = createAsyncThunk("comment/getComments", async (id) => {
  const api = await fetch(`http://127.0.0.1:8000/api/apicomment/${id}`);
  const response = await api.json();
  // console.log(response);
  return response;
});



export const addComment = createAsyncThunk(
  "comment/addComment",
  async (data, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addComment",
      data
    );
    
// const add = await response.data;
// console.log('add',add)
    if (response.status == 200) {
      Swal.fire({
        title: "comment",
        text: "Pending Admin Accept",
        type: "success",
        confirmButtonColor: "#ea512e"
      });
    }
    return response.data;
    //  return add;
  }
 
);
///////update
export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async (comment, thunkAPI) => {
    // const id = args.id;
    // console.log(args, id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/updateComment/${comment.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      }
    );
      
    if (response.ok) {
      Swal.fire({
        title: "comment",
        text: "Has been updated Successfully",
        type: "success",
      });
    }
    const res = await response.json();
     console.log(res);
    thunkAPI.dispatch(getComments(res.post_id_comment));
   
    return res;
  }
);















///delete
export const deleteComment = createAsyncThunk(
  "comment/deleteComments",
  async (id) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/deleteComment/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      Swal.fire({
        title: "comment",
        text: "Has been deleted Successfully",
        type: "success",
        confirmButtonColor: "#ea512e"
      });
    }
    const res = response.json();
    return res;
  }
);


/////////////////////////////////////////////////////////////////////////////////////
const commentSlice = createSlice({
  name: "comment",
  initialState: { comments: [], status: null },
  extraReducers: {
    //get comment from api
    [getComments.fulfilled]: (state, action) => {
      // console.log(action);
      state.status = "success fetch data";
      state.comments = action.payload;
    },
    [getComments.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getComments.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },

    // addcomment to api

    [addComment.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success send data";
      state.comments.push(action.payload);
    },
    [addComment.pending]: (state) => {
      state.status = "pending send data";
    },
    [addComment.rejected]: (state) => {
      state.status = "rejected send data";
    },

    //update comment in api
    [updateComment.fulfilled]: (state, action) => {
      state.status = "success update data";
      const { id } = action.payload;
      const comment = state.comments.find((comment) => comment.id == id);
      comment.comment = action.payload.comment;
    },
    [updateComment.pending]: (state) => {
      state.status = "pending update data";
    },
    [updateComment.rejected]: (state) => {
      state.status = "rejected update data";
    },

    //delete comment in api
    [deleteComment.fulfilled]: (state, action) => {
      state.status = "success delete data";
      const { id } = action.payload;
      state.comments = state.comments.filter((comment) => comment.id != id);
    },
    [deleteComment.pending]: (state) => {
      state.status = "pending delete data";
    },
    [deleteComment.rejected]: (state) => {
      state.status = "rejected delete data";
    },
  },
});

export default commentSlice.reducer;
