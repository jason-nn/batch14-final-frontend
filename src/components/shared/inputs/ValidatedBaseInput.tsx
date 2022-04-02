import React, { useState } from 'react';
import styled from 'styled-components';
import { z } from 'zod';

import BaseInput, { BaseInputProps } from 'components/shared/inputs/BaseInput';

interface ValidatedBaseInputProps extends BaseInputProps {
  setIsValid: React.Dispatch<boolean>;
  validators: z.ZodString | z.ZodNumber;
}

const ValidatedBaseInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Error = styled.div`
  text-transform: uppercase;
  color: #ef4444;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

const ValidatedBaseInput: React.FC<ValidatedBaseInputProps> = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  setIsValid,
  validators,
}) => {
  const [error, setError] = useState<String>('');

  return (
    <ValidatedBaseInputContainer>
      <BaseInput
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        onChange={(value) => {
          const zod = validators.safeParse(value);
          if (zod.success) {
            setIsValid(true);
            setError('');
          } else {
            setIsValid(false);
            setError(zod.error.issues[0].message);
          }
        }}
      />
      {error.length ? <Error>{error}</Error> : null}
    </ValidatedBaseInputContainer>
  );
};

export default ValidatedBaseInput;
