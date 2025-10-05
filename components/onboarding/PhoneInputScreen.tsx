
import React, { useState } from 'react';
import { ChevronRight } from '../icons/Icons';

interface PhoneInputScreenProps {
  onPhoneSubmitted: (phone: string) => void;
}

const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({ onPhoneSubmitted }) => {
  const [phone, setPhone] = useState('');

  const isValidPhone = phone.length >= 9;

  return (
    <div className="flex flex-col flex-grow justify-between p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Enter your number</h1>
        <p className="text-gray-600 mt-2">We'll send a code to verify your phone.</p>
      </div>

      <div className="my-8">
        <div className="flex items-center border-2 border-gray-200 rounded-lg p-3 focus-within:border-primary bg-white">
            <span className="text-gray-500 font-semibold px-2 border-r border-gray-200">+254</span>
            <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="712 345 678"
            className="w-full p-2 bg-transparent focus:outline-none text-lg text-gray-900 placeholder:text-gray-400"
            />
        </div>
      </div>

      <button
        onClick={() => onPhoneSubmitted(phone)}
        disabled={!isValidPhone}
        className="w-full flex items-center justify-center space-x-2 bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        <span>Continue</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PhoneInputScreen;
