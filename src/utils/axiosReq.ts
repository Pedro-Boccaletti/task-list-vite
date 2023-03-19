import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`

export const axiosReq = (authorization?: string) => axios.create({
  baseURL,
  headers: {
    Authorization: authorization,
  }
});
