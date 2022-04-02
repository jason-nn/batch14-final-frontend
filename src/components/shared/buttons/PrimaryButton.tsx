import React from 'react';

import BaseButton from 'components/shared/buttons/BaseButton';

interface PrimaryButtonProps {
  buttonText: string;
  disabled: boolean;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  disabled,
  onClick,
}) => {
  return (
    <BaseButton
      buttonText={buttonText}
      disabled={disabled}
      onClick={onClick}
      colorScheme={{
        activeText: '#FFFFFF',
        activeBackground: '#1D4ED8',
        activeBorder: '#1D4ED8',
        disabledText: '#FFFFFF',
        disabledBackground: '#A3A3A3',
        disabledBorder: '#A3A3A3',
      }}
    />
  );
};

export default PrimaryButton;
