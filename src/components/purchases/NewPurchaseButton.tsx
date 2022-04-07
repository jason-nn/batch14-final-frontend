import React, { useContext } from 'react';

import PrimaryButton from 'components/shared/buttons/PrimaryButton';
import { ModalContext } from 'components/shared/modals/ModalContextProvider';

const NewPurchaseButton: React.FC = () => {
  const { setIsPurchaseModalOpen } = useContext(ModalContext);

  return (
    <PrimaryButton
      buttonText="New purchase"
      disabled={false}
      loading={false}
      onClick={() => {
        setIsPurchaseModalOpen && setIsPurchaseModalOpen(true);
      }}
    />
  );
};

export default NewPurchaseButton;
