import { createSlice } from "@reduxjs/toolkit";
import {
    createPatient,
    getPatient,
    getAllPatient
} from "./patient";

interface PatientData {
  id: number;
  name: string;
  email: string;
  phone: string;
  sex: string;
  dob: string;
  country_code: string;
  type: string;
  created_at: string;
  user_id: number;
  uuid: string;
  website: string;
  status: string;
  role: string;
  balance: string;
}

interface PatientState {
  createPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getAllPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  status: "idle" | "isLoading" | "succeeded" | "failed";
  partnerPatient: PatientData | null;
  allPartnerPatient: PatientData[];
  error: string | null;
}

const initialState: PatientState = {
  createPatientStatus: "idle",
  getAllPatientStatus: "idle",
  getPatientStatus: "idle",
  status: "idle",
  partnerPatient: null,
  allPartnerPatient: [],
  error: null,
};

const partnerPartientSlice = createSlice({
  name: "partnerPatient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Create Partner 
      .addCase(createPatient.pending, (state) => {
        state.createPatientStatus = "isLoading";
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.createPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
        state.allPartnerPatient.push(action.payload); // optionally push to the list
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.createPatientStatus = "failed";
        state.error = action.error.message || "Failed to create partner";
      })

      // get partner
      .addCase(getPatient.pending, (state) => {
        state.getPatientStatus = "isLoading";
      })
      .addCase(getPatient.fulfilled, (state, action) => {
        state.getPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
      })
      .addCase(getPatient.rejected, (state, action) => {
        state.getPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partner"
      })

      // get all partner
      .addCase(getAllPatient.pending, (state) => {
        state.getAllPatientStatus = "isLoading";
      })
      .addCase(getAllPatient.fulfilled, (state, action) => {
        state.getAllPatientStatus = "succeeded";
        state.allPartnerPatient = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAllPatient.rejected, (state, action) => {
        state.getAllPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partners list."
      })
  },
});

export default partnerPartientSlice.reducer;
