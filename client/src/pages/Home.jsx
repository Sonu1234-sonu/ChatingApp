import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-gradient-to-b from-primary to-secondary  flex items-center">
        <div className="max-w-md mx-auto text-primary-content text-center space-y-10">
          <motion.h1
            className="text-7xl font-bold "
            initial={{ y: 100, x: 0 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to ChatApp
          </motion.h1>
          <motion.p
            className="py-6 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 90, scale: 1.5 }}
            transition={{ duration: 1.1, ease: "easeIn" }}
          >
            Connect, chat and collaborate with friends and colleagues in
            real-time. Experience seamless communication with our modern
            messaging platform.
          </motion.p>
          <motion.button
            className="btn btn-primary btn-lg"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Home;
