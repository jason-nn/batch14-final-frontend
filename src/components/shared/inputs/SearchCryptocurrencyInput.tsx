import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { SymbolContext } from 'components/shared/SymbolContextProvider';
import ValidatedBaseInput, {
  ValidatedBaseInputProps,
} from 'components/shared/inputs/ValidatedBaseInput';

const SearchCryptocurrencyInputContainer = styled.div`
  position: relative;
`;

const SearchResultsOuterContainer = styled.div`
  position: relative;
`;

const SearchResultsInnerContainer = styled.div`
  background: #f4f6f8;
  border-radius: 0px 16px;

  padding: 10px 30px;

  position: absolute;
  top: 5px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px;

  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: CircularStd-Bold;
  font-size: 14px;
`;

const SearchCryptocurrencyInput: React.FC<ValidatedBaseInputProps> = ({
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
  const { symbols } = useContext(SymbolContext);

  const searchResults = useMemo(
    () =>
      symbols
        .filter((symbol) => symbol.startsWith(value))
        .sort()
        .splice(0, 5),
    [symbols, value]
  );

  return (
    <SearchCryptocurrencyInputContainer>
      <ValidatedBaseInput
        label={label}
        showLabel={showLabel}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        setIsValid={setIsValid}
        validators={validators}
        watch={watch}
        backgroundColor={backgroundColor}
      />
      <AnimatePresence>
        {searchResults.length > 0 && value.length > 0 && (
          <motion.div
            key={`${label
              .toLowerCase()
              .split(' ')
              .join('-')}-search-cryptocurrency-input-search-results`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchResultsOuterContainer>
              <SearchResultsInnerContainer>
                {searchResults.map((searchResult) => (
                  <div>{searchResult.toUpperCase()}</div>
                ))}
              </SearchResultsInnerContainer>
            </SearchResultsOuterContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </SearchCryptocurrencyInputContainer>
  );
};

export default SearchCryptocurrencyInput;
