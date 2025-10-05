
import React, { useState } from 'react';
import { ChevronRight } from '../icons/Icons';
import type { ParentType } from '../../types';

interface ProfileSetupScreenProps {
  parentType: ParentType;
  onProfileComplete: (name: string, dueDate: string) => void;
}

const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({ parentType, onProfileComplete }) => {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  const welcomeText = parentType === 'mum' ? 'Welcome, Mum!' : 'Welcome, Dad!';
  const subtitleText = parentType === 'mum' 
    ? "Let's personalize your journey."
    : "Let's get you set up to support your partner.";
  const dateLabel = parentType === 'mum'
    ? "Your baby's due date (or birthday)"
    : "The baby's due date (or birthday)";

  return (
    <div className="flex flex-col flex-grow justify-between p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{welcomeText}</h1>
        <p className="text-gray-600 mt-2">{subtitleText}</p>
      </div>

      <div className="space-y-6 my-8">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Jane Doe"
                className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900 placeholder:text-gray-400"
            />
        </div>
        <div>
            <label htmlFor="duedate" className="block text-sm font-medium text-gray-700 mb-1">{dateLabel}</label>
            <input
                id="duedate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900 placeholder:text-gray-400"
            />
        </div>
      </div>

      <button
        onClick={() => onProfileComplete(name, dueDate)}
        disabled={!name || !dueDate}
        className="w-full flex items-center justify-center space-x-2 bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        <span>Continue</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProfileSetupScreen;
