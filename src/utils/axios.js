import axios from 'axios';
import { getCookie } from './coockie';

export const PublicApi = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 500
});

export const PrivateApi = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 500
});

PrivateApi.interceptors.request.use(
    (req) => {
        const token = getCookie('auth-token');
        if (!token) {
            return;
        }
        req.headers.Authorization = token;
        // eslint-disable-next-line consistent-return
        return req;
    }
);
