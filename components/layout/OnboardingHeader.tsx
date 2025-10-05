
import React from 'react';
import { ChevronLeft } from '../icons/Icons';

interface OnboardingHeaderProps {
  onBack: () => void;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ onBack }) => {
  return (
    <header className="p-4">
      <button 
        onClick={onBack} 
        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Go back"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
    </header>
  );
};

export default OnboardingHeader;
