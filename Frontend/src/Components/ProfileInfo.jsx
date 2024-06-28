// src/ProfileInfo.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  // Define state for each form field
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    // Handle the "Go Next" button click (e.g., form submission or navigation)
    console.log({
      name,
      age,
      gender,
      address,
      phone,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Form Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">Profile info</h1>
        <p className="text-gray-500 mb-6 text-center">
          Fill in the data for profile. It will take a couple of minutes.
        </p>

        {/* Form Fields */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Age</label>
              <input
                type="text"
                placeholder="Enter your age"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Gender</label>
              <input
                type="text"
                placeholder="Enter your gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <svg
                className="w-6 h-6 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h2l2 6 6-6 2 2-6 6 6 6-2 2-6-6-2 2-2-6H3v-2l2-2H3V7l2-2z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="9999999999"
                className="flex-1 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Go Next Button */}
          <Link to="/MedicalInfoForm"><button
            type="button"
            onClick={handleNext}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go Next →
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
