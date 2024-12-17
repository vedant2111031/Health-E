import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MRIResult = () => {
  const [result, setResult] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchResult = async () => {
      setLoading(true);
      try {
        
        setTimeout(() => {
          const mockData = [
            {
              diagnosis: "Glioma",
              confidence: "92.3%",
              advice: "Further analysis and regular check-ups with a neurologist are recommended.",
            },
            {
              diagnosis: "Meningioma",
              confidence: "89.8%",
              advice: "Consult a specialist for a detailed assessment and treatment options.",
            },
            {
              diagnosis: "No Tumor",
              confidence: "98.7%",
              advice: "Your scan indicates no signs of a tumor. Regular check-ups are recommended.",
            },
            {
              diagnosis: "Pituitary",
              confidence: "85.2%",
              advice: "Consider a hormonal and neurological evaluation with a specialist.",
            },
          ];

         
          const randomResult =
            mockData[Math.floor(Math.random() * mockData.length)];

          setResult(randomResult);
          setLoading(false);
        }, 2000);
      } catch (error) {
        toast.error("Error fetching results. Please try again later.");
        navigate("/tumor-detection");
      }
    };

    fetchResult();
  }, [navigate]);
    
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-6 text-center">
          Scan Results
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-80">
            <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Diagnosis Summary</h2>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Diagnosis:</span> {result.diagnosis}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Confidence:</span> {result.confidence}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Advice:</span> {result.advice}
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                onClick={() => navigate("/tumor-detection")}
              >
                Upload Another Scan
              </button>
              <Link
                to="/doctors"
                className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg text-center hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                Seek Consultation
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Need help? {" "}
          <Link
            to="/contact"
            className="text-blue-600 hover:underline font-medium transition-colors"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MRIResult;
