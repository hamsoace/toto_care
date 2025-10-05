import React from 'react';
import { Bell } from '../icons/Icons';

interface GreetingHeaderProps {
    name: string;
    parentType: 'mum' | 'dad' | null;
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({ name, parentType }) => {
    const roleText = parentType === 'mum' ? 'Mum' : 'Dad';
    return (
        <div className="p-4 bg-light-blue">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Hello, {name || roleText}!</h1>
                    <p className="text-sm text-gray-600">Let's check on your journey today.</p>
                </div>
                 <button className="relative p-2 rounded-full bg-white shadow-sm">
                    <Bell className="w-6 h-6 text-gray-600" />
                    <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-secondary ring-2 ring-white"></span>
                </button>
            </div>
        </div>
    );
};

export default GreetingHeader;