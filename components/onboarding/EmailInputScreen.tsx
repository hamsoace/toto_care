
import React, { useState } from 'react';
import { ChevronRight } from '../icons/Icons';

interface EmailInputScreenProps {
  onEmailSubmitted: (email: string, password: string) => void;
}

const EmailInputScreen: React.FC<EmailInputScreenProps> = ({ onEmailSubmitted }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col flex-grow justify-between p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Sign up with email</h1>
        <p className="text-gray-600 mt-2">Create a password to secure your account.</p>
      </div>

      <div className="space-y-4">
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900 placeholder:text-gray-400"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <button
        onClick={() => onEmailSubmitted(email, password)}
        disabled={!email || !password}
        className="w-full flex items-center justify-center space-x-2 bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        <span>Finish Account Setup</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EmailInputScreen;
