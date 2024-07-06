import React from 'react';

const ProcessingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex space-x-2 mb-8">
        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
      </div>
      <h1 className="text-2xl font-bold mb-2">Processing...</h1>
      <p className="text-gray-500 mb-8">We are looking for doctors</p>
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      <style jsx>{`
        .loader {
          border-top-color: #3490dc;
          animation: spinner 1.5s linear infinite;
        }
        @keyframes spinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProcessingScreen;