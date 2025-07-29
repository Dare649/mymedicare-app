import { createSlice } from "@reduxjs/toolkit";
import {
    createBranchPatient,
    getBranchPatient,
    getAllBranchPatient
} from "./branch-patient";

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
  createBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getAllBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  status: "idle" | "isLoading" | "succeeded" | "failed";
  partnerPatient: PatientData | null;
  allPartnerPatient: PatientData[];
  error: string | null;
}

const initialState: PatientState = {
  createBranchPatientStatus: "idle",
  getAllBranchPatientStatus: "idle",
  getBranchPatientStatus: "idle",
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
      .addCase(createBranchPatient.pending, (state) => {
        state.createBranchPatientStatus = "isLoading";
      })
      .addCase(createBranchPatient.fulfilled, (state, action) => {
        state.createBranchPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
        state.allPartnerPatient.push(action.payload); // optionally push to the list
      })
      .addCase(createBranchPatient.rejected, (state, action) => {
        state.createBranchPatientStatus = "failed";
        state.error = action.error.message || "Failed to create partner";
      })

      // get partner
      .addCase(getBranchPatient.pending, (state) => {
        state.getBranchPatientStatus = "isLoading";
      })
      .addCase(getBranchPatient.fulfilled, (state, action) => {
        state.getBranchPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
      })
      .addCase(getBranchPatient.rejected, (state, action) => {
        state.getBranchPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partner"
      })

      // get all partner
      .addCase(getAllBranchPatient.pending, (state) => {
        state.getAllBranchPatientStatus = "isLoading";
      })
      .addCase(getAllBranchPatient.fulfilled, (state, action) => {
        state.getAllBranchPatientStatus = "succeeded";
        state.allPartnerPatient = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAllBranchPatient.rejected, (state, action) => {
        state.getAllBranchPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partners list."
      })
  },
});

export default partnerPartientSlice.reducer;
