
import React, { useState } from 'react';
import { MomIcon, DadIcon, ChevronRight } from '../icons/Icons';
import type { ParentType } from '../../types';

interface SelectParentScreenProps {
  onSelect: (type: ParentType) => void;
}

const SelectParentScreen: React.FC<SelectParentScreenProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<ParentType>(null);

  const handleContinue = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  return (
    <main className="flex-grow flex flex-col justify-between p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Who are you?</h1>
        <p className="text-gray-600 mt-2">Select your role to personalize your experience.</p>
      </div>

      <div className="space-y-6 my-8">
        <button
          onClick={() => setSelected('mum')}
          className={`flex items-center w-full p-6 text-left rounded-xl border-4 transition-all duration-200 ${
            selected === 'mum' ? 'border-secondary bg-light-pink' : 'border-gray-200 bg-white'
          }`}
        >
          <MomIcon className={`w-12 h-12 mr-6 ${selected === 'mum' ? 'text-secondary' : 'text-gray-500'}`} />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Mum</h2>
            <p className="text-gray-600">Track pregnancy, growth, and milestones.</p>
          </div>
        </button>
        <button
          onClick={() => setSelected('dad')}
          className={`flex items-center w-full p-6 text-left rounded-xl border-4 transition-all duration-200 ${
            selected === 'dad' ? 'border-primary bg-light-blue' : 'border-gray-200 bg-white'
          }`}
        >
          <DadIcon className={`w-12 h-12 mr-6 ${selected === 'dad' ? 'text-primary' : 'text-gray-500'}`} />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Dad</h2>
            <p className="text-gray-600">Support your partner and bond with your baby.</p>
          </div>
        </button>
      </div>

      <button
        onClick={handleContinue}
        disabled={!selected}
        className="w-full flex items-center justify-center space-x-2 bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        <span>Continue</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </main>
  );
};

export default SelectParentScreen;
