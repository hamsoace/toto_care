import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import { Stethoscope } from '../icons/Icons';
import { ANC_VISITS } from '../../constants';

const ANCTracker: React.FC = () => {
  const completedVisits = ANC_VISITS.filter(v => v.completed).length;
  const totalVisits = ANC_VISITS.length;
  const progressPercentage = (completedVisits / totalVisits) * 100;

  return (
    <div className="px-4">
        <DashboardCard title="ANC Visit Tracker" icon={<Stethoscope className="w-6 h-6 text-primary" />} ctaText="Log Visit">
        <div className="mt-2">
            <p className="text-sm text-gray-600 mb-2">
            You've completed <span className="font-bold text-primary">{completedVisits}</span> of <span className="font-bold">{totalVisits}</span> recommended visits.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Visit 1</span>
            <span>Visit 8</span>
            </div>
        </div>
        </DashboardCard>
    </div>
  );
};

export default ANCTracker;