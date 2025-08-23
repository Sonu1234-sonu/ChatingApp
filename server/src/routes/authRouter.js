import express from "express";
import { Login, SignUp } from "../controller/authController.js";

import { Protect } from "../middleware/authMiddleware.js"
const AuthRouter = express.Router();

AuthRouter.post("/signup", SignUp);
AuthRouter.post("/login", Login);
// AuthRouter.post("/googleLogin", GoogleLogin);
// AuthRouter.post("/sendOtpRegister", SendOtpForRegister)
// AuthRouter.post("/sendOtpLogin", SendOTPForLogin)


export default AuthRouter;

