import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstance";

interface Patient {
    name : string;
    email : string;
    phone : string;
    country_code : string;
}


// create patient
export const createPatient = createAsyncThunk(
    "patient/createPatient",
    async(data: Patient, { rejectWithValue}) => {
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
export const getAllPatient = createAsyncThunk(
    "patient/getAllPatient",
    async (_, { rejectWithValue}) => {
        try {
            const res = await axiosInstance.get('/api/partner/get_referred');
            return res.data.data;
        } catch (error: any) {
            return rejectWithValue({
                message: error.res?.message
            });
        }
    }
);


// get a partner
export const getPatient = createAsyncThunk(
    "patient/getPatient",
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