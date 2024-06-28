import React from 'react';
import { Link } from 'react-router-dom';

const MedicalInfoForm = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          </div>
        </div>
          <h2 className="text-2xl font-semibold">Medical info</h2>
          <p className="text-gray-600">Fill in the data of disease that you have been experiencing</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Clinical Features</label>
            <input
              type="text"
              placeholder="About Disease"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">History of Present Illness</label>
            <textarea
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Past History (including Allergies)</label>
            <textarea
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Personal History</label>
            <textarea
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div className="text-center">
            <Link to="/UploadPrescriptionForm"><button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go Next →
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicalInfoForm;
