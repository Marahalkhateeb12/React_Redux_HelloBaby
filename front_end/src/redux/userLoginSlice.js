import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from 'sweetalert2';



export const check = createAsyncThunk(
    async (item , thunkAPI)=>{
 
        const response = await axios.post('http://127.0.0.1:8000/api/login',item);
        if(response.status === 200){
            alert("login Successfully");
        }
        return response.data;
    }
);




export const addUser = createAsyncThunk(
    async (item , thunkAPI)=>{
 
        // const response = await axios.post('http://127.0.0.1:8000/api/register',item);
        
        // if(response.status === 200){
        //     alert("register Successfully");
        // }
        // return response.data;

        axios.post(`http://127.0.0.1:8000/api/register`, { item })
        .then(res => {
          console.log(res);
          console.log(res.data);
          console.log("111111111111111111111111");

        })
    }
);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userLoginSlice = createSlice({
    name:'user',
    initialState:{items:[] , status:null},
    extraReducers:{

         //register user to api

         [addUser.fulfilled]:(state , action)=>{
            state.status = 'success send data';
            state.items.push(action.payload);
            

        },
        [addUser.pending]:(state  )=>{
            state.status = 'pending send data';
            
        },
        [addUser.rejected]:(state )=>{
            state.status = 'rejected send data';
        },





        //check user from api

        [check.fulfilled]:(state , action)=>{
            state.status = 'success fetch data';
            state.items.push(action.payload);

        },
        [check.pending]:(state  )=>{
            state.status = 'pending  fetch data';
            
        },
        [check.rejected]:(state )=>{
            state.status = 'rejected  fetch data';
        },






       

    }
})

export default userLoginSlice.reducer;