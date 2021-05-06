import axios, { AxiosInstance } from "axios";

const BASE_URL: string = process.env.BASE_URL;
const API_KEY: string = process.env.API_KEY || "";
const isProd: boolean = process.env.NODE_ENV === "production";

const headers = {
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": isProd ? BASE_URL : "*",
  // "Access-Control-Allow-Origin": "*",
  "X-API-KEY": API_KEY,
} as const;

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});
