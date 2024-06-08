// src/UserDetails.js

import React, { useState } from 'react';

const UserDetails = () => {
  const [gender, setGender] = useState(''); // State to handle gender selection
  const [birthday, setBirthday] = useState({ day: '', month: '', year: '' }); // State to handle birthday
  const [location, setLocation] = useState(''); // State to handle location

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">A little about yourself</h1>
        <p className="text-gray-500 mb-8">Ed laoreet eros laoreet.</p>
        
        {/* Gender Selection */}
        <div className="mb-8">
          <p className="mb-4">Your gender</p>
          <div className="flex space-x-4">
            <button
              className={`flex items-center justify-center px-8 py-4 rounded-lg shadow-md hover:shadow-lg ${
                gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
              }`}
              onClick={() => setGender('male')}
            >
              <span className="mr-2">
                {/* Male Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.58A12 12 0 0021 9.25M12 14L9.16 8.42A12 12 0 013 9.25M12 14V23" />
                </svg>
              </span>
              Male
            </button>
            <button
              className={`flex items-center justify-center px-8 py-4 rounded-lg shadow-md hover:shadow-lg ${
                gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
              }`}
              onClick={() => setGender('female')}
            >
              <span className="mr-2">
                {/* Female Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
              Female
            </button>
          </div>
        </div>
        
        {/* Birthday Input */}
        <div className="mb-8">
          <p className="mb-4">Your birthday</p>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm mb-1">Day:</label>
              <input
                type="text"
                className="w-16 px-2 py-1 border rounded-lg"
                value={birthday.day}
                onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Month:</label>
              <input
                type="text"
                className="w-16 px-2 py-1 border rounded-lg"
                value={birthday.month}
                onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Year:</label>
              <input
                type="text"
                className="w-24 px-2 py-1 border rounded-lg"
                value={birthday.year}
                onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
              />
            </div>
          </div>
        </div>
        
        {/* Location Input */}
        <div className="mb-8">
          <p className="mb-4">Your location</p>
          <select
            className="w-64 px-4 py-2 border rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select your location</option>
            <option value="Delhi, India">Delhi, India</option>
            <option value="New York, USA">New York, USA</option>
            <option value="London, UK">London, UK</option>
            {/* Add more locations as needed */}
          </select>
        </div>
        
        {/* Continue Button */}
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
