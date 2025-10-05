import React from 'react';
import type { ParentType, Achievement } from '../../types';
import { UserCircle, Award, ChevronRight, Settings, HelpCircle, LogOut } from '../icons/Icons';
import AchievementBadge from './AchievementBadge';

interface ProfileScreenProps {
  userName: string;
  parentType: ParentType;
  points: number;
  achievements: Achievement[];
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userName, parentType, points, achievements }) => {
  const roleText = parentType === 'mum' ? 'Mum' : parentType === 'dad' ? 'Dad' : 'Parent';

  return (
    <div className="p-4 space-y-6 bg-gray-50">
      {/* User Info */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
        <UserCircle className="w-16 h-16 text-gray-400" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{userName || 'User'}</h2>
          <p className="text-gray-600 font-medium">{roleText}</p>
        </div>
      </div>

      {/* Points Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-yellow-500" />
            <h3 className="font-bold text-gray-800">TotoPoints</h3>
          </div>
          <p className="text-2xl font-bold text-primary">{points.toLocaleString()}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2 mb-4">Redeem points for airtime, accessories, and more with our partners.</p>
        <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          Redeem Points
        </button>
      </div>

      {/* Achievements Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Achievements</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-4 gap-x-2">
          {achievements.map(ach => <AchievementBadge key={ach.name} {...ach} />)}
        </div>
      </div>

      {/* Menu List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <ul className="divide-y divide-gray-200">
          <MenuItem icon={UserCircle} text="Edit Profile" />
          <MenuItem icon={Settings} text="App Settings" />
          <MenuItem icon={HelpCircle} text="Help Center" />
          <MenuItem icon={LogOut} text="Log Out" />
        </ul>
      </div>
    </div>
  );
};

const MenuItem: React.FC<{icon: React.FC<any>, text: string}> = ({icon: Icon, text}) => (
    <li className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors">
        <div className="flex items-center space-x-4">
            <Icon className="w-6 h-6 text-gray-500" />
            <span className="font-medium text-gray-700">{text}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
    </li>
);

export default ProfileScreen;