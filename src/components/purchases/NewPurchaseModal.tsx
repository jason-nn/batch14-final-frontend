import React, { useCallback, useMemo, useState } from 'react';
import { z } from 'zod';

import Form from 'components/shared/Form';
import SearchCryptocurrencyInput from 'components/shared/inputs/SearchCryptocurrencyInput';
import ValidatedBaseInput from 'components/shared/inputs/ValidatedBaseInput';
import BaseModal from 'components/shared/modals/BaseModal';

interface NewPurchaseModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPurchaseModal: React.FC<NewPurchaseModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [submittingValue, setSubmittingValue] = useState<boolean>(false);

  const [cryptocurrencyValue, setCryptocurrencyValue] = useState<string>('');
  const [isCryptocurrencyValueValid, setIsCryptocurrencyValueValid] =
    useState<boolean>(false);

  const [priceInUsdValue, setPriceInUsdValue] = useState<string>('');
  const [isPriceInUsdValueValid, setIsPriceInUsdValueValid] =
    useState<boolean>(false);

  const [quantityValue, setQuantityValue] = useState<string>('');
  const [isQuantityValueValid, setIsQuantityValueValid] =
    useState<boolean>(false);

  const onSubmit = useCallback(() => {
    setSubmittingValue(true);
    console.log('Submit');
    setTimeout(() => {
      setSubmittingValue(false);
    }, 1000);
  }, []);

  const disabled = useMemo(
    () =>
      !(
        isCryptocurrencyValueValid &&
        isPriceInUsdValueValid &&
        isQuantityValueValid
      ),
    [isCryptocurrencyValueValid, isPriceInUsdValueValid, isQuantityValueValid]
  );

  return (
    <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} motionKey="purchase-modal">
      <Form
        header="New Purchase"
        onSubmit={onSubmit}
        disabled={disabled}
        submitting={submittingValue}
        buttonText="Add purchase"
        buttonWidth="140px"
      >
        <SearchCryptocurrencyInput
          label="Cryptocurrency"
          type="text"
          value={cryptocurrencyValue}
          setValue={setCryptocurrencyValue}
          setIsValid={setIsCryptocurrencyValueValid}
          validators={z.string().min(1, { message: 'This field is required' })}
        />
        <ValidatedBaseInput
          label="Price in USD"
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
