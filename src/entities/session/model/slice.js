import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, getCookie, setCookie } from 'utils/coockie';
import jwtDecode from 'jwt-decode';
import { sessionApi } from '../api/sessionApi';

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
};

const initialState = {
    isLogged: defineLoginState(),
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    status: null,
    error: null
};
/* eslint no-param-reassign: "off" */
const sessionSlice = createSlice({
    name: 'session',
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
            .addCase(sessionApi.signin.pending, (state) => {
                state.status = 'loading sign in';
                state.error = null;
            })
            .addCase(sessionApi.signin.fulfilled, (state, { payload }) => {
                state.status = null;
                state.error = null;
                state.isLogged = true;
                setCookie('auth-token', payload.token, 1);
                console.log('Response: ', payload);
                state.user = jwtDecode(payload.token);
                // eslint-disable-next-line no-underscore-dangle
                state.user.id = state.user._id;
                localStorage.setItem('user', JSON.stringify(state.user));
            })
            .addCase(sessionApi.signin.rejected, (state, { payload }) => {
                state.status = null;
                state.error = payload;
            });
    }
});

export const {
    logout
} = sessionSlice.actions;

export default sessionSlice;
