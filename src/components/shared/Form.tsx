import React from 'react';
import styled from 'styled-components';

interface FormProps {
  header: string;
  onSubmit: () => void;
  disabled: boolean;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    text-transform: uppercase;
    color: #1d4ed8;
    font-family: CircularStd-Bold;
    font-size: 10px;
  }
`;

const Header = styled.div`
  font-family: CircularStd-Black;
  font-size: 25px;
`;

const Form: React.FC<FormProps> = ({
  header,
  onSubmit,
  disabled,
  children,
}) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) {
          onSubmit();
        }
      }}
    >
      <Header>{header}</Header>
      {children}
    </FormContainer>
  );
};

export default Form;
