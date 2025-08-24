import { createSlice } from "@reduxjs/toolkit";
import {
    createBranchPatient,
    getBranchPatient,
    getAllBranchPatient,
    createBranchPatientBulk,
    getAllBranchRiskPatient
} from "./branch-patient";


interface RmTracking {
  blood_pressure: "yes" | "no";
  blood_sugar: "yes" | "no";
  weight: "yes" | "no";
  food_log: "yes" | "no";
}


interface BranchPatientData {
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
  mobile_app_patient?: string;
  rm_tracking?: RmTracking;
}

interface BranchPatientState {
  createBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  createBranchPatientBulkStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getAllBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getAllBranchRiskPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  getBranchPatientStatus: "idle" | "isLoading" | "succeeded" | "failed";
  status: "idle" | "isLoading" | "succeeded" | "failed";
  branchPatient: BranchPatientData | null;
  allBranchPatient: BranchPatientData[];
  error: string | null;
}

const initialState: BranchPatientState = {
  createBranchPatientStatus: "idle",
  createBranchPatientBulkStatus: "idle",
  getAllBranchPatientStatus: "idle",
  getAllBranchRiskPatientStatus: "idle",
  getBranchPatientStatus: "idle",
  status: "idle",
  branchPatient: null,
  allBranchPatient: [],
  error: null,
};

const branchPartnerPartientSlice = createSlice({
  name: "branchPatient",
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
        state.branchPatient = action.payload;
        state.allBranchPatient.push(action.payload); // optionally push to the list
      })
      .addCase(createBranchPatient.rejected, (state, action) => {
        state.createBranchPatientStatus = "failed";
        state.error = action.error.message || "Failed to create partner";
      })

      // Create Partner bulk 
      .addCase(createBranchPatientBulk.pending, (state) => {
        state.createBranchPatientBulkStatus = "isLoading";
      })
      .addCase(createBranchPatientBulk.fulfilled, (state, action) => {
        state.createBranchPatientBulkStatus = "succeeded";
        state.branchPatient = action.payload;
        state.allBranchPatient.push(action.payload); // optionally push to the list
      })
      .addCase(createBranchPatientBulk.rejected, (state, action) => {
        state.createBranchPatientBulkStatus = "failed";
        state.error = action.error.message || "Failed to create partner";
      })

      // get partner
      .addCase(getBranchPatient.pending, (state) => {
        state.getBranchPatientStatus = "isLoading";
      })
      .addCase(getBranchPatient.fulfilled, (state, action) => {
        state.getBranchPatientStatus = "succeeded";
        state.branchPatient = action.payload;
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
        state.allBranchPatient = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAllBranchPatient.rejected, (state, action) => {
        state.getAllBranchPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partners list."
      })
      
      // get all partner at risk
      .addCase(getAllBranchRiskPatient.pending, (state) => {
        state.getAllBranchRiskPatientStatus = "isLoading";
      })
      .addCase(getAllBranchRiskPatient.fulfilled, (state, action) => {
        state.getAllBranchRiskPatientStatus = "succeeded";

        // ✅ Ensure we extract patients_at_risk array from payload.data
        const patients =
          action.payload?.data?.patients_at_risk || action.payload || [];

        state.allBranchPatient = Array.isArray(patients) ? patients : [];
      })
      .addCase(getAllBranchRiskPatient.rejected, (state, action) => {
        state.getAllBranchRiskPatientStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve partners list."
      })
  },
});

export default branchPartnerPartientSlice.reducer;
