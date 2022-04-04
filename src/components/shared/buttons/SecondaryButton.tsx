import React from 'react';

import BaseButton from 'components/shared/buttons/BaseButton';

interface SecondaryButtonProps {
  buttonText: string;
  disabled: boolean;
  loading: boolean;
  onClick?: () => void;
  buttonWidth?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  buttonText,
  disabled,
  loading,
  onClick,
  buttonWidth,
}) => {
  return (
    <BaseButton
      buttonText={buttonText}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      colorScheme={{
        activeText: '#1D4ED8',
        activeBackground: '#FFFFFF',
        activeBorder: '#1D4ED8',
        disabledText: '#A3A3A3',
        disabledBackground: '#FFFFFF',
        disabledBorder: '#A3A3A3',
      }}
      buttonWidth={buttonWidth}
    />
  );
};

export default SecondaryButton;
