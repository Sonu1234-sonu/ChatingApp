import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import api from "../config/api";
import { toast } from "react-hot-toast";
import OTPModal from "../components/modals/OTPModal";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("login from submitted:", loginData);

    try {
      const res = await api.post("/auth/sendOtpLogin", loginData);

      if (res.data.message === "OTP sent successfully") {
        setIsOTPModalOpen(true);
      } else {
        toast.success(res.data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Login Error");
    }
  };

  const GoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl text-primary font-bold text-center">
              Login to Your Account
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-info w-full">
                  Login
                </button>
              </div>
            </form>

            <div className="divider">or</div>

            <div className="form-control mt-6">
              <button type="button" className="btn btn-secondary w-full">
                <FcGoogle className="text-2xl" /> Login With Google
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        callingPage="login"
        data={loginData}
      />
    </>
  );
};

export default Login;
