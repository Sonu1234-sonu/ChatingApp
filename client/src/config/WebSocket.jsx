import { io } from "socket.io-client";

const socketAPI = io("https://chating-app-64a7.vercel.app", {
  withCredentials: true,
});

export default socketAPI;
