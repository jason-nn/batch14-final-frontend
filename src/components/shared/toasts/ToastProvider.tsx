import React, { useState } from 'react';

import ErrorToast from 'components/shared/toasts/ErrorToast';
import SuccessToast from 'components/shared/toasts/SuccessToast';

interface ToastDispatch {
  type: 'SUCCESS' | 'ERROR';
  message: string;
}

const ToastContext = React.createContext<{
  toastDispatch: React.Dispatch<ToastDispatch> | null;
}>({ toastDispatch: null });

const ToastProvider: React.FC = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>(
    setTimeout(() => {
      return;
    }, 100)
  );

  const toastDispatch = (toastDispatch: ToastDispatch) => {
    if (toastDispatch.type === 'SUCCESS') {
      clearTimeout(currentTimeout);
      setErrorMessage(null);
      setSuccessMessage(toastDispatch.message);
      setCurrentTimeout(
        setTimeout(() => {
          setSuccessMessage(null);
          console.log('close');
        }, 5000)
      );
    }
    if (toastDispatch.type === 'ERROR') {
      clearTimeout(currentTimeout);
      setSuccessMessage(null);
      setErrorMessage(toastDispatch.message);
      setCurrentTimeout(
        setTimeout(() => {
          setErrorMessage(null);
          console.log('close');
        }, 5000)
      );
    }
  };

  return (
    <ToastContext.Provider value={{ toastDispatch }}>
      {children}
      <SuccessToast message={successMessage} />
      <ErrorToast message={errorMessage} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
export { ToastContext };
