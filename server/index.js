import dotenv from "dotenv";
dotenv.config();
import AuthRouter from "./src/routes/authRouter.js";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/auth", AuthRouter);
app.get("/api", (req, res) => {

    res.status(200).json({ message: "Chating App Backend is running" });
});

app.use((err, req, res, next) => {
    const errorMessage = err.message || "Internal Server Error";
    const StatusCode = err.StatusCode || 500;
    res.status(StatusCode).json({ message: errorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});