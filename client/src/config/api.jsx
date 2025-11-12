import axios from "axios";
const api = axios.create({
  baseURL: "https://chating-app-64a7.vercel.app/api",
  withCredentials: true,
});
export default api;
