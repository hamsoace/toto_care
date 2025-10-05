import React from 'react';
import { Award } from '../icons/Icons';

interface PointsCardProps {
    points: number;
}

const PointsCard: React.FC<PointsCardProps> = ({ points }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-blue-400 rounded-xl shadow-lg p-4 text-white flex flex-col justify-between h-full">
        <div className="flex items-center space-x-2">
            <Award className="w-5 h-5"/>
            <h3 className="font-bold text-sm">TotoPoints</h3>
        </div>
      <div>
        <p className="text-3xl font-bold">{points.toLocaleString()}</p>
        <p className="text-xs opacity-80">Keep it up!</p>
      </div>
    </div>
  );
};

export default PointsCard;