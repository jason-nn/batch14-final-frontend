import React, { useCallback, useMemo, useState } from 'react';
import { z } from 'zod';

import Form from 'components/shared/Form';
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

  const onSubmit = useCallback(() => {
    setSubmittingValue(true);
    console.log('Submit');
    setTimeout(() => {
      setSubmittingValue(false);
    }, 1000);
  }, []);

  const disabled = useMemo(
    () => !isCryptocurrencyValueValid,
    // add isPriceInUsdValid and isQuantityValid
    [isCryptocurrencyValueValid]
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
        <ValidatedBaseInput
          label="Cryptocurrency"
          type="text"
          value={cryptocurrencyValue}
          setValue={setCryptocurrencyValue}
          setIsValid={setIsCryptocurrencyValueValid}
          validators={z.string().min(1, { message: 'This field is required' })}
        />
        {/* add price in usd and quantity inputs */}
      </Form>
    </BaseModal>
  );
};

export default NewPurchaseModal;
