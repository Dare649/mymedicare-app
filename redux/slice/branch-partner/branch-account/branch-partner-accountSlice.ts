import { createSlice } from "@reduxjs/toolkit";
import {
    getBranchPartner,
    updateBranchPartner
} from "./branch-partner-account";

interface BranchPartnerData {
  id: number;
  uuid: number;
  name: string;
  website: string;
  phone: string;
  referral_code: string;
  address: {
    street_address: string;
    city: string;
    state: string;
    country: string;
  };
  contact_person: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country_code: string;
    position: string;
  };
  [key: string]: any;
}


interface HqPartnerState {
    getBranchPartnerStatus: "idle" | "isLoading" | "succeeded" | "failed";
    updateBranchPartnerStatus: "idle" | "isLoading" | "succeeded" | "failed";
    status: "idle" | "isLoading" | "succeeded" | "failed";
    hqPartner: BranchPartnerData | null;
    allHqPartner: BranchPartnerData[];
    error: string | null;
}


const initialState: HqPartnerState = {
    getBranchPartnerStatus: "idle",
    updateBranchPartnerStatus: "idle",
    status: "idle",
    hqPartner: null,
    allHqPartner: [],
    error: null,
}


const hqPartnerSlice = createSlice({
    name: "hqPartner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // update hq partner
        .addCase(updateBranchPartner.pending, (state) => {
            state.updateBranchPartnerStatus = "isLoading";
        })
        .addCase(updateBranchPartner.fulfilled, (state, action) => {
            state.updateBranchPartnerStatus = "succeeded";
            state.hqPartner = action.payload;
            state.allHqPartner.push(action.payload); 
        })
        .addCase(updateBranchPartner.rejected, (state, action) => {
            state.updateBranchPartnerStatus = "failed";
            state.error = action.error.message || "Failed to update hq partner";
        })


        // get partner
        .addCase(getBranchPartner.pending, (state) => {
        state.getBranchPartnerStatus = "isLoading";
        })
        .addCase(getBranchPartner.fulfilled, (state, action) => {
        state.getBranchPartnerStatus = "succeeded";
        state.hqPartner = action.payload;
        })
        .addCase(getBranchPartner.rejected, (state, action) => {
        state.getBranchPartnerStatus = "failed";
        state.error = action.error.message ?? "Failed to retrieve hq partner"
        })
    },
})

export default hqPartnerSlice.reducer;