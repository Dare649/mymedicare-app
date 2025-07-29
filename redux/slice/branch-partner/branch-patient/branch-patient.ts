import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstance";

interface BranchPatient {
    name : string;
    email : string;
    phone : string;
    country_code : string;
}


// create patient
export const createBranchPatient = createAsyncThunk(
    "branch-patient/createBranchPatient",
    async(data: BranchPatient, { rejectWithValue}) => {
        try {
            const res = await axiosInstance.post("/api/partner/add_patient", data);
            return res.data;
        } catch (error: any) {
            return rejectWithValue({
                message: error.res?.data?.message
            })
        }
    }
);


// get all patient
export const getAllBranchPatient = createAsyncThunk(
    "branch-patient/getAllBranchPatient",
    async (_, { rejectWithValue}) => {
        try {
            const res = await axiosInstance.get('/api/partner/get_referred/patient');
            return res.data.data;
        } catch (error: any) {
            return rejectWithValue({
                message: error.res?.message
            });
        }
    }
);


// get a partner
export const getBranchPatient = createAsyncThunk(
    "branch-patient/getBranchPatient",
    async (uuid: string, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get(`/api/partner/${uuid}/patient_details`);
            return res.data.data; 
        } catch (error: any) {
            return rejectWithValue({
                message: error.res?.message
            });
        }
    }
)