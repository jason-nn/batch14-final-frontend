import { motion, AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { z } from 'zod';

import BaseInput, { BaseInputProps } from 'components/shared/inputs/BaseInput';

interface ValidatedBaseInputProps extends BaseInputProps {
  setIsValid: React.Dispatch<boolean>;
  validators: z.ZodString | z.ZodNumber;
  watch?: string;
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
  showLabel,
  type,
  placeholder,
  value,
  setValue,
  setIsValid,
  validators,
  watch,
  backgroundColor,
}) => {
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(
    (value: string) => {
      const formattedValue = type === 'number' ? parseFloat(value) : value;
      const zod = validators.safeParse(formattedValue);
      if (zod.success) {
        setIsValid(true);
        setError(null);
      } else {
        setIsValid(false);
        setError(zod.error.issues[0].message);
      }
    },
    [setIsValid, validators, type]
  );

  useEffect(() => {
    if (watch) {
      validate(value);
    }
  }, [watch, validate, value]);

  return (
    <ValidatedBaseInputContainer>
      <BaseInput
        label={label}
        showLabel={showLabel}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        onChange={(value) => {
          validate(value);
        }}
        backgroundColor={backgroundColor}
      />
      <AnimatePresence>
        {error ? (
          <motion.div
            key={`${label
              .toLowerCase()
              .split(' ')
              .join('-')}-validated-base-input-error`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Error>{error}</Error>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ValidatedBaseInputContainer>
  );
};

export default ValidatedBaseInput;
export type { ValidatedBaseInputProps };
