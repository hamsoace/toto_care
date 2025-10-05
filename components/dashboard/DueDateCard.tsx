
import React, { useState, useEffect } from 'react';
import { Calendar } from '../icons/Icons';

interface DueDateCardProps {
    dueDateStr: string;
}

const DueDateCard: React.FC<DueDateCardProps> = ({ dueDateStr }) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    if (!dueDateStr) return;
    const dueDate = new Date(dueDateStr);
    const today = new Date();
    // Set hours to 0 to compare dates only
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, [dueDateStr]);

  return (
    <div className="bg-gradient-to-br from-secondary to-pink-400 rounded-xl shadow-lg p-4 text-white flex flex-col justify-between h-full">
        <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5"/>
            <h3 className="font-bold text-sm">Due Date</h3>
        </div>
      <div>
        <p className="text-3xl font-bold">{daysLeft >= 0 ? daysLeft : 'Welcome!'}</p>
        <p className="text-xs opacity-80">{daysLeft >= 0 ? 'days to go!' : 'Your baby is here!'}</p>
      </div>
    </div>
  );
};

export default DueDateCard;
