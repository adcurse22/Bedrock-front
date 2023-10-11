import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../api";
import { deleteCookie, getCookie, setCookie } from "../../utils/coockie";

const defineLoginState = () => {
    const token = getCookie('auth-token');
    if (!token) {
        return false;
    }
    // const user = localStorage.getItem('user');
    // if (!user) {
    //     return false;
    // }
    return true;
}

const initialState = {
    isLogged: defineLoginState(),
    user: null,
    status: null,
    error: null
};

const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLogged = false;
            deleteCookie('auth-token');
            localStorage.removeItem('user');
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signin.pending, (state) => {
                state.status = 'loading sign in';
                state.error = null;
                console.log('Fetching...');
            })
            .addCase(signin.fulfilled, (state, { payload }) => {
                state.status = null;
                state.error = null;
                state.isLogged = true;
                setCookie('auth-token', payload.token, 1);
                console.log('Response: ', payload);
            })
            .addCase(signin.rejected, (state, { payload }) => {
                state.status = null;
                state.error = payload;
            })
    }
});

export const {
    logout
} = authStore.actions;

export default authStore;