
import React from 'react';
import { SparklesIcon } from '../icons/Icons';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col h-screen bg-light-blue p-8 text-center">
      <main className="flex-grow flex flex-col justify-center">
        <div className="flex justify-center items-center mb-4">
          <SparklesIcon className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Welcome to TotoCare</h1>
        <p className="text-gray-600 mt-4">Your partner in parenting, from pregnancy to preschool.</p>
      </main>
      <footer className="space-y-4 pb-4">
        <button
          onClick={onGetStarted}
          className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg hover:bg-blue-600 transition-colors"
        >
          Get Started
        </button>
        <button
          onClick={onGetStarted} // In a real app, this would lead to a login screen
          className="w-full bg-transparent text-primary font-bold py-4 px-4 rounded-lg text-lg hover:bg-blue-100 transition-colors"
        >
          I Already Have an Account
        </button>
      </footer>
    </div>
  );
};

export default WelcomeScreen;
