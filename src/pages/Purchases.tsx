import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import NewPurchaseButton from 'components/purchases/NewPurchaseButton';
import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';
import PurchaseTable from 'components/purchases/PurchaseTable';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Loading from 'components/shared/Loading';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';
import { SymbolContext } from 'components/shared/SymbolContextProvider';
import BaseInput from 'components/shared/inputs/BaseInput';

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Purchases: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const { isPurchaseContextReady } = useContext(PurchaseContext);
  const { isSymbolContextReady } = useContext(SymbolContext);

  return (
    <SignedIn>
      <Loading loading={!(isPurchaseContextReady && isSymbolContextReady)}>
        <Navbar selected="purchases" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BodyContainer>
            <SpaceBetween>
              <Header>Purchases</Header>
              <NewPurchaseButton />
            </SpaceBetween>
            <BaseInput
              label="Search Crypto"
              showLabel={false}
              type="text"
              value={searchValue}
              setValue={setSearchValue}
              placeholder="Search by coin"
              backgroundColor="#FFFFFF"
            />
            <PurchaseTable filter={searchValue} />
          </BodyContainer>
        </motion.div>
      </Loading>
    </SignedIn>
  );
};

export default Purchases;
