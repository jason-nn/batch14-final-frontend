import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

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
  type,
  placeholder,
  value,
  setValue,
  setIsValid,
  validators,
  watch,
}) => {
  const [error, setError] = useState<String>('');

  const validate = useCallback(
    (value: string) => {
      const zod = validators.safeParse(value);
      if (zod.success) {
        setIsValid(true);
        setError('');
      } else {
        setIsValid(false);
        setError(zod.error.issues[0].message);
      }
    },
    [setIsValid, validators]
  );

  useEffect(() => {
    if (watch) {
      console.log(watch);
      validate(value);
    }
  }, [watch, validate, value]);

  return (
    <ValidatedBaseInputContainer>
      <BaseInput
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        onChange={(value) => {
          validate(value);
        }}
      />
      <AnimatePresence>
        {error.length ? (
          <motion.div
            key={`${label.toLowerCase().split(' ').join('-')}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
          >
            <Error>{error}</Error>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ValidatedBaseInputContainer>
  );
};

export default ValidatedBaseInput;
