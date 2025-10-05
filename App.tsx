import React, { useState } from 'react';

// Onboarding Components
import WelcomeScreen from './components/onboarding/WelcomeScreen';
import SelectParentScreen from './components/onboarding/SelectParentScreen';
import AuthMethodScreen from './components/onboarding/AuthMethodScreen';
import PhoneInputScreen from './components/onboarding/PhoneInputScreen';
import OtpVerificationScreen from './components/onboarding/OtpVerificationScreen';
import EmailInputScreen from './components/onboarding/EmailInputScreen';
import ProfileSetupScreen from './components/onboarding/ProfileSetupScreen';

// Dashboard Components
import GreetingHeader from './components/dashboard/GreetingHeader';
import DueDateCard from './components/dashboard/DueDateCard';
import PointsCard from './components/dashboard/PointsCard';
import ANCTracker from './components/dashboard/ANCTracker';
import VaccinationSchedule from './components/dashboard/VaccinationSchedule';
import GrowthChartCard from './components/dashboard/GrowthChartCard';
import DangerSignsCard from './components/dashboard/DangerSignsCard';
import MilestoneTracker from './components/dashboard/MilestoneTracker';
import PPDScreeningCard from './components/dashboard/PPDScreeningCard';

// Mental Health Screen
import PPDScreening from './components/mental-health/PPDScreening';

// Profile Screen
import ProfileScreen from './components/profile/ProfileScreen';

// Layout & Shared Components
import BottomNav from './components/layout/BottomNav';
import OnboardingHeader from './components/layout/OnboardingHeader';

// Icons
import { Home, BarChart3, HeartPulse, UserCircle } from './components/icons/Icons';

// Types
import type { NavItem, ParentType, Achievement } from './types';
import { ACHIEVEMENTS } from './constants';

// App State
type OnboardingStep = 
  | 'welcome' 
  | 'selectParent'
  | 'profileSetup'
  | 'authMethod'
  | 'phoneInput'
  | 'otpVerification'
  | 'emailInput';

const App = () => {
    const [isOnboarded, setIsOnboarded] = useState(false);
    const [isScreening, setIsScreening] = useState(false);
    const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('welcome');
    const [parentType, setParentType] = useState<ParentType>(null);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDueDate, setUserDueDate] = useState('');
    const [activeTab, setActiveTab] = useState('Home');
    
    // Gamification State
    const [points, setPoints] = useState(1250);
    const [achievements, setAchievements] = useState(ACHIEVEMENTS);

    // --- Onboarding Handlers ---
    const handleBack = () => {
      switch (onboardingStep) {
        case 'selectParent': setOnboardingStep('welcome'); break;
        case 'profileSetup': setOnboardingStep('selectParent'); break;
        case 'authMethod': setOnboardingStep('profileSetup'); break;
        case 'phoneInput': setOnboardingStep('authMethod'); break;
        case 'emailInput': setOnboardingStep('authMethod'); break;
        case 'otpVerification': setOnboardingStep('phoneInput'); break;
      }
    };
    
    const handleParentSelect = (type: ParentType) => {
        setParentType(type);
        setOnboardingStep('profileSetup');
    };

    const handleProfileComplete = (name: string, dueDate: string) => {
      setUserName(name);
      setUserDueDate(dueDate);
      setOnboardingStep('authMethod');
    };
    
    const handleAuthMethodSelect = (method: 'phone' | 'email') => {
        setOnboardingStep(method === 'phone' ? 'phoneInput' : 'emailInput');
    };

    const handlePhoneSubmitted = (phone: string) => {
        setUserPhone(phone);
        setOnboardingStep('otpVerification');
    };

    const handleOtpVerified = () => {
        // In a real app, all user data would be saved to the backend here.
        setIsOnboarded(true);
    };
    
    const handleEmailSubmitted = (email: string, password: string) => {
        // In a real app, all user data would be saved to the backend here.
        setIsOnboarded(true);
    };

    // --- Navigation ---
    const navItems: NavItem[] = [
        { name: 'Home', icon: Home },
        { name: 'Growth', icon: BarChart3 },
        { name: 'Health', icon: HeartPulse },
        { name: 'Profile', icon: UserCircle },
    ];

    const renderOnboardingScreen = () => {
      const showHeader = onboardingStep !== 'welcome';
      const screenContent = () => {
          switch(onboardingStep) {
              case 'welcome':
                  return <WelcomeScreen onGetStarted={() => setOnboardingStep('selectParent')} />;
              case 'selectParent':
                  return <SelectParentScreen onSelect={handleParentSelect} />;
              case 'profileSetup':
                  return <ProfileSetupScreen parentType={parentType} onProfileComplete={handleProfileComplete} />;
              case 'authMethod':
                  return <AuthMethodScreen onSelect={handleAuthMethodSelect} />;
              case 'phoneInput':
                  return <PhoneInputScreen onPhoneSubmitted={handlePhoneSubmitted} />;
              case 'otpVerification':
                  return <OtpVerificationScreen phone={userPhone} onOtpVerified={handleOtpVerified} />;
              case 'emailInput':
                  return <EmailInputScreen onEmailSubmitted={handleEmailSubmitted} />;
              default:
                  return <WelcomeScreen onGetStarted={() => setOnboardingStep('selectParent')} />;
          }
      };
      
      return (
        <div className="flex flex-col h-screen bg-gray-50">
            {showHeader && <OnboardingHeader onBack={handleBack} />}
            {screenContent()}
        </div>
      );
    }
    
    // --- Render Logic ---

    if (isScreening) {
        return <PPDScreening onComplete={() => {
            alert('Thank you for completing the screening. Your health provider will be in touch if needed.');
            setIsScreening(false);
        }} />
    }

    if (!isOnboarded) {
        return renderOnboardingScreen();
    }
    
    const DashboardContent = () => (
        <>
            <div className="grid grid-cols-2 gap-4 px-4">
                <DueDateCard dueDateStr={userDueDate}/>
                <PointsCard points={points} />
            </div>
            <ANCTracker />
            <VaccinationSchedule />
            <MilestoneTracker />
            <PPDScreeningCard onStartScreening={() => setIsScreening(true)} />
            <DangerSignsCard />
        </>
    );

    const GrowthContent = () => <div className="space-y-4"><GrowthChartCard /></div>;
    const HealthContent = () => <div className="space-y-4"><ANCTracker /><VaccinationSchedule /><DangerSignsCard /></div>;

    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20">
            <GreetingHeader name={userName} parentType={parentType} />
            
            <main className={activeTab === 'Profile' ? '' : 'py-4 space-y-4'}>
                {activeTab === 'Home' && <DashboardContent />}
                {activeTab === 'Growth' && <GrowthContent />}
                {activeTab === 'Health' && <HealthContent />}
                {activeTab === 'Profile' && (
                    <ProfileScreen 
                        userName={userName}
                        parentType={parentType}
                        points={points}
                        achievements={achievements}
                    />
                )}
            </main>
            
            <BottomNav items={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
};

export default App;