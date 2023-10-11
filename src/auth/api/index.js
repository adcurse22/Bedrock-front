import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicApi } from "src/utils/axios";

export const signin = createAsyncThunk(
    'auth/sign-in',
    async(form, { rejectWithValue }) => {
        try {
            // const res = await PublicApi.post('', form);
            const res = await new Promise((res, rej) => {
                setTimeout(() => {
                    res({ data: { token: 'sometoken' } });
                }, 1000);
            });
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }

    }
);