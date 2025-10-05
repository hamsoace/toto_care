
import React from 'react';
import { SmartphoneIcon, MailIcon, ChevronRight } from '../icons/Icons';

interface AuthMethodScreenProps {
  onSelect: (method: 'phone' | 'email') => void;
}

const AuthMethodScreen: React.FC<AuthMethodScreenProps> = ({ onSelect }) => {
  return (
    <main className="flex-grow flex flex-col justify-center px-8 pb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Create your account</h1>
        <p className="text-gray-600 mt-2">Choose how you'd like to sign up.</p>
      </div>

      <div className="space-y-6 mt-12">
        <button
          onClick={() => onSelect('phone')}
          className="flex items-center w-full p-6 text-left rounded-xl border-2 border-gray-200 bg-white hover:border-primary transition-all duration-200"
        >
          <SmartphoneIcon className="w-10 h-10 mr-6 text-primary" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Continue with Phone</h2>
            <p className="text-gray-600">We'll send you an SMS to verify.</p>
          </div>
          <ChevronRight className="w-6 h-6 ml-auto text-gray-400" />
        </button>
        <button
          onClick={() => onSelect('email')}
          className="flex items-center w-full p-6 text-left rounded-xl border-2 border-gray-200 bg-white hover:border-primary transition-all duration-200"
        >
          <MailIcon className="w-10 h-10 mr-6 text-primary" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Continue with Email</h2>
            <p className="text-gray-600">Sign up with your email and password.</p>
          </div>
           <ChevronRight className="w-6 h-6 ml-auto text-gray-400" />
        </button>
      </div>

      <div className="text-center text-xs text-gray-500 mt-auto pt-8">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </div>
    </main>
  );
};

export default AuthMethodScreen;
