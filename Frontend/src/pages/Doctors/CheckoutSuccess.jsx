import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-4">Thank you for your payment. Your transaction has been completed.</p>
          <Link to="/home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
