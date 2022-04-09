import React, { useCallback, useContext, useMemo, useState } from 'react';
import { z } from 'zod';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import Form from 'components/shared/Form';
import { UserContext } from 'components/shared/UserContextProvider';
import SearchCryptocurrencyInput from 'components/shared/inputs/SearchCryptocurrencyInput';
import ValidatedBaseInput from 'components/shared/inputs/ValidatedBaseInput';
import BaseModal from 'components/shared/modals/BaseModal';
import { ToastContext } from 'components/shared/toasts/ToastContextProvider';

import hodlr from 'services/hodlr';

interface NewPurchaseModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPurchaseModal: React.FC<NewPurchaseModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { userState } = useContext(UserContext);
  const { toastDispatch } = useContext(ToastContext);
  const { setUserPurchases } = useContext(PurchaseContext);

  const [submittingValue, setSubmittingValue] = useState<boolean>(false);

  const [cryptocurrencyValue, setCryptocurrencyValue] = useState<string>('');
  const [isCryptocurrencyValueValid, setIsCryptocurrencyValueValid] =
    useState<boolean>(false);
  const [showCryptocurrencyInput, setShowCryptocurrencyInput] =
    useState<boolean>(true);

  const [priceInUsdValue, setPriceInUsdValue] = useState<string>('');
  const [isPriceInUsdValueValid, setIsPriceInUsdValueValid] =
    useState<boolean>(false);

  const [quantityValue, setQuantityValue] = useState<string>('');
  const [isQuantityValueValid, setIsQuantityValueValid] =
    useState<boolean>(false);

  const disabled = useMemo(
    () =>
      !(
        isCryptocurrencyValueValid &&
        !showCryptocurrencyInput &&
        isPriceInUsdValueValid &&
        isQuantityValueValid
      ),
    [
      isCryptocurrencyValueValid,
      showCryptocurrencyInput,
      isPriceInUsdValueValid,
      isQuantityValueValid,
    ]
  );

  const reset = useCallback(() => {
    setSubmittingValue(false);
    setCryptocurrencyValue('');
    setIsCryptocurrencyValueValid(false);
    setShowCryptocurrencyInput(true);
    setPriceInUsdValue('');
    setIsPriceInUsdValueValid(false);
    setQuantityValue('');
    setIsQuantityValueValid(false);
  }, []);

  const onSubmit = useCallback(() => {
    setSubmittingValue(true);
    if (userState.token) {
      hodlr
        .cryptocurrency(userState.token, cryptocurrencyValue)
        .then((response) => {
          console.log(response);
          const cryptocurrencyId = response.data.id;
          if (userState.token) {
            hodlr
              .createPurchase(userState.token, {
                cryptocurrencyId,
                price: parseFloat(priceInUsdValue),
                quantity: parseFloat(quantityValue),
              })
              .then((response) => {
                console.log(response);
                setUserPurchases &&
                  setUserPurchases((current) => [response.data, ...current]);
                setSubmittingValue(false);
                toastDispatch &&
                  toastDispatch({ type: 'SUCCESS', message: 'Added purchase' });
                setIsOpen(false);
                reset();
              })
              .catch((error) => {
                console.log(error);
                setSubmittingValue(false);
                toastDispatch &&
                  toastDispatch({
                    type: 'ERROR',
                    message: 'Internal error',
                  });
              });
          } else {
            setSubmittingValue(false);
            toastDispatch &&
              toastDispatch({
                type: 'ERROR',
                message: 'You are not authenticated',
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setSubmittingValue(false);
          toastDispatch &&
            toastDispatch({
              type: 'ERROR',
              message: 'Coin data not available',
            });
        });
    } else {
      setSubmittingValue(false);
      toastDispatch &&
        toastDispatch({ type: 'ERROR', message: 'You are not authenticated' });
    }
  }, [
    cryptocurrencyValue,
    priceInUsdValue,
    quantityValue,
    userState.token,
    reset,
    setIsOpen,
    toastDispatch,
    setUserPurchases,
  ]);

  return (
    <BaseModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      motionKey="purchase-modal"
      onClose={reset}
    >
      <Form
        header="New Purchase"
        onSubmit={onSubmit}
        disabled={disabled}
        submitting={submittingValue}
        buttonText="Add purchase"
        buttonWidth="140px"
      >
        <SearchCryptocurrencyInput
          label="Coin"
          type="text"
          value={cryptocurrencyValue}
          setValue={setCryptocurrencyValue}
          setIsValid={setIsCryptocurrencyValueValid}
          validators={z.string().min(1, { message: 'This field is required' })}
          showInput={showCryptocurrencyInput}
          setShowInput={setShowCryptocurrencyInput}
        />
        <ValidatedBaseInput
          label="Price per Coin in USD"
          type="number"
          value={priceInUsdValue}
          setValue={setPriceInUsdValue}
          setIsValid={setIsPriceInUsdValueValid}
          validators={z
            .number({
              required_error: 'This field is required',
              invalid_type_error: 'This field is required',
            })
            .positive({ message: 'Must be greater than 0' })}
        />
        <ValidatedBaseInput
          label="Quantity"
          type="number"
          value={quantityValue}
          setValue={setQuantityValue}
          setIsValid={setIsQuantityValueValid}
          validators={z
            .number({
              required_error: 'This field is required',
              invalid_type_error: 'This field is required',
            })
            .positive({ message: 'Must be greater than 0' })}
        />
      </Form>
    </BaseModal>
  );
};

export default NewPurchaseModal;
