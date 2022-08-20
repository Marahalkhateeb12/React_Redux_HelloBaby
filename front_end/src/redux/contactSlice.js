import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";



export const addContact = createAsyncThunk(
  "contact/addContact",
  async (args, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addContact",
      args
    );

    if (response.status == 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact Has been sent Successfully",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: "#ea512e"
      });
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: { contact: [], status: null },
  extraReducers: {
    //addcontact to api

    [addContact.fulfilled]: (state, action) => {
      state.status = true;
      state.contact.push(action.payload);
    },
    [addContact.pending]: (state, action) => {
      state.status = false;
    },
    [addContact.rejected]: (state, action) => {
      state.status = null;
    },
  },
});

export default contactSlice.reducer;
