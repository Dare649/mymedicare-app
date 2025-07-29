import { createSlice } from "@reduxjs/toolkit";
import {
    createHqPatient,
    getHqPatient,
    getAllHqPatient
} from "./hq-patient";

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
  createHqPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getAllHqPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getHqPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  status: "idle" | "isLoading" | "succeeded" | "failed";
  partnerPatient: PatientData | null;
  allPartnerPatient: PatientData[];
  error: string | null;
}

const initialState: PatientState = {
  createHqPatientStatus: "idle",
  getAllHqPatientStatus: "idle",
  getHqPatientStatus: "idle",
  status: "idle",
  partnerPatient: null,
  allPartnerPatient: [],
  error: null,
};

const hqPartientSlice = createSlice({
  name: "partnerPatient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Create Partner 
      .addCase(createHqPatient.pending, (state) => {
        state.createHqPatientStatus = "isLoading";
      })
      .addCase(createHqPatient.fulfilled, (state, action) => {
        state.createHqPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
        state.allPartnerPatient.push(action.payload); // optionally push to the list
      })
      .addCase(createHqPatient.rejected, (state, action) => {
        state.createHqPatientStatus = "failed";
        state.error = action.error.message || "Failed to create partner";
      })

      // get partner
      .addCase(getHqPatient.pending, (state) => {
        state.getHqPatientStatus = "isLoading";
      })
      .addCase(getHqPatient.fulfilled, (state, action) => {
        state.getHqPatientStatus = "succeeded";
        state.partnerPatient = action.payload;
      })
      .addCase(getHqPatient.rejected, (state, action) => {
        state.getHqPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partner"
      })

      // get all partner
      .addCase(getAllHqPatient.pending, (state) => {
        state.getAllHqPatientStatus = "isLoading";
      })
      .addCase(getAllHqPatient.fulfilled, (state, action) => {
        state.getAllHqPatientStatus = "succeeded";
        state.allPartnerPatient = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAllHqPatient.rejected, (state, action) => {
        state.getAllHqPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partners list."
      })
  },
});

export default hqPartientSlice.reducer;
