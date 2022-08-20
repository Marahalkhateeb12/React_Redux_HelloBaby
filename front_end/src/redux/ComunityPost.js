import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";


export const getComunityPosts = createAsyncThunk("comunitypost/getComunityPosts",
 async () => {
  const api = await fetch("http://127.0.0.1:8000/api/apiCommunityPost");
  const response = await api.json();

  return response;
});

export const getSingleComunity = createAsyncThunk(
  "comunitypost/getSingleComunity",
  async (id) => {
    const api = await fetch(
      `http://127.0.0.1:8000/api/apiCommunityPost/${id}`
    );
    const response = await api.json();
    // console.log(response);
    return response;
  }
);


export const addComunityPosts = createAsyncThunk(
  "comunitypost/addComunityPosts",
  async (data, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addComunityPost",
      data
    );
    // const add = await response.data;
    // console.log('add',add)
    if (response.status == 200) {
      Swal.fire({
        title: "Post",
        text: "Pending Admin Accept",
        type: "success",
        confirmButtonColor: "#ea512e"
      });
    }
    return response.data;
    //  return add;
  }
);

///////delete
export const deleteComunityPost = createAsyncThunk(
  "comunitypost/deleteComunityPost",
  async (id) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/deleteComunityPost/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
      console.log(response);
    if (response.ok) {
      Swal.fire({
        title: "Post",
        text: "Post Has been Deleted Successfully",
        type: "success",
        confirmButtonColor: "#ea512e"
      });
    }
    const res = response.json();
    return res;
  }
);


export const getComcomments = createAsyncThunk(
  "comunitypost/getComcomments",
  async (id) => {
    const api = await fetch(
      `http://127.0.0.1:8000/api/apiCommunityComment/${id}`
    );
    const response = await api.json();
    // console.log(response)
    return response;
  }
);

export const addComunityComment = createAsyncThunk(
  "comunitypost/addComunityComment",
  async (data, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addComunityComment",
      data
    );
    // const add = await response.data;
    // console.log('add',add)
    if (response.status == 200) {
      Swal.fire({
        title: "Comment",
        text: "Pending Admin Accept",
        type: "success",
        confirmButtonColor: "#ea512e"
      });
    }
    return response.data;
    //  return add;
  }
);




const postSlice = createSlice({
  name: "comunitypost",
  initialState: {
    status: null,
    comunityposts: [],
    comcomments: [],
    singlecompost: [],
  },
  extraReducers: {
    //get comunitypost from api
    [getComunityPosts.fulfilled]: (state, action) => {
      //   console.log(action);
      state.status = "success fetch data";
      state.comunityposts = action.payload;
    },
    [getComunityPosts.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getComunityPosts.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },

    // addComunityPosts to api

    [addComunityPosts.fulfilled]: (state, action) => {
      // console.log(action);
      state.status = "success send data";
      state.comunityposts.push(action.payload);
    },
    [addComunityPosts.pending]: (state) => {
      state.status = "pending send data";
    },
    [addComunityPosts.rejected]: (state) => {
      state.status = "rejected send data";
    },
    //update comment in api
    // [getComunityPosts.fulfilled]: (state, action) => {
    //   state.status = "success update data";
    //   const { id } = action.payload;
    //   const comunityposts = state.comunityposts.find(
    //     (comunitypost) => comunitypost.id == id
    //   );
    //   comunityposts.comunitypost = action.payload.comunitypost;
    // },
    // [getComunityPosts.pending]: (state) => {
    //   state.status = "pending update data";
    // },
    // [getComunityPosts.rejected]: (state) => {
    //   state.status = "rejected update data";
    // },

    //delete comunitypost in api
    [deleteComunityPost.fulfilled]: (state, action) => {
      state.status = "success delete data";
      const { id } = action.payload;
      state.comunityposts = state.comunityposts.filter(
        (comunitypost) => comunitypost.id != id
      );
    },
    [deleteComunityPost.pending]: (state) => {
      state.status = "pending delete data";
    },
    [deleteComunityPost.rejected]: (state) => {
      state.status = "rejected delete data";
    },
/////////
    [getComcomments.fulfilled]: (state, action) => {
      // console.log(action);
      state.status = "success fetch data";
      state.comcomments = action.payload;
    },
    [getComcomments.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getComcomments.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },

    [addComunityComment.fulfilled]: (state, action) => {
      // console.log(action);
      state.status = "success send data";
      state.comunityposts.push(action.payload);
    },
    [addComunityComment.pending]: (state) => {
      state.status = "pending send data";
    },
    [addComunityComment.rejected]: (state) => {
      state.status = "rejected send data";
    },

    ///single
    [getSingleComunity.fulfilled]: (state, action) => {
      state.status = "success fetch data";
      state.singlecompost = action.payload;
    },
    [getSingleComunity.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getSingleComunity.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },
  },
});

export default postSlice.reducer;
