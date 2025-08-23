import dotenv from "dotenv";
dotenv.config();
import AuthRouter from "./src/routes/authRouter.js";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import connectDB from "./src/config/db.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", AuthRouter);
app.get("/", (req, res) => {
    // console.log("Server Working Properly");
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