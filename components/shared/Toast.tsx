import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const baseClasses = 'fixed bottom-20 left-1/2 -translate-x-1/2 p-4 rounded-lg text-white shadow-lg transition-transform transform-gpu animate-fade-in-up';
  const typeClasses = {
    success: 'bg-success',
    error: 'bg-danger',
    info: 'bg-primary'
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`} role="alert">
      {message}
    </div>
  );
};

export default Toast;
