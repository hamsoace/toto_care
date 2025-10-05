
import React from 'react';
import type { NavItem } from '../../types';

interface BottomNavProps {
  items: NavItem[];
  activeTab: string;
  setActiveTab: (name: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ items, activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-xs font-medium transition-colors duration-200 ${
              activeTab === item.name ? 'text-primary' : 'text-gray-500 hover:text-primary'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span>{item.name}</span>
            {activeTab === item.name && (
                <div className="w-8 h-1 bg-primary rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
