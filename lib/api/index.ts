import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: "/api",
  withCredentials: true,
});

export const axiosRiotKr = axiosInstance.create({
  baseURL: "https://kr.api.riotgames.com",
  withCredentials: true,
  params: {
    api_key: process.env.RIOT_API_KEY,
  },
});

export const axiosRiotAsia = axiosInstance.create({
  baseURL: "https://asia.api.riotgames.com",
  withCredentials: true,
  params: {
    api_key: process.env.RIOT_API_KEY,
  },
});

export default axios;
