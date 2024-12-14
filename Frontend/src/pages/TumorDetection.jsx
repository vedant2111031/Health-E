import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext"; // Import AuthContext
import { toast } from "react-toastify";

const TumorDetection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  // Access authContext to check if the user is logged in
  const { token, user } = useContext(authContext);
  const isLoggedIn = !!token; // Check if token exists

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      toast.error("Please log in to submit your scan.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // Submit logic when the user is logged in
    toast.success("Scan Submitted Successfully!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-10">
      <div className="container mx-auto px-5">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-6 text-center">
          Tumor Detection
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Upload your MRI scan and let our advanced diagnostic system detect
          early signs of brain tumors with precision and speed.
        </p>

        {/* File Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Upload MRI Scan
          </label>

          {uploadedImage ? (
            <div className="relative border rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src={uploadedImage}
                alt="Uploaded MRI"
                className="max-h-80 w-full object-contain"
              />
            </div>
          ) : (
            <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 transition-all">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept="image/*"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-gray-600">Drag & Drop or Click to Upload</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            className={`mt-6 w-full ${
              isLoggedIn
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-transform transform ${
              isLoggedIn ? "hover:scale-105" : ""
            }`}
            onClick={handleSubmit}
            disabled={!isLoggedIn} // Disable if not logged in
          >
            Submit Scan
          </button>
        </div>
      </div>

      {/* Interactive Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Need help?{" "}
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

export default TumorDetection;
