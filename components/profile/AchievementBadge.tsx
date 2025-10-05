import React from 'react';

interface AchievementBadgeProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  unlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ icon: Icon, name, unlocked }) => {
  return (
    <div className={`flex flex-col items-center text-center space-y-1 ${unlocked ? 'opacity-100' : 'opacity-40'}`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${unlocked ? 'bg-light-blue' : 'bg-gray-200'}`}>
        <Icon className={`w-8 h-8 ${unlocked ? 'text-primary' : 'text-gray-500'}`} />
      </div>
      <p className="text-xs font-semibold text-gray-700">{name}</p>
    </div>
  );
};

export default AchievementBadge;