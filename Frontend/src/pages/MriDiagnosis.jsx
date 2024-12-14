import React, { useState,useEffect} from "react";
import icon1 from "../assets/images/Clinical-Computer.jpg";
import icon2 from "../assets/images/accurate.jpg";
import icon3 from "../assets/images/report.png";
import icon4 from "../assets/images/expert.jpg";
import sicon1 from "../assets/images/Tumor.jpg";
import sicon2 from "../assets/images/alzimer.jpg";
import sicon3 from "../assets/images/Hammourage.jpg";
import { useNavigate } from "react-router-dom";


// useEffect(() => {
//     window.scrollTo(0, 0); 
//   }, []);

const MRIDiagnosis = () => {
  // State to manage the visibility of the additional content
  const [showMentalHealth, setShowMentalHealth] = useState(false);
  // Inside the component
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-5 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-primaryColor leading-tight mb-4">
            Advanced MRI Diagnosis for Neurological Health
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Detect early signs of{" "}
            <strong>brain tumors, Alzheimer's disease, and hemorrhages </strong>
            using advanced diagnostic analysis present on our website. Upload
            your MRI scans to receive accurate and timely results.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
            onClick={() => setShowMentalHealth(!showMentalHealth)} // Toggle state
          >
            Know your Mental Health
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={icon1}
            alt="MRI Diagnosis"
            className="rounded-lg shadow-lg w-[500px] lg:w-[700px] h-[280px]"
          />
        </div>
      </div>

      {/* Speciality Section */}
      <div className="container mx-auto px-5 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primaryColor mb-10">
          Our Speciality, IN delivering
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={icon2}
            alt="Accurate Results"
            className="mx-auto mb-4 size-20"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Accurate Results
          </h3>
          <p className="text-gray-600">
            High-resolution MRI scans for precise detection and diagnosis.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={icon3}
            alt="Timely Reports"
            className="mx-auto mb-4 size-20"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Timely Reports
          </h3>
          <p className="text-gray-600">
            Get your reports delivered quickly to ensure timely treatment.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={icon4} alt="Expert Care" className="mx-auto mb-4 size-20" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Expert Care
          </h3>
          <p className="text-gray-600">
            Trusted neurologists and radiologists for your brain health.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-10 text-center">
        <h2 className="text-2xl lg:text-3xl text-white font-bold mb-4">
          Take Charge of Your Brain Health Today
        </h2>
        <button
          className="bg-white hover:bg-gray-200 text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md"
          onClick={() => setShowMentalHealth(!showMentalHealth)} // Toggle state
        >
          Know your Mental Health
        </button>
      </div>

      {/* Conditionally Rendered Mental Health Section */}
      {/* Conditionally Rendered Detection Options */}
      {showMentalHealth && (
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor mb-6 text-center">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Hemorrhage Detection
                </h3>
                <p className="text-gray-600 text-center">
                  Upload scans to identify hemorrhage and prevent severe risks.
                </p>
              </button>

              <button
                className="flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-md hover:bg-blue-700"
                onClick={() => handleCardClick("View All Tests")}
              >
                <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-full mb-4">
                  <span className="text-white text-3xl font-bold">+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  View All Tests
                </h3>
                <p className="text-gray-200 text-center">
                  Explore our complete range of diagnostic tests.
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MRIDiagnosis;
