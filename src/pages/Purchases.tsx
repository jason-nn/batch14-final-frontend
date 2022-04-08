import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

import NewPurchaseButton from 'components/purchases/NewPurchaseButton';
import PurchaseTable from 'components/purchases/PurchaseTable';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';
import BaseInput from 'components/shared/inputs/BaseInput';

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Purchases: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SignedIn>
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
    </SignedIn>
  );
};

export default Purchases;
