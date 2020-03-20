import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:2222/'
});

export default axiosInstance;
