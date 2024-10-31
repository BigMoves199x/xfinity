import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/logo.png'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";


const Password = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const email = location.state?.email || 'Email not provided'; // Get email from navigation state

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // Handle Sign In button click
    const handleSignInClick = () => {
        // Perform any validation or authentication logic here
        // Navigate to UpdateBillingInfo route
        navigate('/Billing');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-4">
            <div className="max-w-sm">
                {/* Logo */}
                <div className="mb-6">
                    <img src={logo} alt="Xfinity" className="w-24" />
                </div>

                {/* Email/Username Display */}
                <p className="text-gray-700 mb-6 text-sm font-bold">
                    {email}
                </p>

                {/* Title */}
                <h1 className="text-2xl font-bold mb-4">Enter your password</h1>

                {/* Password Input */}
                <div className="relative mb-4">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <IoIosEyeOff className="h-5 w-5" /> : <IoMdEye className="h-5 w-5" />}
                    </button>
                </div>

                {/* Forgot Password */}
                <a href="#" className="text-purple-600 text-sm mb-4 block">
                    Forgot password?
                </a>

                {/* Keep Me Signed In Checkbox */}
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="keep-signed-in" className="mr-2" />
                    <label htmlFor="keep-signed-in" className="text-sm text-gray-700">
                        Keep me signed in
                    </label>
                </div>

                {/* Terms of Service and Privacy Policy */}
                <p className="text-sm text-gray-500 mb-6">
                    By signing in, you agree to our{' '}
                    <a href="#" className="text-purple-600">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-purple-600">
                        Privacy Policy
                    </a>.
                </p>

                {/* Sign In Button */}
                <button
                    type="button"
                    onClick={handleSignInClick} // Add the click handler
                    className="bg-purple-700 hover:bg-purple-800 rounded-md text-white py-4 px-6 font-bold mb-4"
                >
                    Sign in
                </button>

                {/* Sign in as someone else */}
                <p className="text-sm text-gray-700">
                    <a href="#" className="text-black hover:underline">
                        Sign in as someone else
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Password