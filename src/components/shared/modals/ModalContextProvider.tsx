import React, { useState } from 'react';

import NewPurchaseModal from 'components/shared/modals/NewPurchaseModal';

const ModalContext = React.createContext<{
  setIsPurchaseModalOpen: React.Dispatch<React.SetStateAction<boolean>> | null;
}>({ setIsPurchaseModalOpen: null });

const ModalContextProvider: React.FC = ({ children }) => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] =
    useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ setIsPurchaseModalOpen }}>
      {children}
      <NewPurchaseModal
        isOpen={isPurchaseModalOpen}
        setIsOpen={setIsPurchaseModalOpen}
      />
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
export { ModalContext };
