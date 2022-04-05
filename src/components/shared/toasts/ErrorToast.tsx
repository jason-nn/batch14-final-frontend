import React from 'react';

import BaseToast from 'components/shared/toasts/BaseToast';

interface ErrorToastProps {
  message: string | null;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  return (
    <BaseToast
      message={message}
      colorScheme={{
        text: '#EF4444',
        background: '#FEE2E2',
        border: '#FEE2E2',
      }}
    />
  );
};

export default ErrorToast;
