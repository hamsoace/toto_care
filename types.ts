import React from 'react';

export interface NavItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type ParentType = 'mum' | 'dad' | null;

export interface Vaccine {
    name: string;
    dueDate: string;
    status: 'completed' | 'pending' | 'overdue';
}

export interface Milestone {
    milestone: string;
    category: 'Gross Motor' | 'Fine Motor' | 'Social' | 'Cognitive';
    ageInMonths: number;
    achieved: boolean;
}

export interface GrowthDataPoint {
    age: number;
    weight: number;
    percentile3: number;
    percentile50: number;
}

export interface Achievement {
  name: string;
  unlocked: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}