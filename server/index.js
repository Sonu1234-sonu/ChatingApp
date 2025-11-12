
import dotenv from "dotenv";
dotenv.config();
import AuthRouter from "./src/routes/authRoutes.js";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/userRoutes.js";

import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://chatingapplication1.netlify.app",
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    // You can handle socket events here
});

app.use(cors({ origin: "https://chatingapplication1.netlify.app", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/auth", AuthRouter);
app.use("/api/user", userRoutes);


app.get("/api", (req, res) => {
    res.status(200).json({ message: "Chating App Backend is running" });
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";
    res.status(statusCode).json({ message: errorMessage });
});

const port = process.env.PORT || 5000;
server.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});