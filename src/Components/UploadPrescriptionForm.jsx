import React from 'react';

const UploadPrescriptionForm = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl font-semibold">Upload Prescription</h2>
          <p className="text-gray-600">Fill in the data of disease that you have been experiencing</p>
          <hr className="my-6"/>
        </div>
        <div className="flex justify-center items-center space-x-4 bg-gray-100 p-6 rounded-lg mb-6">
          <div className="flex flex-col items-center space-y-2">
            <button
              type="button"
              className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center text-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l4 4m0 0l4-4m-4 4V4"
                />
              </svg>
            </button>
            <span className="text-sm text-gray-600">Upload</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button
              type="button"
              className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            <span className="text-sm text-gray-600">Add More</span>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescriptionForm;
