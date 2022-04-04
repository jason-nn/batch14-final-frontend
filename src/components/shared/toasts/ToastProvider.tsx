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

  const toastDispatch = (toastDispatch: ToastDispatch) => {
    if (toastDispatch.type === 'SUCCESS') {
      setErrorMessage(null);
      setSuccessMessage(toastDispatch.message);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
    if (toastDispatch.type === 'ERROR') {
      setSuccessMessage(null);
      setErrorMessage(toastDispatch.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
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
