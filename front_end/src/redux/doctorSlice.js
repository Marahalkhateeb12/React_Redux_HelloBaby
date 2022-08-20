import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from 'sweetalert2';



export const getDoctors = createAsyncThunk(
    'doctor/getDoctors',
    async () => {
        const api = await fetch('http://127.0.0.1:8000/api/doctors');
        const response = await api.json();
        //console.log(response);
        return response;
    }
);

export const getDoctorDetail = createAsyncThunk(
    'doctor/getDoctorDetail',
    async (id) => {
        const api = await fetch(`http://127.0.0.1:8000/api/doctorDetails/${id}`);
        const response = await api.json();
        console.log(response);
        return response;
    }
);


// export const getDoctorDetail = createAsyncThunk(
//     'doctor/getDoctorDetail',
//     async (args) => {
//         const id = 1;
//         const api = await fetch(`http://127.0.0.1:8000/api/doctorDetails/2`);
//         const response = await api.json();
//         console.log(response);
//         return response;
        
//         //.filter(doc => doc.id == id)
//     }
// );

export const updateDoctorDetails = createAsyncThunk(
    'doctor/updateDoctorDetails',
    async (args) => {

        const id = args.id;
        const response = await fetch(`http://127.0.0.1:8000/api/updateDoctorDetails/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: args.name,
                description: args.description,
                email: args.email,
                image: args.image,
                clinic_address: args.clinic_address,
                clinic_mobile: args.clinic_mobile,
                experience: args.experience,
                specialization: args.specialization

            }),
        })

        if (response.ok) {
            Swal.fire({
                title: "Doctor",
                text: "Has been updated Successfully",
                type: "success"
            });
        }
        const res = response.json();
        return res;
    }
);

const doctorSlice = createSlice({
    name: 'doctor',
    initialState: { doctors: [], status: null },
    extraReducers: {
        //get doctors from api
        [getDoctors.fulfilled]: (state, action) => {
            state.status = 'success fetch data';
            state.doctors = action.payload;

        },
        [getDoctors.pending]: (state) => {
            state.status = 'pending fetch data';

        },
        [getDoctors.rejected]: (state) => {
            state.status = 'rejected fetch data';
        },

       // get one doctor from api
        [getDoctorDetail.fulfilled]: (state, action) => {
            state.status = 'success fetch data';
            state.doctors= action.payload;

        },
        [getDoctorDetail.pending]: (state) => {
            state.status = 'pending fetch data';

        },
        [getDoctorDetail.rejected]: (state) => {
            state.status = 'rejected fetch data';
        },


       // update doctor in api
        [updateDoctorDetails.fulfilled]: (state, action) => {
            state.status = 'success update data';
            const { id } = action.payload;
            const doctor = state.doctors.find((doctor) => doctor.id == id);
            doctor.name = action.payload.name;
            doctor.description = action.payload.description;
            doctor.image = action.payload.image;
            doctor.email = action.payload.email;
            doctor.clinic_address = action.payload.clinic_address;
            doctor.clinic_mobile = action.payload.clinic_mobile;
            doctor.experience = action.payload.experience;
            doctor.specialization = action.payload.specialization;

        },
        [updateDoctorDetails.pending]: (state) => {
            state.status = 'pending update data';

        },
        [updateDoctorDetails.rejected]: (state) => {
            state.status = 'rejected update data';
        },



    }
})

export default doctorSlice.reducer;