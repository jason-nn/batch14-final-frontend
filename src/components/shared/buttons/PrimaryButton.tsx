import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
  buttonText: string;
  disabled: boolean;
  onClick?: () => void;
}

interface ButtonContainerProps {
  disabled: boolean;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  button {
    background-color: ${(props) => (props.disabled ? '#a3a3a3' : '#1d4ed8')};
    color: #ffffff;

    border: 1.5px solid ${(props) => (props.disabled ? '#a3a3a3' : '#1d4ed8')};
    border-radius: 16px 0px;
    padding: 8px 20px;

    font-size: 15px;
    font-family: CircularStd-Bold;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: 250ms ease-in-out;
  }

  button:hover {
    background-color: ${(props) => (props.disabled ? '#a3a3a3' : '#1d4ed8')};
    transform: ${(props) => (props.disabled ? 'scale(1.0)' : 'scale(1.1)')};
  }
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  disabled,
  onClick,
}) => {
  return (
    <ButtonContainer disabled={disabled}>
      <button
        onClick={() => {
          if (!disabled && onClick) {
            onClick();
          }
        }}
      >
        {buttonText}
      </button>
    </ButtonContainer>
  );
};

export default PrimaryButton;
