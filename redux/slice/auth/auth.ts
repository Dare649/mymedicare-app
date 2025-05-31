import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstance";

// Sign In
export const signIn = createAsyncThunk(
    "auth/signIn",
    async (data: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/login", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to sign in, try again.");
        }
    }
);


// get signed in user
export const getSignedInUser = createAsyncThunk(
    "auth/getSignedInUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/api/v1/auth/signed_in_user");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to get signed in user, try again.");
        }
    }
);

// Sign Up
export const signUp = createAsyncThunk(
    "auth/signUp",
    async (
        data: {
            name: string,
            email: string,
            role: string,
            country_code: string,
            phone: string,
            password: string,
            speciality_id: string
        },
        { rejectWithValue }
    ) => {
        try {
            const response = await axiosInstance.post("/api/register", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to sign up, try again.");
        }
    }
);

// Verify OTP
export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async (data: { email: string; otp: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/v1/auth/verify_otp", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to verify OTP, try again.");
        }
    }
);

// Resend OTP
export const resendOtp = createAsyncThunk(
    "auth/resendOtp",
    async (data: { email: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/v1/auth/resend_otp", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to resend OTP, try again.");
        }
    }
);


// get doctor speciality
export const getDoctorSpeciality = createAsyncThunk(
    "auth/getDoctorSpeciality",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("api/get_specialities");
            return response.data.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);
