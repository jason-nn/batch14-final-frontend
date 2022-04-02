import React from 'react';

import BaseButton from 'components/shared/buttons/BaseButton';

interface SecondaryButtonProps {
  buttonText: string;
  disabled: boolean;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
        activeText: '#1D4ED8',
        activeBackground: '#FFFFFF',
        activeBorder: '#1D4ED8',
        disabledText: '#A3A3A3',
        disabledBackground: '#FFFFFF',
        disabledBorder: '#A3A3A3',
      }}
    />
  );
};

export default SecondaryButton;
