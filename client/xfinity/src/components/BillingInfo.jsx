import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillingInfo = () => {

    // States for form inputs
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Submit form data logic (assuming submitFormData is your API call function)
            const response = await submitFormData({
                cardNumber,
                expiryDate,
                cvv,
                nameOnCard,
                streetAddress,
                city,
                state,
                postalCode,
                country,
            });

            setStatusMessage(response.message); // Handle the API response message
            setIsLoading(false);

            // After successful submission, navigate back to the login page
            navigate('/login'); // Replace '/login' with the actual path of your login page
        } catch (error) {
            setStatusMessage('Failed to update billing info. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Update Billing Information</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-lg space-y-4">
                {/* Credit Card Information */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                        required
                    />
                </div>

                <div className="flex space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                    <input
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        placeholder="John Doe"
                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                        required
                    />
                </div>

                {/* Billing Address */}
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Billing Address</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Street Address</label>
                        <input
                            type="text"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            placeholder="123 Main St"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                        />
                    </div>

                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="City"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                placeholder="State"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                            <input
                                type="text"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                placeholder="Postal Code"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Country"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                >
                    Update Billing Info
                </button>
            </form>
        </div>
    )
}

export default BillingInfo