import Axios from "axios";

const BASE_URL = "https://localhost:8080/manpower";

export const axios = Axios.create({
    baseURL: BASE_URL
});

// 권한 없어서 요청 header에 Token 넣는 작업은 생략
// eslint-disable-next-line no-lone-blocks
{/*
axios.interceptors.request.use(
    (config) => {
        const accessToken = getToken();

        config.headers["Authorization"] = 'Bearer ${accessToken}'
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
*/}