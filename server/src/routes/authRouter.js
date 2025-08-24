import express from "express";
import { Login, SignUp, GoogleLogin, SendOTPForLogin, SendOTPForRegister } from "../controller/authController.js";


const AuthRouter = express.Router();

AuthRouter.post("/signup", SignUp);
AuthRouter.post("/login", Login);
AuthRouter.post("/googleLogin", GoogleLogin);
AuthRouter.post("/sendOtpRegister", SendOTPForRegister)
AuthRouter.post("/sendOtpLogin", SendOTPForLogin)


export default AuthRouter;

