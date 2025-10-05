
import React from 'react';
import { ChevronRight } from '../icons/Icons';

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, children, className, ctaText, onCtaClick }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 ${className || ''}`}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="font-bold text-gray-800 text-base">{title}</h3>
        </div>
        {ctaText && (
          <button onClick={onCtaClick} className="flex items-center text-sm font-semibold text-primary">
            {ctaText}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
