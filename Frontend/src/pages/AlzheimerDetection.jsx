import React, { useState,useEffect } from "react";

const AlzheimerDetection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-600 mb-6 text-center">
          Alzheimer Detection
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Upload your MRI scan and let our system analyze it for early signs of Alzheimer’s disease with cutting-edge accuracy.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Upload MRI Scan
          </label>
          {/* Conditional Rendering of Uploaded Image or Upload Box */}
          {uploadedImage ? (
            <div className="relative border-2 border-purple-500 rounded-lg p-6 flex items-center justify-center">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="max-w-full max-h-64 rounded-md shadow-lg"
              />
            </div>
          ) : (
            <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center hover:border-purple-500 transition-all">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
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
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Submit Scan
          </button>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Need help?{" "}
          <a
            href="#"
            className="text-purple-600 hover:underline font-medium transition-colors"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default AlzheimerDetection;
