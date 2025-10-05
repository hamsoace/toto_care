import React from 'react';
import DashboardCard from '../shared/DashboardCard';
// FIX: Import `AlertTriangle` to resolve reference error.
import { Syringe, CheckCircle, Clock, AlertTriangle } from '../icons/Icons';
import { VACCINE_SCHEDULE } from '../../constants';
import type { Vaccine } from '../../types';

const getStatusIcon = (status: Vaccine['status']) => {
    switch(status) {
        case 'completed':
            return <CheckCircle className="w-5 h-5 text-success" />;
        case 'pending':
            return <Clock className="w-5 h-5 text-warning" />;
        case 'overdue':
            return <AlertTriangle className="w-5 h-5 text-danger" />;
    }
};

const VaccinationItem: React.FC<{ vaccine: Vaccine }> = ({ vaccine }) => (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center space-x-3">
            <div>{getStatusIcon(vaccine.status)}</div>
            <div>
                <p className="font-semibold text-sm text-gray-800">{vaccine.name}</p>
                <p className="text-xs text-gray-500">{vaccine.dueDate}</p>
            </div>
        </div>
    </div>
);


const VaccinationSchedule: React.FC = () => {
  return (
    <div className="px-4">
      <DashboardCard title="Vaccination Schedule" icon={<Syringe className="w-6 h-6 text-blue-500" />} ctaText="Full Schedule">
        <div className="space-y-1">
          {VACCINE_SCHEDULE.slice(0, 3).map(vaccine => <VaccinationItem key={vaccine.name} vaccine={vaccine} />)}
        </div>
      </DashboardCard>
    </div>
  );
};

export default VaccinationSchedule;