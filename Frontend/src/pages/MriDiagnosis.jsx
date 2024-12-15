import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sicon1 from "../assets/images/Tumor.jpg";
import sicon2 from "../assets/images/alzimer.jpg";
import sicon3 from "../assets/images/Hammourage.jpg";
import { FaRobot, FaHandsHelping, FaBullseye } from "react-icons/fa";

const MRIDiagnosis = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showMentalHealth, setShowMentalHealth] = useState(false);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const handleCardClick = (path) => {
    navigate(path);
  };
  const steps = [
    "Patient Data Input",
    "Pre-processing",
    "Segmentation",
    "Feature Extraction",
    "Classification",
    "Diagnosis and Recommendation",
  ];

  const handleExploreClick = () => {
    setShowSecondPage(true);
    setTimeout(() => {
      document.getElementById("secondPage").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Welcome Page */}
      <section className="h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white flex flex-col justify-center items-center px-4 md:px-8">
  <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
    Welcome to Our Services
  </h1>
  <p className="text-base md:text-lg mb-8 text-center">
    From appointment booking to virtual consultation to MRI diagnosis, we’ve
    got you covered. <br />
    We provide a wide range of services to our users, helping them stay healthy
    and fit in this stressful world.
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    <button
      className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
      onClick={() => navigate("/doctors")} 
    >
      Book Appointment
    </button>
    <button
      className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
      onClick={() => navigate("/doctors")} 
    >
      Book Virtual Consultation
    </button>
    <button
      onClick={handleExploreClick}
      className="bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-600"
    >
      Explore MRI Diagnosis
    </button>
  </div>
</section>

      
      {showSecondPage && (
        <section id="secondPage" className="bg-gray-50 py-16">
          {/* Why Choose Us Section */}
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Why Choose Us?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              <div className="p-6 bg-white shadow rounded-lg">
                <FaBullseye className="mx-auto text-5xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  High Accuracy
                </h3>
                <p className="text-gray-600">
                  Our model provides over 98% accuracy in detecting MRI
                  anomalies.
                </p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <FaHandsHelping className="mx-auto text-5xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  Trusted by Patients
                </h3>
                <p className="text-gray-600">
                  Thousands of patients trust us for accurate and timely
                  diagnoses.
                </p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <FaRobot className="mx-auto text-5xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  Advanced AI Model
                </h3>
                <p className="text-gray-600">
                  Leverages cutting-edge AI technology for reliable results.
                </p>
              </div>
            </div>
          </div>

          {/* AI Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">ML Demo</h2>
            <p className="text-gray-600 mb-8">
              See how our ML model works in real-time. Upload your MRI scans and
              get instant results.
            </p>
            <div className="relative mx-auto w-full max-w-xl h-64 bg-gray-100 rounded-lg shadow overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              ></motion.div>
              <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h3 className="text-xl font-bold text-gray-800">
                  Processing MRI Scan...
                </h3>
                <p className="text-gray-600">
                  AI is analyzing your data for accurate results.
                </p>
                {/* Show the current step with number */}
                <div className="mt-4">
                  <motion.p
                    className="text-lg font-semibold text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Step {currentStep + 1}: {steps[currentStep]}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="bg-yellow-500 py-10 text-center mt-[60px]">
            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-4">
              Take Charge of Your Brain Health Today
              <br />
              Do your Diagnosis
            </h2>
          </div>

          <div className="bg-gray-100 py-10 pt-[66px]">
            <div className="container mx-auto px-5">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-[66px] text-center">
                Choose Your Detection Test
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <button
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
                  onClick={() => handleCardClick("/tumor-detection")}
                >
                  <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full mb-4">
                    <img
                      src={sicon1}
                      alt="Tumor Detection"
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Tumor Detection
                  </h3>
                  <p className="text-gray-600 text-center">
                    Upload your MRI scans to detect early signs of brain tumors
                    accurately.
                  </p>
                </button>
                <button
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
                  onClick={() => handleCardClick("/alzheimer-detection")}
                >
                  <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full mb-4">
                    <img
                      src={sicon2}
                      alt="Alzheimer Detection"
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Alzheimer Detection
                  </h3>
                  <p className="text-gray-600 text-center">
                    Detect early signs of Alzheimer's disease with advanced
                    analysis.
                  </p>
                </button>
                <button
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
                  onClick={() => handleCardClick("/hemorrhage-detection")}
                >
                  <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full mb-4">
                    <img
                      src={sicon3}
                      alt="Hemorrhage Detection"
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Hemorrhage Detection
                  </h3>
                  <p className="text-gray-600 text-center">
                    Upload scans to identify hemorrhage and prevent severe
                    risks.
                  </p>
                </button>
                <button
                  className="flex flex-col items-center bg-yellow-500 p-6 rounded-lg shadow-md hover:bg-blue-700"
                  onClick={() => handleCardClick("View All Tests")}
                >
                  <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-full mb-4">
                    <span className="text-white text-3xl font-bold">+</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    View All Tests
                  </h3>
                  <p className="text-gray-200 text-center">
                    Explore our complete range of diagnostic tests.
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MRIDiagnosis;
