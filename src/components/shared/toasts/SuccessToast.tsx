import React from 'react';

import BaseToast from 'components/shared/toasts/BaseToast';

interface SuccessToastProps {
  message: string | null;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message }) => {
  return (
    <BaseToast
      message={message}
      colorScheme={{
        text: '#10B981',
        background: '#D1FAE5',
        border: '#10B981',
      }}
    />
  );
};

export default SuccessToast;
