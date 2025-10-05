import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import { HeartPulse } from '../icons/Icons';

interface PPDScreeningCardProps {
    onStartScreening?: () => void;
}

const PPDScreeningCard: React.FC<PPDScreeningCardProps> = ({ onStartScreening }) => {
  return (
    <div className="px-4">
        <DashboardCard title="Mental Wellness Check" icon={<HeartPulse className="w-6 h-6 text-pink-500" />}>
            <p className="text-sm text-gray-600 mb-4">It's important to check on your emotional health. Take a quick, confidential screening for postpartum depression.</p>
            <button 
                onClick={onStartScreening}
                className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors"
            >
                Start Screening
            </button>
        </DashboardCard>
    </div>
  );
};

export default PPDScreeningCard;
