import React from "react";
import { motion } from "framer-motion";

const AIDemo = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-primaryColor mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience the Power of AI Diagnostics
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our advanced AI models are designed to provide accurate, efficient, and reliable diagnostic solutions for brain tumors, Alzheimer's, and hemorrhages.
        </motion.p>

        <motion.div
          className="relative w-full lg:w-3/4 mx-auto h-64 bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src="https://cdn.pixabay.com/photo/2020/04/01/10/56/ai-4988026_1280.jpg"
            alt="AI Demo"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full p-6 text-white text-xl font-semibold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3>Advanced MRI Image Analysis</h3>
            <p>AI-Powered Insights for Reliable Diagnosis</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
            Try Our AI Model Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemo;
