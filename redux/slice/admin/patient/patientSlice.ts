import { createSlice } from "@reduxjs/toolkit";
import {
    getAllPatient,
    getPatient   
} from "./patient";


interface Address {
  street_address: string;
  city: string;
  state: string;
  zip_code: string | null;
  country: string;
}

interface PatientData {
  id: number;
  user_id: number;
  uuid: string;
  name: string;
  email: string;
  country_code: string;
  phone: string;
  last_login: string;         
  active_status: string;
  status: string;              
  created_at: string;          
  sex: string;
  profile_picture: string;
  date_of_birth: string;       
  age: number;
  special_needs: string[];
  allergies: string[];
  chronic_conditions: string[];
  address: Address;
  prescription_count: number;
  consultation_count: number;
}

interface PatientState {
    getAllPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
    getPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
    status: "idle" | "isLoading" | "succeeded" | "failed";
    patient: PatientData | null;
    allPatient: PatientData[];
    error: string | null;
};


const initialState: PatientState = {
    getAllPatientStatus: "idle",
    getPatientStatus: "idle",
    status: "idle",
    patient: null,
    allPatient: [],
    error: null,
};


const adminPatientSlice = createSlice({
    name: "adminPatient",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder

        // get patient
        .addCase(getPatient.pending, (state) => {
            state.getPatientStatus = "isLoading";
        })
        .addCase(getPatient.fulfilled, (state, action) => {
            state.getPatientStatus = "succeeded";
            state.patient = action.payload;
        })
        .addCase(getPatient.rejected, (state, action) => {
            state.getPatientStatus = "failed";
            state.error = action.error.message ?? "Failed to retrieve patient"
        })

        // get all patient
        .addCase(getAllPatient.pending, (state) => {
            state.getAllPatientStatus = "isLoading";
        })
        .addCase(getAllPatient.fulfilled, (state, action) => {
            state.getAllPatientStatus = "succeeded";
            state.allPatient = Array.isArray(action.payload) ? action.payload : [];
        })
        .addCase(getAllPatient.rejected, (state, action) => {
            state.getAllPatientStatus = "failed";
            state.error = action.error.message ?? "Failed to retrieve partners list."
        })
    },
});


export default adminPatientSlice.reducer;
