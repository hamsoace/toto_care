import type { Vaccine, Milestone, GrowthDataPoint, Achievement } from './types';
import { 
    FirstStepsBadge, 
    VaccinationHeroBadge, 
    GrowthTrackerBadge, 
    FeedingExpertBadge, 
    CommunityStarBadge, 
    ANCChampionBadge 
} from './components/icons/Icons';

export const ANC_VISITS = [
  { week: 8, completed: true },
  { week: 12, completed: true },
  { week: 20, completed: true },
  { week: 26, completed: true },
  { week: 30, completed: false },
  { week: 34, completed: false },
  { week: 36, completed: false },
  { week: 38, completed: false },
];

export const VACCINE_SCHEDULE: Vaccine[] = [
  { name: 'BCG', dueDate: 'At Birth', status: 'completed' },
  { name: 'OPV 0', dueDate: 'At Birth', status: 'completed' },
  { name: 'OPV 1 & DPT-HepB-Hib 1', dueDate: '6 Weeks', status: 'pending' },
  { name: 'PCV 1', dueDate: '6 Weeks', status: 'pending' },
  { name: 'Rotavirus 1', dueDate: '6 Weeks', status: 'overdue' },
];

export const MILESTONES: Milestone[] = [
    { milestone: 'Lifts head while on tummy', category: 'Gross Motor', ageInMonths: 1, achieved: true },
    { milestone: 'Smiles at people', category: 'Social', ageInMonths: 2, achieved: true },
    { milestone: 'Babbles', category: 'Cognitive', ageInMonths: 4, achieved: false },
    { milestone: 'Rolls over', category: 'Gross Motor', ageInMonths: 5, achieved: false },
];

export const GROWTH_DATA: GrowthDataPoint[] = [
    { age: 0, weight: 3.3, percentile3: 2.5, percentile50: 3.3 },
    { age: 1, weight: 4.5, percentile3: 3.4, percentile50: 4.5 },
    { age: 2, weight: 5.8, percentile3: 4.4, percentile50: 5.6 },
    { age: 3, weight: 6.5, percentile3: 5.1, percentile50: 6.4 },
    { age: 4, weight: 7.0, percentile3: 5.6, percentile50: 7.0 },
    { age: 5, weight: 7.8, percentile3: 6.1, percentile50: 7.5 },
    { age: 6, weight: 8.2, percentile3: 6.4, percentile50: 7.9 },
];

export const ACHIEVEMENTS: Achievement[] = [
    { name: 'First Steps', unlocked: true, icon: FirstStepsBadge },
    { name: 'ANC Champion', unlocked: true, icon: ANCChampionBadge },
    { name: 'Vaccination Hero', unlocked: true, icon: VaccinationHeroBadge },
    { name: 'Growth Tracker', unlocked: false, icon: GrowthTrackerBadge },
    { name: 'Feeding Expert', unlocked: false, icon: FeedingExpertBadge },
    { name: 'Community Star', unlocked: false, icon: CommunityStarBadge },
];