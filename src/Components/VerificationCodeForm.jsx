import React, { useState } from 'react';

const VerificationCodeForm = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [resendTimer, setResendTimer] = useState(130); // 2:10 in seconds

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return; // Ensure only one character is entered
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    // Focus next input
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Verification Code:', code.join(''));
  };

  const handleResendCode = () => {
    // Handle resend code
    console.log('Resend Code');
    setResendTimer(130); // Reset timer to 2:10
  };

  // Timer countdown
  React.useEffect(() => {
    if (resendTimer > 0) {
      const timerId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [resendTimer]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Your Code</h2>
        <p className="text-center text-gray-600">Code sent to your Email</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
            <span>({Math.floor(resendTimer / 60)}:{resendTimer % 60 < 10 ? '0' : ''}{resendTimer % 60})</span>
            <button
              type="button"
              onClick={handleResendCode}
              disabled={resendTimer > 0}
              className="text-blue-600 hover:text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Resend Code? Click here
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationCodeForm;
