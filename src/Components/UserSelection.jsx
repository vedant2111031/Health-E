// src/UserSelection.js

import React from 'react';
import { Link } from 'react-router-dom';

const UserSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Let's get acquainted</h1>
        <p className="text-gray-500 mb-8">Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet.</p>
        <div className="flex flex-col space-y-4">
          <Link to="/UserDetails" className='flex items-center justify-center px-8 py-4 bg-white text-black border border-gray-200  shadow-md hover:text-blue-500 rounded-lg'>
          <button className="flex items-center">
            <span className="mr-2">
              {/* Patient Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            I'm a patient
          </button>
          </Link>
          <Link to="/UserDetails" className='flex items-center justify-center px-8 py-4 bg-white text-black border border-gray-200  shadow-md hover:text-blue-500 rounded-lg'>
          <button className="flex items-center">
            <span className="mr-2">
              {/* Doctor Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.61 0 4.57-1.59 4.99-3.5H16a2 2 0 100-4h-2a2 2 0 00-4 0H8a2 2 0 100 4h1.01C7.43 9.41 9.39 11 12 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5a6.5 6.5 0 006.5-6.5h-13a6.5 6.5 0 006.5 6.5z" />
              </svg>
            </span>
            I'm a doctor
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
