import axiosInstance from 'axios';

const API_SERVER_URL = 'https://opgg-clone-api.fly.dev';

const axios = axiosInstance.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : API_SERVER_URL,
  withCredentials: true,
});

export const axiosRiotKr = axiosInstance.create({
  baseURL: 'https://kr.api.riotgames.com',
  withCredentials: true,
  params: {
    api_key: process.env.RIOT_API_KEY,
  },
});

export const axiosRiotAsia = axiosInstance.create({
  baseURL: 'https://asia.api.riotgames.com',
  withCredentials: true,
  params: {
    api_key: process.env.RIOT_API_KEY,
  },
});

export default axios;
