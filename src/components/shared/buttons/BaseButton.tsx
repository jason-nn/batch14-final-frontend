import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { motion } from 'framer-motion';

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
  loading: number;
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
      // added unary operator to loading to convert boolean to number
      // conditionals are still valid but resolves html attribute warning
      // https://maximeblanc.fr/blog/how-to-fix-the-received-true-for-a-non-boolean-attribute-error
      loading={+loading}
      colorScheme={colorScheme}
    >
      <motion.div
        whileHover={{
          scale: disabled || loading ? 1.0 : 1.1,
        }}
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
      </motion.div>
    </ButtonContainer>
  );
};

export default BaseButton;
