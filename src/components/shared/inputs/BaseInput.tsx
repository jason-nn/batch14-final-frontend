import React from 'react';
import styled from 'styled-components';

interface BaseInputProps {
  label: string;
  type: 'text' | 'number' | 'password';
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<string>;
  onChange?: (value: string) => void;
}

const BaseInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    text-transform: uppercase;
    color: #1d4ed8;
    font-family: CircularStd-Bold;
    font-size: 10px;
  }

  input {
    background-color: #f4f6f8;
    border-radius: 0px 16px;
    padding: 10px 30px;
    border: none;

    font-size: 14px;
    font-family: CircularStd-Bold;

    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  input:focus {
    outline: none;
  }
`;

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  onChange,
}) => {
  return (
    <BaseInputContainer>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        onWheel={(e) => {
          if (type === 'number') {
            e.currentTarget.blur();
          }
        }}
      />
    </BaseInputContainer>
  );
};

export default BaseInput;
export type { BaseInputProps };
