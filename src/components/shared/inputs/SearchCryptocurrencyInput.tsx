import { motion, AnimatePresence } from 'framer-motion';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';

import { SymbolContext } from 'components/shared/SymbolContextProvider';
import ValidatedBaseInput, {
  ValidatedBaseInputProps,
} from 'components/shared/inputs/ValidatedBaseInput';

import CLOSE_ICON from 'images/close.svg';

interface SearchCryptocurrencyInputProps extends ValidatedBaseInputProps {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SearchResultProps {
  highlight: boolean;
}

const SearchCryptocurrencyInputContainer = styled.div`
  position: relative;
`;

const SearchResultsOuterContainer = styled.div`
  position: relative;
`;

const SearchResultsInnerContainer = styled.div`
  background: #f4f6f8;
  border-radius: 0px 16px;

  position: absolute;
  top: 5px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px;

  width: 50%;
  overflow: hidden;

  font-family: CircularStd-Bold;
  font-size: 14px;
`;

const SearchResult = styled.div<SearchResultProps>`
  cursor: pointer;
  padding: 5px 30px;

  color: ${(props) => (props.highlight ? '#1D4ED8' : '#000000')};
  background-color: ${(props) => (props.highlight ? '#EFF6FF' : '#FFFFFF')};
`;

const SelectedResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    text-transform: uppercase;
    color: #1d4ed8;
    font-family: CircularStd-Bold;
    font-size: 10px;
  }

  & > div {
    background: #f4f6f8;
    border-radius: 0px 16px;
    padding: 10px 30px;

    font-family: CircularStd-Bold;
    font-size: 14px;

    display: flex;
    justify-content: space-between;

    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px;
  }

  img {
    height: 18px;
    width: auto;
    cursor: pointer;
  }
`;

const Error = styled.div`
  text-transform: uppercase;
  color: #ef4444;
  font-family: CircularStd-Bold;
  font-size: 10px;

  margin-top: 5px;
`;

const SearchCryptocurrencyInput: React.FC<SearchCryptocurrencyInputProps> = ({
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
  showInput,
  setShowInput,
}) => {
  const { symbols } = useContext(SymbolContext);

  const [highlightedSearchResultIndex, setHighlightedSearchResultIndex] =
    useState<number>(0);

  useEffect(() => {
    setHighlightedSearchResultIndex(0);
  }, [value]);

  const searchResults = useMemo(
    () =>
      symbols
        .filter((symbol) => symbol.startsWith(value.toLowerCase()))
        .sort()
        .splice(0, 5),
    [symbols, value]
  );

  const noResults = useMemo(() => searchResults.length < 1, [searchResults]);
  console.log(noResults);

  const select = useCallback(() => {
    setValue(searchResults[highlightedSearchResultIndex].toUpperCase());
    setShowInput(false);
  }, [setValue, searchResults, highlightedSearchResultIndex, setShowInput]);

  const onKeyDown = useCallback(
    (event) => {
      if (event.code === 'ArrowUp') {
        if (highlightedSearchResultIndex > 0) {
          setHighlightedSearchResultIndex((current) => current - 1);
        }
      }
      if (event.code === 'ArrowDown') {
        if (highlightedSearchResultIndex < searchResults.length - 1) {
          setHighlightedSearchResultIndex((current) => current + 1);
        }
      }
      if (event.code === 'Enter') {
        if (searchResults.length > 0) {
          select();
        }
      }
    },
    [highlightedSearchResultIndex, searchResults, select]
  );

  return (
    <SearchCryptocurrencyInputContainer onKeyDown={onKeyDown}>
      {showInput ? (
        <AnimatePresence>
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
                  {searchResults.map((searchResult, index) => (
                    <SearchResult
                      key={index}
                      highlight={highlightedSearchResultIndex === index}
                      onMouseOver={() => setHighlightedSearchResultIndex(index)}
                      onClick={select}
                    >
                      {searchResult.toUpperCase()}
                    </SearchResult>
                  ))}
                </SearchResultsInnerContainer>
              </SearchResultsOuterContainer>
            </motion.div>
          )}
          {noResults && (
            <motion.div
              key={`${label
                .toLowerCase()
                .split(' ')
                .join('-')}-search-cryptocurrency-input-error`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Error>No cryptocurrency matches this symbol</Error>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <SelectedResult>
          <label>{label}</label>
          <div>
            <span>{value}</span>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src={CLOSE_ICON}
                alt=""
                onClick={() => {
                  setShowInput(true);
                }}
              />
            </motion.div>
          </div>
        </SelectedResult>
      )}
    </SearchCryptocurrencyInputContainer>
  );
};

export default SearchCryptocurrencyInput;
