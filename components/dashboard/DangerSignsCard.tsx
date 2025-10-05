import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import { AlertTriangle, Phone } from '../icons/Icons';

const DangerSignsCard: React.FC = () => {
  const signs = ['Severe headache', 'Vaginal bleeding', 'Reduced baby movement'];

  return (
    <div className="px-4">
        <DashboardCard title="Danger Signs Monitor" icon={<AlertTriangle className="w-6 h-6 text-danger" />}>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 my-2">
            {signs.map(sign => <li key={sign}>{sign}</li>)}
        </ul>
        <p className="text-xs text-gray-500 mb-4">If you experience any of these, call for help immediately.</p>
        <a href="tel:116" className="w-full flex items-center justify-center space-x-2 bg-danger text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
            <Phone className="w-5 h-5"/>
            <span>Emergency Call (116)</span>
        </a>
        </DashboardCard>
    </div>
  );
};

export default DangerSignsCard;