import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import { Footprints } from '../icons/Icons';
import { MILESTONES } from '../../constants';
import type { Milestone } from '../../types';

const MilestoneItem: React.FC<{ milestone: Milestone }> = ({ milestone }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
        <div>
            <p className="font-semibold text-sm text-gray-800">{milestone.milestone}</p>
            <p className="text-xs text-gray-500">{milestone.category} milestone at ~{milestone.ageInMonths} months</p>
        </div>
        <input 
            type="checkbox" 
            checked={milestone.achieved} 
            readOnly 
            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
        />
    </div>
);

const MilestoneTracker: React.FC = () => {
    const nextMilestone = MILESTONES.find(m => !m.achieved);
    return (
        <div className="px-4">
            <DashboardCard title="Milestone Tracker" icon={<Footprints className="w-6 h-6 text-secondary" />} ctaText="View All">
                {nextMilestone && (
                    <div className="bg-light-pink p-3 rounded-lg mb-3">
                        <p className="text-sm font-bold text-secondary">Up Next:</p>
                        <p className="text-sm text-gray-700">{nextMilestone.milestone}</p>
                    </div>
                )}
                <div className="space-y-1">
                    {MILESTONES.slice(0, 2).map(milestone => <MilestoneItem key={milestone.milestone} milestone={milestone} />)}
                </div>
            </DashboardCard>
        </div>
    );
};

export default MilestoneTracker;