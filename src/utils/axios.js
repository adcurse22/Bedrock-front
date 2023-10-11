import { getCookie } from "./coockie";
import axios from 'axios';

export const PublicApi = axios.create({
    baseURL: 'https://someurl.com/auth/sign-in',
    timeout: 500
});

export const PrivateApi = axios.create({
    baseURL: 'https://someurl.com/auth/sign-in',
    timeout: 500
});

PrivateApi.interceptors.request.use(
    req => {
        const token = getCookie('auth-token');
        if (!token) {
            return;
        }
        req.headers.Authorization = token;
        return req;
    }
)