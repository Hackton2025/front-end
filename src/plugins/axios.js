const url = import.meta.env.VITE_URL_BACKEND;

import axios from "axios";

const api = axios.create({
  baseURL: url,
});

export default api;

console.log('Axios instance created with base URL:', url);