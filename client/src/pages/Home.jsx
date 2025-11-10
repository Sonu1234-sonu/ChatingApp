import React from "react";
import { motion } from "framer-motion";

import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="hero min-h-[92vh] bg-gradient-to-b from-primary to-secondary  flex items-center">
        <div className="max-w-md mx-auto text-primary-content text-center space-y-10">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ y: 100, x: 0 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            Welcome to ChatApp
          </motion.h1>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
          >
            Connect, chat and collaborate with friends and colleagues in
            real-time. Experience seamless communication with our modern
            messaging platform.
          </motion.p>
          <motion.button
            className="btn btn-primary"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            Get Started
          </motion.button>
        </div>

        <div>
          <main className="w-[700px] h-[600px]">
            <Spline scene="https://prod.spline.design/vsbNwoHzILy3fd-F/scene.splinecode" />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
