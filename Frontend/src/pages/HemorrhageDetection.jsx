import React, { useState,useEffect} from "react";

const HemorrhageDetection = () => {
  // State to hold the uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white py-10">
      <div className="container mx-auto px-5">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-red-600 mb-6 text-center">
          Hemorrhage Detection
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Upload your MRI scan to detect signs of hemorrhage and get early warnings for better treatment options.
        </p>

        {/* File Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Upload MRI Scan
          </label>

          {/* Conditionally render upload area or preview image */}
          {uploadedImage ? (
            <div className="relative border rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src={uploadedImage}
                alt="Uploaded MRI"
                className="max-h-80 w-full object-contain"
              />
            </div>
          ) : (
            <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center hover:border-red-500 transition-all">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange} // Handle file input change
                accept="image/*" // Allow only images
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
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={() => alert("Scan Submitted")}
          >
            Submit Scan
          </button>
        </div>
      </div>

      {/* Interactive Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Need help?{" "}
          <a
            href="#"
            className="text-red-600 hover:underline font-medium transition-colors"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default HemorrhageDetection;
