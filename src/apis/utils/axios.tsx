import Axios from 'axios';

const BASE_URL = "http://localhost:8080/manpower";

export const axios = Axios.create({
    baseURL: BASE_URL,
});