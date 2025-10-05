
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from '../icons/Icons';

interface OtpVerificationScreenProps {
  phone: string;
  onOtpVerified: () => void;
}

const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({ phone, onOtpVerified }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    // Allow only single digit numbers
    if (/^[0-9]$/.test(value) || value === '') {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if a digit is entered
        if(value !== '' && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      // Move to previous input on backspace if current input is empty
      if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
          inputsRef.current[index - 1]?.focus();
      }
  }

  const isOtpComplete = otp.every(digit => digit !== '');

  const handleVerify = () => {
    if (isOtpComplete) {
      // In a real app, you would verify the OTP against a backend service.
      onOtpVerified();
    }
  }

  return (
    <div className="flex flex-col flex-grow justify-between p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Verify your phone</h1>
        <p className="text-gray-600 mt-2">Enter the 6-digit code sent to +254 {phone}.</p>
      </div>

      <div className="flex justify-center space-x-2 my-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => { inputsRef.current[index] = el; }}
            type="tel"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center">
          <p className="text-sm text-gray-600">Didn't receive a code?</p>
          <button className="font-semibold text-primary hover:underline">Resend code</button>
      </div>

      <button
        onClick={handleVerify}
        disabled={!isOtpComplete}
        className="w-full mt-8 flex items-center justify-center space-x-2 bg-primary text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        <span>Verify & Continue</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default OtpVerificationScreen;
