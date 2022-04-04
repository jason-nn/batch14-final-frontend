import React from 'react';

import BaseButton from 'components/shared/buttons/BaseButton';

interface PrimaryButtonProps {
  buttonText: string;
  disabled: boolean;
  loading: boolean;
  onClick?: () => void;
  buttonWidth?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
        activeText: '#FFFFFF',
        activeBackground: '#1D4ED8',
        activeBorder: '#1D4ED8',
        disabledText: '#FFFFFF',
        disabledBackground: '#A3A3A3',
        disabledBorder: '#A3A3A3',
      }}
      buttonWidth={buttonWidth}
    />
  );
};

export default PrimaryButton;
