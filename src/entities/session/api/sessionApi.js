import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PublicApi } from 'src/utils/axios';

export const sessionApi = {
    signin: createAsyncThunk(
        'auth/sign-in',
        async (form, { rejectWithValue }) => {
            try {
                const res = await PublicApi.post('users/email/sign-in/', form);
                return res.data;
            } catch (err) {
                return rejectWithValue(err.response.data.message);
            }
        }
    ),
    signupUser: createAsyncThunk(
        'auth/sign-up',
        async (form, { rejectWithValue }) => {
            try {
                const res = await PublicApi.post('sign-up/user/');
                return res.data;
            } catch (err) {
                return rejectWithValue(err.response.data.message);
            }
        }
    ),
    signupUniversity: createAsyncThunk(
        'auth/sign-up',
        async (form, { rejectWithValue }) => {
            try {
                const res = await PublicApi.post('sign-up/university/');
                return res.data;
            } catch (err) {
                return rejectWithValue(err.response.data.message);
            }
        }
    )
};
