import axios, { AxiosRequestConfig } from 'axios';



// 
const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {},
};

export const instanceAPI = axios.create(config);



// 
export type RejectFunc = (error: any) => any;

export const setInterceptor = (rejectFunc: RejectFunc) => {
    return instanceAPI.interceptors.response
        .use((response) => response, rejectFunc);
};

export const removeInterceptor = (interceptor: number) => {
    instanceAPI.interceptors.request.eject(interceptor);
};
