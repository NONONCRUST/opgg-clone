import axiosInstance from "axios";

const axios = axiosInstance.create({
  // baseURL: "/api",
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://opgg-clone-api.herokuapp.com",
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
