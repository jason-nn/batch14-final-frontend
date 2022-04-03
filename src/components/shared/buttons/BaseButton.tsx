import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

interface ColorScheme {
  activeText: string;
  activeBackground: string;
  activeBorder: string;
  disabledText: string;
  disabledBackground: string;
  disabledBorder: string;
}

interface BaseButtonProps {
  buttonText: string;
  disabled: boolean;
  loading: boolean;
  onClick?: () => void;
  colorScheme: ColorScheme;
}

interface ButtonContainerProps {
  disabled: boolean;
  loading: boolean;
  colorScheme: ColorScheme;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  button {
    background-color: ${(props) =>
      props.disabled
        ? props.colorScheme.disabledBackground
        : props.colorScheme.activeBackground};
    color: ${(props) =>
      props.disabled
        ? props.colorScheme.disabledText
        : props.colorScheme.activeText};

    border: 1.5px solid
      ${(props) =>
        props.disabled
          ? props.colorScheme.disabledBorder
          : props.colorScheme.activeBorder};
    border-radius: 16px 0px;
    padding: 8px 20px;

    font-size: 15px;
    font-family: CircularStd-Bold;

    cursor: ${(props) =>
      props.disabled || props.loading ? 'not-allowed' : 'pointer'};
    transition: 250ms ease-in-out;
  }

  button:hover {
    transform: ${(props) =>
      props.disabled || props.loading ? 'scale(1.0)' : 'scale(1.1)'};
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;

  span {
    display: block;
  }
`;

const BaseButton: React.FC<BaseButtonProps> = ({
  buttonText,
  disabled,
  loading,
  onClick,
  colorScheme,
}) => {
  return (
    <ButtonContainer
      disabled={disabled}
      loading={loading}
      colorScheme={colorScheme}
    >
      <button
        onClick={() => {
          if (!disabled && !loading && onClick) {
            onClick();
          }
        }}
      >
        {loading ? (
          <LoaderContainer>
            <ClipLoader size={19} color="white" />
          </LoaderContainer>
        ) : (
          <span>{buttonText}</span>
        )}
      </button>
    </ButtonContainer>
  );
};

export default BaseButton;
