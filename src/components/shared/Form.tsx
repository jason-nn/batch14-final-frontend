import React from 'react';
import styled from 'styled-components';

import Header from 'components/shared/Header';
import PrimaryButton from 'components/shared/buttons/PrimaryButton';

interface FormProps {
  header: string;
  onSubmit: () => void;
  disabled: boolean;
  submitting: boolean;
  buttonText: string;
  buttonWidth?: string;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form: React.FC<FormProps> = ({
  header,
  onSubmit,
  disabled,
  submitting,
  buttonText,
  buttonWidth,
  children,
}) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled && !submitting) {
          onSubmit();
        }
      }}
    >
      <Header>{header}</Header>
      {children}
      <ButtonContainer>
        <PrimaryButton
          buttonText={buttonText}
          disabled={disabled}
          loading={submitting}
          buttonWidth={buttonWidth}
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
